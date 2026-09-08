import * as THREE from 'three';

const PHASE_SECONDS = 4;

const PHASES = [
  {
    id: 'inhale',
    title: 'RESPIRA',
    instruction: 'Mantén presionado el botón mientras inhalas.',
    buttonLabel: 'MANTÉN PRESIONADO',
    requiredPressed: true,
    failMessage: 'Debes mantener presionado el botón durante los 4 segundos.'
  },
  {
    id: 'hold',
    title: 'MANTÉN',
    instruction: 'Sigue manteniendo presionado.',
    buttonLabel: 'SIGUE PRESIONANDO',
    requiredPressed: true,
    failMessage: 'No sueltes todavía. Mantén presionado durante los 4 segundos.'
  },
  {
    id: 'exhale',
    title: 'SUELTA',
    instruction: 'Ahora suelta el botón y expulsa el aire lentamente.',
    buttonLabel: 'SUELTA',
    requiredPressed: false,
    failMessage: 'Debes soltar el botón y mantenerlo sin presionar durante los 4 segundos.'
  },
  {
    id: 'pause',
    title: 'MANTÉN LA CALMA',
    instruction: 'No presiones nada. Quédate quieto durante 4 segundos.',
    buttonLabel: 'NO PRESIONES',
    requiredPressed: false,
    failMessage: 'No presiones el botón. Mantente en calma durante los 4 segundos.'
  }
];

const CALM = {
  land: '#4fae95',
  base: '#1f9d82',
  ring: '#8ce8d4',
  hemiSky: '#cdf3ea',
  hemiGround: '#0a2622',
  sun: '#d8f5ec',
  fog: '#0c2624',
  sky: '#0c2624'
};

const mixA = new THREE.Color();
const mixB = new THREE.Color();

function mixHex(hexA, hexB, t) {
  mixA.set(hexA);
  mixB.set(hexB);
  mixA.lerp(mixB, Math.min(1, Math.max(0, t)));
  return `#${mixA.getHexString()}`;
}

function lerp(a, b, t) {
  return a + (b - a) * t;
}

function easeInOut(t) {
  return t < 0.5 ? 2 * t * t : 1 - ((-2 * t + 2) ** 2) / 2;
}

export class BreathingCalmGame {
  constructor({ host, island, onComplete, onExit }) {
    this.host = host;
    this.island = island;
    this.onComplete = onComplete;
    this.onExit = onExit;

    this.tense = {
      land: island.palette.land,
      base: island.palette.accent,
      ring: island.palette.glow,
      hemiSky: island.palette.foliage,
      hemiGround: '#210a06',
      sun: island.palette.glow,
      fog: '#3a1210',
      sky: '#3a1210'
    };

    this.state = 'idle';
    this.phaseIndex = 0;
    this.phaseElapsed = 0;
    this.pressed = false;
    this.hasWon = false;
    this.mounted = false;
    this.colorProgress = 0;
    this.breathScale = 0.62;
    this.clock = new THREE.Clock();
  }

