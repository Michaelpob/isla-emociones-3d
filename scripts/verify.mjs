import { createRequire } from 'node:module';
import { mkdirSync } from 'node:fs';
import { join } from 'node:path';

const runtimeModules = 'C:/Users/nazat/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules';
const require = createRequire(import.meta.url);
const { chromium } = require(`${runtimeModules}/playwright`);
const { PNG } = require(`${runtimeModules}/pngjs`);

const outputDir = join(process.cwd(), 'artifacts');
mkdirSync(outputDir, { recursive: true });

const browser = await chromium.launch({
  headless: true,
  executablePath: 'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe'
});
const page = await browser.newPage({ viewport: { width: 1280, height: 820 } });
page.on('console', (message) => console.log(`[browser:${message.type()}] ${message.text()}`));
page.on('pageerror', (error) => console.log(`[pageerror] ${error.message}`));

try {
  await page.goto('http://127.0.0.1:5173/', { waitUntil: 'networkidle' });
  await page.waitForSelector('.scene-host canvas');
  await page.waitForTimeout(900);
  await assertCanvasHasColor(page, '.scene-host canvas', 'map-start.png');

  await page.getByRole('button', { name: 'Comenzar' }).click();
  await page.locator('[data-island-id="joy"]').click();
  await page.locator('[data-play]').click();
  await page.waitForSelector('.minigame--joy canvas', { timeout: 8000 }).catch(async (error) => {
    console.log(await page.locator('body').evaluate((body) => body.innerText));
    throw error;
  });
  await page.waitForTimeout(700);
  await assertCanvasHasColor(page, '.minigame--joy canvas', 'joy-game.png');

  const gameCanvas = page.locator('.minigame--joy canvas');
  const box = await gameCanvas.boundingBox();
  if (!box) throw new Error('No se encontro el canvas del minijuego.');

  const offsets = [
    [0, 0],
    [-110, -55],
    [110, -55],
    [-155, 35],
    [155, 35],
    [-70, 95],
    [70, 95],
    [0, -125],
    [-210, 0],
    [210, 0],
    [-35, 35],
    [35, -35]
  ];

  for (let round = 0; round < 8; round += 1) {
    if ((await page.locator('.result-screen').count()) > 0) break;
    if ((await page.locator('[data-score]').count()) === 0) break;
    const scoreText = await page.locator('[data-score]').textContent({ timeout: 1000 }).catch(() => '0');
    const score = Number(scoreText);
    if (score >= 6) break;
    for (const [dx, dy] of offsets) {
      await page.mouse.click(box.x + box.width / 2 + dx, box.y + box.height / 2 + dy);
      await page.waitForTimeout(45);
    }
  }

  await page.waitForSelector('.result-screen', { timeout: 15000 });
  const resultTitle = await page.locator('.result-screen h2').textContent();
  if (!resultTitle?.includes('Alegria completada')) {
    throw new Error(`Resultado inesperado: ${resultTitle}`);
  }

  console.log('Verificacion OK: escena 3D, minijuego y resultado funcionan.');
} finally {
  await browser.close();
}

async function assertCanvasHasColor(page, selector, screenshotName) {
  const canvas = page.locator(selector);
  const box = await canvas.boundingBox();
  if (!box) throw new Error(`No se encontro ${selector}`);

  const buffer = await page.screenshot({
    path: join(outputDir, screenshotName),
    clip: {
      x: Math.max(0, box.x),
      y: Math.max(0, box.y),
      width: Math.max(1, Math.min(box.width, 900)),
      height: Math.max(1, Math.min(box.height, 620))
    }
  });
  const png = PNG.sync.read(buffer);
  const colors = new Set();
  for (let y = 0; y < png.height; y += 12) {
    for (let x = 0; x < png.width; x += 12) {
      const index = (png.width * y + x) << 2;
      colors.add(`${png.data[index]},${png.data[index + 1]},${png.data[index + 2]}`);
    }
  }
  if (colors.size < 24) {
    throw new Error(`${selector} parece estar en blanco: solo ${colors.size} colores muestreados.`);
  }
}
