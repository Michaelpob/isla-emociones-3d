// Nucleo 3D · Base de todos los minijuegos
// Ciclo de vida estricto: init() → start() → update(dt) → pause() → reset() → dispose()
//
// Aporta: renderer + escena + camara + bucle, PlayerController, InteractableManager,
// Feedback, AudioBus, HUD minima (objetivo en puntos, barras pequenas, chip [E]),
// controles tactiles, menu de pausa, portal de salida y tarjeta final opcional.
//
// dispose() libera geometrias, materiales, texturas, listeners, rAF, timers y audio:
// salir de una isla no deja residuo en la siguiente.

import * as THREE from 'three';
import { PlayerController } from './PlayerController.js?v=20260908173652';
import { InteractableManager, Interactable } from './Interactable.js?v=20260908173652';
import { Feedback } from './Feedback.js?v=20260908173652';
import { AudioBus } from './AudioBus.js?v=20260908173652';
import { gameState, setSetting, prefersReducedMotion } from '../data/gameState.js?v=20260908173652';

export class MinigameBase {
  constructor({ host, island, player, onComplete, onExit, onOpenToolbox, mode = 'first' }) {
    this.host = host;
    this.island = island;
    this.player = player;
    this.onComplete = onComplete;
    this.onExitCb = onExit;
    this.onOpenToolbox = onOpenToolbox;
    this.mode = mode;

    this.disposables = [];
    this.timers = new Set();
    this.listeners = [];
    this.running = false;
    this.paused = false;
    this.finished = false;
    this.objective = { done: 0, total: 0 };
    this.bars = new Map();
    this.rafId = null;
    this.startInfo = null;
  }

  /* =============================================================== montaje */

  /** Contrato con EmotionIslandApp */
  mount() {
    this.init();
    this.start();
  }

  init() {
    this.root = document.createElement('div');
    this.root.className = `i3d i3d--${this.island?.id ?? 'island'}`;
    this.root.innerHTML = `
      <div class="i3d__canvas" data-canvas></div>
      <div class="i3d__hud" data-hud>
        <button class="i3d__btn i3d__btn--back" type="button" data-pause aria-label="Pausa">❚❚</button>
        <div class="i3d__objective" data-objective aria-live="polite"></div>
        <div class="i3d__bars" data-bars></div>
      </div>
      <div class="i3d__center" data-center aria-live="polite"></div>
      <div class="i3d__touch" data-touch hidden>
        <div class="i3d__stick" data-stick><i data-knob></i></div>
        <div class="i3d__buttons">
          <button class="i3d__tbtn" type="button" data-touch-jump aria-label="Saltar">⤒</button>
          <button class="i3d__tbtn i3d__tbtn--main" type="button" data-touch-interact aria-label="Interactuar">E</button>
        </div>
      </div>
      <div class="i3d__overlay" data-overlay></div>
    `;
    this.host.appendChild(this.root);

    this.el = {
      canvas: this.root.querySelector('[data-canvas]'),
      hud: this.root.querySelector('[data-hud]'),
      objective: this.root.querySelector('[data-objective]'),
      bars: this.root.querySelector('[data-bars]'),
      center: this.root.querySelector('[data-center]'),
      touch: this.root.querySelector('[data-touch]'),
      overlay: this.root.querySelector('[data-overlay]')
    };

    this._initRenderer();
    this._initScene();

    this.audio = new AudioBus(this.camera);
    this.audio.init();
    this.feedback = new Feedback(this.scene, this.camera, this.audio);

    this.controller = new PlayerController({
      camera: this.camera,
      domElement: this.renderer.domElement,
      mode: this.mode,
      bounds: this.bounds ?? null
    });
    this.interactables = new InteractableManager({ camera: this.camera, hud: this.el.hud });

    this.controller.on('interact', () => this.interactables.interact());
    this.controller.on('step', ({ running }) => this.audio.play(running ? 'stepRun' : 'step', { volume: 0.25 }));
    this.controller.on('jump', () => this.audio.play('interact', { volume: 0.18, rate: 1.5 }));

    this._initInput();
    this._initTouch();

    // Contenido concreto de la isla
    this.build();

    // memoria antes de jugar, para verificar dispose()
    this.startInfo = {
      geometries: this.renderer.info.memory.geometries,
      textures: this.renderer.info.memory.textures
    };
  }