  mount() {
    this.root = document.createElement('div');
    this.root.className = 'minigame minigame--breathing';
    this.root.innerHTML = `
      <div class="game-canvas" data-game-canvas></div>

      <section class="game-hud breathing-hud">
        <div>
          <p class="eyebrow">Enojo</p>
          <h2 data-phase-title aria-live="polite">¿Listo?</h2>
          <p class="breathing-instruction" data-phase-instruction>Presiona y mantén el botón para comenzar a respirar.</p>
        </div>
        <div class="breathing-progress" data-phase-progress>
          ${PHASES.map((_, i) => `<span class="breathing-dot" data-dot="${i}"></span>`).join('')}
        </div>
      </section>

      <div class="breathing-stage">
        <button type="button" class="breath-button" data-breath-button aria-label="Botón de respiración">
          <span class="breath-ring" data-breath-ring aria-hidden="true"></span>
          <span class="breath-inner">
            <span class="breath-count" data-breath-count>4</span>
            <span class="breath-button-label" data-breath-label>COMENZAR</span>
          </span>
        </button>
      </div>

      <div class="breathing-overlay breathing-overlay--lose instructions-overlay" data-lose-overlay style="display:none">
        <section class="instructions-panel breathing-panel breathing-panel--lose">
          <p class="eyebrow">Ejercicio interrumpido</p>
          <h2>¡Casi!</h2>
          <p class="instructions-text" data-lose-message></p>
          <div class="instructions-actions">
            <button class="primary-action" type="button" data-retry>Reintentar</button>
          </div>
        </section>
      </div>

      <div class="breathing-overlay breathing-overlay--win instructions-overlay" data-win-overlay style="display:none">
        <section class="instructions-panel breathing-panel breathing-panel--win">
          <p class="eyebrow">Isla del Enojo</p>
          <h2>¡LO LOGRASTE!</h2>
          <p class="instructions-text">Has completado el ejercicio de respiración. Respira con calma y continúa.</p>
          <div class="instructions-actions">
            <button class="secondary-action" type="button" data-repeat>Repetir ejercicio</button>
          </div>
        </section>
      </div>

      <button class="icon-button game-exit" type="button" aria-label="Volver al mapa" title="Volver al mapa" data-exit-x>X</button>
    `;
    this.host.appendChild(this.root);

    this.canvasHost = this.root.querySelector('[data-game-canvas]');
    this.phaseTitleEl = this.root.querySelector('[data-phase-title]');
    this.phaseInstructionEl = this.root.querySelector('[data-phase-instruction]');
    this.dots = [...this.root.querySelectorAll('[data-dot]')];
    this.breathButton = this.root.querySelector('[data-breath-button]');
    this.breathRing = this.root.querySelector('[data-breath-ring]');
    this.breathCount = this.root.querySelector('[data-breath-count]');
    this.breathLabel = this.root.querySelector('[data-breath-label]');
    this.loseOverlay = this.root.querySelector('[data-lose-overlay]');
    this.loseMessageEl = this.root.querySelector('[data-lose-message]');
    this.winOverlay = this.root.querySelector('[data-win-overlay]');
    this.exitX = this.root.querySelector('[data-exit-x]');

    this.breathButton.addEventListener('pointerdown', this.onPress);
    this.breathButton.addEventListener('contextmenu', (e) => e.preventDefault());
    this.root.querySelector('[data-retry]').addEventListener('click', this.resetSequence);
    this.root.querySelector('[data-repeat]').addEventListener('click', this.resetSequence);
    this.exitX.addEventListener('click', this.leave);

    window.addEventListener('pointerup', this.onRelease);
    window.addEventListener('pointercancel', this.onRelease);
    window.addEventListener('blur', this.onRelease);
    window.addEventListener('resize', this.resize);

    this.setupScene();
    this.resize();
    this.updateIdleUI();
    this.mounted = true;
    this.animate();
  }

  dispose() {
    this.mounted = false;
    window.removeEventListener('pointerup', this.onRelease);
    window.removeEventListener('pointercancel', this.onRelease);
    window.removeEventListener('blur', this.onRelease);
    window.removeEventListener('resize', this.resize);
    this.renderer?.dispose();
    this.root?.remove();
  }

  onPress = (e) => {
    if (this.state === 'lost' || this.state === 'won') return;
    e.preventDefault();
    try {
      this.breathButton.setPointerCapture(e.pointerId);
    } catch {
      /* pointer capture is best-effort */
    }
    this.pressed = true;
    this.breathButton.classList.add('is-pressed');

    if (this.state === 'idle') {
      this.state = 'playing';
      this.phaseIndex = 0;
      this.phaseElapsed = 0;
      this.clock.start();
      this.updatePhaseUI();
    }
  };

  onRelease = () => {
    this.pressed = false;
    this.breathButton?.classList.remove('is-pressed');
  };

  resetSequence = () => {
    this.state = 'idle';
    this.phaseIndex = 0;
    this.phaseElapsed = 0;
    this.pressed = false;
    this.colorProgress = 0;
    this.breathScale = 0.62;
    this.loseOverlay.style.display = 'none';
    this.winOverlay.style.display = 'none';
    this.updateIdleUI();
  };

  leave = () => {
    if (this.hasWon) {
      this.onComplete({
        success: true,
        islandId: this.island.id,
        title: 'Respiración Guiada',
        message: 'Has completado el ejercicio de respiración. Respira con calma y continúa.'
      });
    } else {
      this.onExit();
    }
  };

