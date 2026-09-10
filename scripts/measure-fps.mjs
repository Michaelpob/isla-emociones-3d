/**
 * Medicion de FPS reales de las seis islas.
 *
 *   pnpm fps            → build de produccion, GPU real
 *   pnpm fps -- --cpu 4 → ademas, pasada con la CPU frenada 4x (gama media)
 *   pnpm fps -- --headless
 *
 * Levanta docs/ con el servidor del repo, abre un navegador con Playwright,
 * entra a cada isla, mueve al jugador y cuenta fotogramas reales.
 *
 * Notas de este equipo (Windows):
 * - El Chromium que descarga Playwright no arranca porque falta el runtime de
 *   Visual C++ ("configuracion en paralelo incorrecta"). Con
 *   `winget install Microsoft.VCRedist.2015+.x64` se arregla y entonces
 *   conviene usar `--chromium`, que es mas estable para medir.
 * - Por eso el canal por defecto es Edge, que usa el mismo motor. Edge a veces
 *   cierra la instancia recien lanzada si ya hay otro Edge abierto: si pasa,
 *   cierra Edge y vuelve a lanzar, o usa --chromium.
 * - Sin GPU dedicada el navegador cae en rasterizacion por software
 *   (Microsoft Basic Render Driver) y las cifras son el peor caso, no lo que
 *   vera un equipo normal.
 */
import { chromium } from 'playwright';
import { spawn } from 'node:child_process';
import { setTimeout as wait } from 'node:timers/promises';

const args = process.argv.slice(2);
const HEADLESS = args.includes('--headless');
const CPU_RATE = args.includes('--cpu') ? Number(args[args.indexOf('--cpu') + 1] || 4) : 0;
const SECONDS = Number(args[args.indexOf('--seconds') + 1]) || 6;
const PORT = 8177;

const ISLANDS = [
  ['fear', 'Isla del Miedo'],
  ['joy', 'Valle de la Luz'],
  ['anger', 'Volcan de las Emociones'],
  ['disgust', 'Guardianes del Desagrado'],
  ['sadness', 'El mundo que vuelve'],
  ['surprise', 'El jardin que cambia']
];

async function main() {
const server = spawn(process.execPath, ['scripts/serve-dist.mjs'], {
  env: { ...process.env, PORT: String(PORT) },
  stdio: 'ignore'
});
process.on('exit', () => server.kill());
await wait(900);

// El Chromium que descarga Playwright necesita el runtime de Visual C++ en
// Windows; Edge usa el mismo motor y ya esta instalado, asi que es el canal por
// defecto. Con --chromium se fuerza el navegador propio de Playwright.
const channel = args.includes('--chromium') ? undefined : 'msedge';

const browser = await chromium.launch({
  channel,
  headless: HEADLESS,          // headless usa SwiftShader: mide software, no GPU
  args: ['--enable-gpu', '--ignore-gpu-blocklist']
});
const page = await browser.newPage({ viewport: { width: 1280, height: 720 } });
const cdp = await page.context().newCDPSession(page);
if (CPU_RATE) await cdp.send('Emulation.setCPUThrottlingRate', { rate: CPU_RATE });

// El estado se siembra antes de que corra main.js: evita tener que recargar
await page.addInitScript(() => {
  localStorage.setItem('emotion-islands-player', JSON.stringify({
    name: 'Bench', avatar: '🦊', favoriteColor: '#1f9d82'
  }));
  const st = JSON.parse(localStorage.getItem('emo-aventura-state') || '{}');
  st.unlockedIslands = ['fear', 'joy', 'anger', 'disgust'];
  localStorage.setItem('emo-aventura-state', JSON.stringify(st));
});

await page.goto(`http://127.0.0.1:${PORT}/`, { waitUntil: 'domcontentloaded' });
await page.waitForFunction(() => !!window.emoAventura, null, { timeout: 20000 });

// Baseline: cuantos fotogramas da este equipo con una pagina vacia
const baseline = await page.evaluate(() => new Promise((resolve) => {
  let n = 0;
  const t0 = performance.now();
  const tick = () => {
    n += 1;
    if (performance.now() - t0 < 1500) requestAnimationFrame(tick);
    else resolve(+(n / ((performance.now() - t0) / 1000)).toFixed(1));
  };
  requestAnimationFrame(tick);
}));

const gpu = await page.evaluate(() => {
  const c = document.createElement('canvas');
  const gl = c.getContext('webgl2') || c.getContext('webgl');
  if (!gl) return 'sin webgl';
  const ext = gl.getExtension('WEBGL_debug_renderer_info');
  return ext ? gl.getParameter(ext.UNMASKED_RENDERER_WEBGL) : 'renderer desconocido';
});

const errores = [];
page.on('pageerror', (e) => errores.push(String(e.message)));
page.on('console', (m) => { if (m.type() === 'error') errores.push(m.text().slice(0, 120)); });

const results = [];
for (const [id, nombre] of ISLANDS) {
  await page.evaluate((islandId) => {
    const app = window.emoAventura;
    app.showMap();
    app.selectIsland(islandId);
    document.querySelector('[data-play]')?.click();
  }, id);
  await wait(1800);                       // que cargue y se estabilice

  await page.keyboard.down('w');          // moviendose: el caso realista
  const stats = await page.evaluate((seconds) => new Promise((resolve) => {
    const frames = [];
    let last = performance.now();
    const t0 = last;
    const tick = (now) => {
      frames.push(now - last);
      last = now;
      if (now - t0 < seconds * 1000) requestAnimationFrame(tick);
      else {
        frames.shift();
        const sorted = [...frames].sort((a, b) => a - b);
        const total = frames.reduce((s, v) => s + v, 0);
        const info = window.emoAventura.currentMinigame?.renderer?.info;
        resolve({
          fps: +(frames.length / (total / 1000)).toFixed(1),
          p95: +(1000 / sorted[Math.floor(sorted.length * 0.95)]).toFixed(1),
          peor: +(1000 / sorted[sorted.length - 1]).toFixed(1),
          frames: frames.length,
          draws: info?.render.calls ?? 0,
          tris: info?.render.triangles ?? 0
        });
      }
    };
    requestAnimationFrame(tick);
  }), SECONDS);
  await page.keyboard.up('w');

  results.push({ isla: nombre, ...stats });
  await page.evaluate(() => window.emoAventura.exitMinigame());
  await wait(600);
}

await browser.close();
server.kill();

const modo = `${HEADLESS ? 'headless' : 'con ventana'}${CPU_RATE ? ` · CPU frenada ${CPU_RATE}x` : ''}`;
console.log(`\nGPU: ${gpu}`);
console.log(`Modo: ${modo} · ${SECONDS}s por isla · 1280x720\n`);
console.table(results.map((r) => ({
  Isla: r.isla,
  'FPS medio': r.fps,
  'FPS p95': r.p95,
  'peor frame': r.peor,
  draws: r.draws,
  triangulos: r.tris
})));
const min = Math.min(...results.map((r) => r.fps));
console.log(`\nMinimo entre islas: ${min.toFixed(1)} fps`);
console.log(errores.length ? `Errores de consola: ${[...new Set(errores)].join(' | ')}` : 'Sin errores de consola.');
}

try {
  await main();
} catch (err) {
  const linea = String(err.message).split(/\r?\n/)[0];
  console.error(`\nNo se pudo completar la medicion: ${linea}`);
  console.error('Si el navegador se cerro solo: cierra Edge y reintenta, o instala');
  console.error('el runtime de Visual C++ y ejecuta `pnpm fps -- --chromium`.');
  process.exitCode = 1;
}