  _initRenderer() {
    const coarse = window.matchMedia('(pointer: coarse)').matches;
    this.renderer = new THREE.WebGLRenderer({ antialias: !coarse, powerPreference: 'high-performance' });
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, coarse ? 1.5 : 1.75));
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    this.renderer.shadowMap.autoUpdate = false;   // escenas estaticas: se refresca a mano
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.05;
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;
    this.el.canvas.appendChild(this.renderer.domElement);

    this.camera = new THREE.PerspectiveCamera(72, 1, 0.1, 220);
    this._resize();
    this._onResize = () => this._resize();
    window.addEventListener('resize', this._onResize);
    this.listeners.push(() => window.removeEventListener('resize', this._onResize));
  }

  _initScene() {
    this.scene = new THREE.Scene();
    this.clock = new THREE.Clock();
  }

  _resize() {
    const rect = this.el.canvas.getBoundingClientRect();
    const w = Math.max(1, rect.width || window.innerWidth);
    const h = Math.max(1, rect.height || window.innerHeight);
    this.renderer.setSize(w, h, false);
    this.camera.aspect = w / h;
    this.camera.updateProjectionMatrix();
  }

  _initInput() {
    const onKey = (e) => {
      if (e.key === 'Escape') {
        this.controller.exitPointerLock();
        this.togglePause(true);
      }
      if (e.key === 'F3') { e.preventDefault(); this.toggleStats(); }
    };
    window.addEventListener('keydown', onKey);
    this.listeners.push(() => window.removeEventListener('keydown', onKey));

    const onCanvasClick = () => {
      if (this.paused || this.finished) return;
      if (this.mode === 'first') this.controller.requestPointerLock();
    };
    this.renderer.domElement.addEventListener('click', onCanvasClick);
    this.listeners.push(() => this.renderer.domElement.removeEventListener('click', onCanvasClick));

    this.root.querySelector('[data-pause]').addEventListener('click', () => this.togglePause(true));
  }

  _initTouch() {
    const stick = this.root.querySelector('[data-stick]');
    const knob = this.root.querySelector('[data-knob]');
    const jump = this.root.querySelector('[data-touch-jump]');
    const interact = this.root.querySelector('[data-touch-interact]');

    // Deteccion por pointer events (nunca por user-agent)
    const showTouch = (e) => {
      if (e.pointerType === 'touch') this.el.touch.hidden = false;
    };
    window.addEventListener('pointerdown', showTouch);
    this.listeners.push(() => window.removeEventListener('pointerdown', showTouch));
    if (window.matchMedia('(pointer: coarse)').matches) this.el.touch.hidden = false;

    let active = null;
    const max = 46;
    const move = (e) => {
      if (active !== e.pointerId) return;
      const rect = stick.getBoundingClientRect();
      let dx = e.clientX - (rect.left + rect.width / 2);
      let dy = e.clientY - (rect.top + rect.height / 2);
      const d = Math.hypot(dx, dy);
      if (d > max) { dx = (dx / d) * max; dy = (dy / d) * max; }
      knob.style.transform = `translate(${dx}px, ${dy}px)`;
      this.controller.touch.move.x = dx / max;
      this.controller.touch.move.y = dy / max;
      this.controller.touch.run = d > max * 0.85;
    };
    const end = (e) => {
      if (active !== e.pointerId) return;
      active = null;
      knob.style.transform = 'translate(0,0)';
      this.controller.touch.move.x = 0;
      this.controller.touch.move.y = 0;
      this.controller.touch.run = false;
    };
    stick.addEventListener('pointerdown', (e) => { active = e.pointerId; stick.setPointerCapture(e.pointerId); move(e); });
    stick.addEventListener('pointermove', move);
    stick.addEventListener('pointerup', end);
    stick.addEventListener('pointercancel', end);

    jump.addEventListener('pointerdown', (e) => { e.preventDefault(); this.controller.tryJump(); });
    interact.addEventListener('pointerdown', (e) => { e.preventDefault(); this.interactables.interact(); });
    // mantener pulsado en el boton principal (respiracion)
    interact.addEventListener('pointerup', () => this.onHoldEnd?.());
    interact.addEventListener('pointerdown', () => this.onHoldStart?.());
  }

  /* ================================================================= ciclo */

  /** Las islas construyen aqui su escenario. Obligatorio. */
  build() {
    throw new Error('build() no implementado');
  }

  start() {
    if (this.running) return;
    this.running = true;
    this.paused = false;
    this.clock.start();
    this.onStart?.();
    this.renderer.shadowMap.needsUpdate = true;
    const loop = () => {
      this.rafId = requestAnimationFrame(loop);
      this.step();
    };
    this.rafId = requestAnimationFrame(loop);
    // Primer render inmediato: la escena se ve aunque el navegador retrase rAF
    this.step(0);
  }

  /** Un paso del bucle. dt explicito permite probar el juego sin animacion real. */
  step(forcedDt = null) {
    const dt = forcedDt !== null ? forcedDt : Math.min(this.clock.getDelta(), 0.05);
    if (!this.paused && !this.finished) {
      this.controller.update(dt);
      this.interactables.update(this.controller.position);
      this.onUpdate?.(dt);
    }
    this.feedback.update(dt);
    this.renderer.render(this.scene, this.camera);
    if (this._stats) this._updateStats(dt);
  }

  update(dt) { this.step(dt); }

  pause() { this.togglePause(true); }
  resume() { this.togglePause(false); }

  togglePause(on) {
    if (this.finished) return;
    const next = on ?? !this.paused;
    if (next === this.paused) return;
    this.paused = next;
    if (this.paused) {
      this.controller.exitPointerLock();
      this.audio?.duck(0.2);
      this._showPauseMenu();
    } else {
      this.audio?.unduck();
      this.el.overlay.innerHTML = '';
      this.clock.getDelta(); // descarta el tiempo en pausa
    }
  }

  _showPauseMenu() {
    this.el.overlay.innerHTML = `
      <div class="i3d-panel" role="dialog" aria-modal="true" aria-label="Pausa">
        <h3>Pausa</h3>
        <div class="i3d-panel__actions">
          <button class="i3d-btn i3d-btn--primary" type="button" data-resume>Seguir</button>
          <button class="i3d-btn" type="button" data-restart>Reiniciar</button>
          <button class="i3d-btn" type="button" data-toolbox>Mi caja</button>
          <button class="i3d-btn" type="button" data-leave>Salir al mapa</button>
        </div>
        <p class="i3d-panel__hint">WASD moverse · SHIFT correr · SPACE saltar · E interactuar · ESC pausa</p>
      </div>
    `;
    const q = (s) => this.el.overlay.querySelector(s);
    q('[data-resume]').focus({ preventScroll: true });
    q('[data-resume]').addEventListener('click', () => this.togglePause(false));
    q('[data-restart]').addEventListener('click', () => { this.togglePause(false); this.reset(); });
    q('[data-toolbox]').addEventListener('click', () => this.onOpenToolbox?.());
    q('[data-leave]').addEventListener('click', () => this.onExitCb?.());
  }

  /** Reinicia la isla sin recargar la pagina */
  reset() {
    this.objective.done = 0;
    this.renderObjective();
    this.feedback.tweens.length = 0;
    this.controller.velocity.set(0, 0, 0);
    this.controller.frozen = false;
    this.controller.speedScale = 1;
    this.el.center.innerHTML = '';
    this.onReset?.();
    this.renderer.shadowMap.needsUpdate = true;
  }

  /* ================================================================== HUD */

  /** Objetivo en puntos: ● ● ● ○ ○ */
  setObjective(total, icon = '●') {
    this.objective = { done: 0, total, icon };
    this.renderObjective();
  }

  advanceObjective(n = 1) {
    this.objective.done = Math.min(this.objective.total, this.objective.done + n);
    this.renderObjective();
    return this.objective.done >= this.objective.total;
  }

  renderObjective() {
    const { done, total, icon = '●' } = this.objective;
    if (!total) { this.el.objective.innerHTML = ''; return; }
    let html = '';
    for (let i = 0; i < total; i += 1) {
      html += `<i class="${i < done ? 'is-on' : ''}">${icon}</i>`;
    }
    this.el.objective.innerHTML = html;
  }

  /** Barra pequena de estado (bateria, respiracion, combo) */
  addBar(id, { icon = '▮', color = '#ffd166', value = 1 } = {}) {
    const el = document.createElement('div');
    el.className = 'i3d-bar';
    el.style.setProperty('--c', color);
    el.innerHTML = `<span class="i3d-bar__icon" aria-hidden="true">${icon}</span><span class="i3d-bar__track"><i></i></span>`;
    this.el.bars.appendChild(el);
    const fill = el.querySelector('i');
    const bar = {
      el,
      set(v) { fill.style.width = `${Math.max(0, Math.min(1, v)) * 100}%`; },
      show(on) { el.hidden = !on; },
      remove() { el.remove(); }
    };
    bar.set(value);
    this.bars.set(id, bar);
    return bar;
  }

  bar(id) { return this.bars.get(id); }

  /** Texto brevisimo en el centro (3-5 palabras). Se desvanece solo. */
  say(text, ms = 1600) {
    this.el.center.innerHTML = `<p class="i3d-flash">${text}</p>`;
    if (ms) {
      const t = setTimeout(() => {
        if (this.el.center.textContent === text) this.el.center.innerHTML = '';
      }, ms);
      this.timers.add(t);
    }
  }

  clearSay() { this.el.center.innerHTML = ''; }

  /* ============================================================== utilidad */

  addDisposable(obj) {
    this.disposables.push(obj);
    return obj;
  }

  later(fn, ms) {
    const t = setTimeout(() => { this.timers.delete(t); fn(); }, ms);
    this.timers.add(t);
    return t;
  }

  /** Crea un interactuable ya registrado */
  interactable(opts) {
    return this.interactables.add(new Interactable(opts));
  }

  /* ======================================================== cierre e isla */

  /**
   * FASE 4: al superar el reto se abre un portal fisico en la escena.
   * El jugador camina hasta el por su propia voluntad.
   */
  openPortal(position, { color = '#ffe9a8', label = 'Salir' } = {}) {
    if (this.portal) return this.portal;
    const group = new THREE.Group();
    group.position.set(position.x, position.y, position.z);

    const ringGeo = new THREE.TorusGeometry(1.25, 0.14, 10, 40);
    const ringMat = new THREE.MeshStandardMaterial({
      color, emissive: color, emissiveIntensity: 1.4, roughness: 0.35, flatShading: true
    });
    const ring = new THREE.Mesh(ringGeo, ringMat);
    ring.position.y = 1.5;
    group.add(ring);

    const veilGeo = new THREE.CircleGeometry(1.15, 28);
    const veilMat = new THREE.MeshBasicMaterial({
      color, transparent: true, opacity: 0.55, side: THREE.DoubleSide,
      blending: THREE.AdditiveBlending, depthWrite: false
    });
    const veil = new THREE.Mesh(veilGeo, veilMat);
    veil.position.y = 1.5;
    group.add(veil);

    const light = new THREE.PointLight(color, 2.4, 12, 2);
    light.position.y = 1.6;
    group.add(light);

    this.scene.add(group);
    this.addDisposable(group);
    this.portal = group;
    this.portalRing = ring;

    this.feedback.flash(position, { color, intensity: 5, duration: 1.2 });
    this.feedback.burst(position, { count: 30, color, speed: 4, life: 1.4 });
    this.audio?.play('success', { volume: 0.5 });

    this.interactable({
      object: group,
      radius: 2.4,
      icon: '🚪',
      label,
      onInteract: () => this.finish()
    });
    return group;
  }

  /** Datos de cierre de la isla: los define cada minijuego */
  get completionPayload() {
    return {
      islandId: this.island.id,
      success: true,
      emoAventura: true,
      badge: this.island.id,
      title: this.island.displayName,
      message: ''
    };
  }

  /**
   * Tarjeta psicoeducativa OPCIONAL al final (se puede saltar).
   * Aqui viven las explicaciones largas que ya no interrumpen el juego.
   */
  showClosingCard({ title, lines = [], toolId = null, onDone }) {
    this.controller.frozen = true;
    this.el.overlay.innerHTML = `
      <div class="i3d-panel i3d-panel--card" role="dialog" aria-modal="true" aria-label="${title}">
        <h3>${title}</h3>
        ${lines.map((l) => `<p>${l}</p>`).join('')}
        <div class="i3d-panel__actions">
          <button class="i3d-btn i3d-btn--primary" type="button" data-ok>Continuar</button>
        </div>
      </div>
    `;
    this.el.overlay.querySelector('[data-ok]').focus({ preventScroll: true });
    this.el.overlay.querySelector('[data-ok]').addEventListener('click', () => {
      this.el.overlay.innerHTML = '';
      onDone?.();
    });
    void toolId;
  }

  finish(extra = {}) {
    if (this.finished) return;
    this.finished = true;
    this.controller.frozen = true;
    this.controller.exitPointerLock();
    this.audio?.play('chime', { volume: 0.5 });
    this.onFinish?.();
    this.onComplete?.({ ...this.completionPayload, ...extra });
  }

  /* ================================================================ stats */

  toggleStats() {
    if (this._stats) {
      this._stats.remove();
      this._stats = null;
      return;
    }
    const el = document.createElement('div');
    el.className = 'i3d-stats';
    this.root.appendChild(el);
    this._stats = el;
    this._statsAcc = 0;
    this._statsFrames = 0;
  }

  _updateStats(dt) {
    this._statsAcc += dt;
    this._statsFrames += 1;
    if (this._statsAcc >= 0.5) {
      const fps = Math.round(this._statsFrames / this._statsAcc);
      const info = this.renderer.info;
      this._stats.textContent =
        `${fps} fps · ${info.render.calls} draws · ${info.render.triangles} tris · ` +
        `geo ${info.memory.geometries} · tex ${info.memory.textures}`;
      this._statsAcc = 0;
      this._statsFrames = 0;
    }
  }

  /* ============================================================== limpieza */

  dispose() {
    this.running = false;
    if (this.rafId) cancelAnimationFrame(this.rafId);
    this.rafId = null;
    this.timers.forEach((t) => clearTimeout(t));
    this.timers.clear();
    this.listeners.forEach((off) => off());
    this.listeners.length = 0;

    this.onDispose?.();

    this.interactables?.dispose();
    this.controller?.dispose();
    this.feedback?.dispose();
    this.audio?.dispose();

    // libera geometrias, materiales y texturas de toda la escena
    if (this.scene) {
      this.scene.traverse((obj) => {
        if (obj.isMesh || obj.isInstancedMesh || obj.isPoints || obj.isLine) {
          obj.geometry?.dispose?.();
          const mats = Array.isArray(obj.material) ? obj.material : [obj.material];
          mats.forEach((m) => {
            if (!m) return;
            Object.values(m).forEach((v) => { if (v && v.isTexture) v.dispose(); });
            m.dispose?.();
          });
        }
        if (obj.isInstancedMesh) obj.dispose?.();
      });
      this.scene.clear();
    }
    this.disposables.length = 0;

    if (this.renderer) {
      this.renderer.renderLists.dispose();
      this.renderer.dispose();
      this.renderer.forceContextLoss?.();
      this.renderer.domElement?.remove();
    }

    this.root?.remove();
    this.scene = null;
    this.camera = null;
    this.renderer = null;
  }

  /** Diagnostico: ¿el dispose devolvio la memoria al nivel previo? */
  memoryReport() {
    if (!this.renderer) return null;
    return {
      start: this.startInfo,
      now: {
        geometries: this.renderer.info.memory.geometries,
        textures: this.renderer.info.memory.textures
      }
    };
  }
}

export { THREE, prefersReducedMotion, gameState, setSetting };