  updateIdleUI() {
    this.phaseTitleEl.textContent = '¿Listo?';
    this.phaseInstructionEl.textContent = 'Presiona y mantén el botón para comenzar a respirar.';
    this.breathLabel.textContent = 'COMENZAR';
    this.breathCount.textContent = String(PHASE_SECONDS);
    this.breathButton.classList.remove('phase-hold', 'phase-release');
    this.dots.forEach((dot) => dot.classList.remove('done', 'active'));
  }

  updatePhaseUI() {
    const phase = PHASES[this.phaseIndex];
    this.phaseTitleEl.textContent = phase.title;
    this.phaseInstructionEl.textContent = phase.instruction;
    this.breathLabel.textContent = phase.buttonLabel;
    this.breathCount.textContent = String(PHASE_SECONDS);
    this.breathButton.classList.toggle('phase-hold', phase.requiredPressed);
    this.breathButton.classList.toggle('phase-release', !phase.requiredPressed);
    this.dots.forEach((dot, i) => {
      dot.classList.toggle('done', i < this.phaseIndex);
      dot.classList.toggle('active', i === this.phaseIndex);
    });
  }

  lose(message) {
    this.state = 'lost';
    this.pressed = false;
    this.breathButton.classList.remove('is-pressed');
    this.loseMessageEl.textContent = message;
    this.loseOverlay.style.display = '';
  }

  win() {
    this.state = 'won';
    this.hasWon = true;
    this.colorProgress = 1;
    this.breathScale = 0.62;
    this.dots.forEach((dot) => dot.classList.add('done'));
    this.winOverlay.style.display = '';
  }

  updateBreathing(delta) {
    const phase = PHASES[this.phaseIndex];
    const matches = this.pressed === phase.requiredPressed;

    if (matches) {
      this.phaseElapsed += delta;
    } else if (this.phaseElapsed > 0) {
      this.lose(phase.failMessage);
      return;
    }

    this.breathCount.textContent = String(Math.max(1, Math.ceil(PHASE_SECONDS - this.phaseElapsed)));

    const t = Math.min(1, this.phaseElapsed / PHASE_SECONDS);
    this.colorProgress = (this.phaseIndex + t) / PHASES.length;

    if (this.phaseElapsed >= PHASE_SECONDS) {
      this.phaseIndex += 1;
      this.phaseElapsed = 0;
      if (this.phaseIndex >= PHASES.length) {
        this.win();
        return;
      }
      this.updatePhaseUI();
    }
  }

  updateRingVisual() {
    const activelyTracking = this.state === 'playing' && this.phaseElapsed > 0;
    this.breathButton.classList.toggle('is-waiting', !activelyTracking);

    if (!activelyTracking) {
      this.breathRing.style.transform = '';
      return;
    }

    const t = Math.min(1, this.phaseElapsed / PHASE_SECONDS);
    const eased = easeInOut(t);
    const elapsed = this.clock.elapsedTime;
    let scale;
    if (this.phaseIndex === 0) scale = lerp(0.62, 1.35, eased);
    else if (this.phaseIndex === 1) scale = 1.35 + Math.sin(elapsed * 3) * 0.015;
    else if (this.phaseIndex === 2) scale = lerp(1.35, 0.62, eased);
    else scale = 0.62 + Math.sin(elapsed * 1.2) * 0.02;

    this.breathScale = scale;
    this.breathRing.style.transform = `translate(-50%, -50%) scale(${scale})`;
  }

  setupScene() {
    this.renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: 'high-performance' });
    this.renderer.setPixelRatio(this.getPixelRatio());
    this.renderer.setClearColor(this.tense.sky, 1);
    this.renderer.shadowMap.enabled = true;
    this.canvasHost.appendChild(this.renderer.domElement);

    this.scene = new THREE.Scene();
    this.scene.fog = new THREE.Fog(this.tense.fog, 9, 22);
    this.camera = new THREE.PerspectiveCamera(42, 1, 0.1, 80);
    this.camera.position.set(0, 3.3, 7.2);
    this.camera.lookAt(0, 1.3, 0);

    this.hemi = new THREE.HemisphereLight(this.tense.hemiSky, this.tense.hemiGround, 1.7);
    this.scene.add(this.hemi);
    this.sun = new THREE.DirectionalLight(this.tense.sun, 2.1);
    this.sun.position.set(-3, 6, 4);
    this.sun.castShadow = true;
    this.scene.add(this.sun);

    const land = new THREE.Mesh(
      new THREE.CylinderGeometry(2.6, 2.9, 0.6, 10),
      new THREE.MeshStandardMaterial({ color: this.tense.land, roughness: 0.82, flatShading: true })
    );
    land.position.y = -0.2;
    land.receiveShadow = true;
    this.landMesh = land;
    this.scene.add(land);

    const base = new THREE.Mesh(
      new THREE.CylinderGeometry(2.15, 2.6, 0.7, 10),
      new THREE.MeshStandardMaterial({ color: this.tense.base, roughness: 0.9, flatShading: true })
    );
    base.position.y = -0.75;
    this.baseMesh = base;
    this.scene.add(base);

    const pedestal = new THREE.Mesh(
      new THREE.CylinderGeometry(0.55, 0.7, 0.5, 8),
      new THREE.MeshStandardMaterial({ color: '#4a4038', roughness: 0.88, flatShading: true })
    );
    pedestal.position.y = 0.35;
    pedestal.castShadow = true;
    pedestal.receiveShadow = true;
    this.scene.add(pedestal);

    const orbMaterial = new THREE.MeshStandardMaterial({
      color: this.tense.ring,
      emissive: this.tense.ring,
      emissiveIntensity: 0.6,
      roughness: 0.35,
      flatShading: true
    });
    this.orb = new THREE.Mesh(new THREE.IcosahedronGeometry(0.5, 1), orbMaterial);
    this.orb.position.y = 1.55;
    this.orb.castShadow = true;
    this.scene.add(this.orb);

    const glowMaterial = new THREE.MeshBasicMaterial({ color: this.tense.ring, transparent: true, opacity: 0.18 });
    this.orbGlow = new THREE.Mesh(new THREE.SphereGeometry(0.75, 14, 10), glowMaterial);
    this.orbGlow.position.copy(this.orb.position);
    this.scene.add(this.orbGlow);

    const decorBlueprint = [
      { kind: 'tree', x: -1.6, z: 0.6 },
      { kind: 'tree', x: 1.7, z: -0.4 },
      { kind: 'rock', x: -1.3, z: -1.3 },
      { kind: 'rock', x: 1.3, z: 1.3 }
    ];
    decorBlueprint.forEach((item) => {
      const mesh = item.kind === 'tree' ? this.makeTree() : this.makeRock();
      mesh.position.set(item.x, 0.1, item.z);
      this.scene.add(mesh);
    });

    this.particles = [];
    for (let i = 0; i < 18; i += 1) {
      const particle = new THREE.Mesh(
        new THREE.TetrahedronGeometry(0.05 + Math.random() * 0.05, 0),
        new THREE.MeshBasicMaterial({ color: this.tense.ring, transparent: true, opacity: 0.4 })
      );
      const angle = Math.random() * Math.PI * 2;
      const radius = 0.7 + Math.random() * 1.6;
      const baseY = 0.4 + Math.random() * 1.7;
      particle.position.set(Math.cos(angle) * radius, baseY, Math.sin(angle) * radius);
      particle.userData = {
        angle,
        radius,
        baseY,
        speed: 0.15 + Math.random() * 0.3,
        riseSpeed: 0.4 + Math.random() * 0.5,
        phase: Math.random() * Math.PI * 2
      };
      this.scene.add(particle);
      this.particles.push(particle);
    }

    this.renderer.render(this.scene, this.camera);
  }

  makeTree() {
    const tree = new THREE.Group();
    const trunk = new THREE.Mesh(
      new THREE.CylinderGeometry(0.07, 0.09, 0.5, 6),
      new THREE.MeshStandardMaterial({ color: '#5a3a24', roughness: 0.9, flatShading: true })
    );
    trunk.position.y = 0.25;
    const top = new THREE.Mesh(
      new THREE.ConeGeometry(0.32, 0.7, 7),
      new THREE.MeshStandardMaterial({ color: '#3d5a3a', roughness: 0.85, flatShading: true })
    );
    top.position.y = 0.78;
    tree.add(trunk, top);
    tree.castShadow = true;
    return tree;
  }

  makeRock() {
    const rock = new THREE.Mesh(
      new THREE.DodecahedronGeometry(0.24, 0),
      new THREE.MeshStandardMaterial({ color: '#5c5248', roughness: 0.9, flatShading: true })
    );
    rock.castShadow = true;
    return rock;
  }

  updateAtmosphere(delta) {
    const elapsed = this.clock.elapsedTime;
    const t = this.colorProgress;

    const fog = mixHex(this.tense.fog, CALM.fog, t);
    const sky = mixHex(this.tense.sky, CALM.sky, t);
    const hemiSky = mixHex(this.tense.hemiSky, CALM.hemiSky, t);
    const hemiGround = mixHex(this.tense.hemiGround, CALM.hemiGround, t);
    const sun = mixHex(this.tense.sun, CALM.sun, t);
    const land = mixHex(this.tense.land, CALM.land, t);
    const base = mixHex(this.tense.base, CALM.base, t);
    const ring = mixHex(this.tense.ring, CALM.ring, t);

    this.scene.fog.color.set(fog);
    this.renderer.setClearColor(sky, 1);
    this.hemi.color.set(hemiSky);
    this.hemi.groundColor.set(hemiGround);
    this.sun.color.set(sun);
    this.landMesh.material.color.set(land);
    this.baseMesh.material.color.set(base);
    this.orb.material.color.set(ring);
    this.orb.material.emissive.set(ring);
    this.orbGlow.material.color.set(ring);
    this.root.style.setProperty('--breath-color', ring);

    this.orb.position.y = 1.55 + Math.sin(elapsed * 1.1) * 0.05;
    this.orbGlow.position.y = this.orb.position.y;
    this.orb.scale.setScalar(this.breathScale);
    this.orbGlow.scale.setScalar(this.breathScale * 1.08);
    this.orb.rotation.y += delta * 0.4;

    this.camera.position.x = Math.sin(elapsed * 0.18) * 0.28;
    this.camera.lookAt(0, 1.3, 0);

    this.particles.forEach((particle) => {
      particle.userData.phase += delta * particle.userData.speed;
      const wobble = Math.sin(particle.userData.phase) * 0.18;
      const orbit = particle.userData.angle + elapsed * (0.06 + (1 - t) * 0.1);
      particle.position.x = Math.cos(orbit) * (particle.userData.radius + wobble);
      particle.position.z = Math.sin(orbit) * (particle.userData.radius + wobble);
      particle.position.y = particle.userData.baseY + Math.sin(elapsed * particle.userData.riseSpeed * (1.6 - t * 0.6) + particle.userData.phase) * 0.35;
      particle.material.color.set(ring);
      particle.material.opacity = 0.3 + Math.sin(elapsed * (2.4 - t) + particle.userData.phase) * 0.2;
    });
  }

  resize = () => {
    const rect = this.canvasHost.getBoundingClientRect();
    const width = Math.max(1, rect.width);
    const height = Math.max(1, rect.height);
    this.renderer.setSize(width, height, false);
    this.renderer.setPixelRatio(this.getPixelRatio());
    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();
  };

  animate = () => {
    if (!this.mounted) return;
    // Phase timing must reflect real elapsed time even if frames are throttled
    // (backgrounded tab, slow device), so it uses the raw delta. Visuals use a
    // clamped delta so a stalled frame doesn't make particles/camera jump.
    const rawDelta = this.clock.getDelta();
    const delta = Math.min(rawDelta, 0.033);

    if (this.state === 'playing') {
      this.updateBreathing(rawDelta);
    }
    this.updateRingVisual();
    this.updateAtmosphere(delta);
    this.renderer.render(this.scene, this.camera);

    requestAnimationFrame(this.animate);
  };

  getPixelRatio() {
    const coarsePointer = window.matchMedia('(pointer: coarse)').matches;
    return Math.min(window.devicePixelRatio || 1, coarsePointer ? 1.25 : 1.5);
  }
}
