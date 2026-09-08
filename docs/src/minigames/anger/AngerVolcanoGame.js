// ISLA DEL ENOJO · Volcan de las Emociones
// Verbo: MANTENER BAJO PRESION · Primera persona
//
// El entorno se agita: rocas que levitan, niebla roja, temblor de camara y
// retumbo que sube. Hay 4 focos de tension; en cada uno se sostiene una
// respiracion 4-4-4-4 manteniendo pulsado (clic / E / boton tactil).
// Soltar antes de tiempo rompe la esfera y se reintenta al instante: sin
// castigo y sin texto. Cada foco apagado calma el mundo — el mundo ES la barra
// de progreso.

import * as THREE from 'three';
import { MinigameBase } from '../../engine/MinigameBase.js?v=20260908174459';
import { createGround, createSky, createLights, makeRock, GEO, scatterInstanced } from '../../engine/worldkit.js?v=20260908174459';
import { addReward, completeActivity, recordReevaluation, setInitialIntensity } from '../../data/gameState.js?v=20260908174459';

const PHASES = [
  { id: 'in', label: 'INHALA', seconds: 4, hold: true },
  { id: 'hold', label: 'SOSTÉN', seconds: 4, hold: true },
  { id: 'out', label: 'EXHALA', seconds: 4, hold: false },
  { id: 'rest', label: 'CALMA', seconds: 4, hold: false }
];

const FOCUS_POSITIONS = [
  { x: -13, z: -9 },
  { x: 12, z: -12 },
  { x: 15, z: 8 },
  { x: -11, z: 12 }
];

export class AngerVolcanoGame extends MinigameBase {
  constructor(opts) {
    super({ ...opts, mode: 'first' });
    this.tension = 1;          // 1 = volcan encendido, 0 = calmado
    this.holding = false;
    this.breath = null;        // { focus, phaseIndex, elapsed }
    this.focuses = [];
    this.time = 0;
  }

  /* ============================================================ escenario */

  build() {
    this.root.classList.add('i3d--fp');
    const scene = this.scene;

    scene.fog = new THREE.FogExp2('#5a1c15', 0.019);
    this.sky = createSky({ top: '#2a0b0b', bottom: '#7a2a17' });
    scene.add(this.sky);

    this.ground = createGround({
      size: 96,
      segments: 56,
      color: '#54332c',
      amplitude: 1.35,
      scale: 0.07
    });
    scene.add(this.ground);
    this.controller.groundHeightAt = (x, z) => this.ground.userData.heightAt(x, z);
    this.controller.bounds = { minX: -42, maxX: 42, minZ: -42, maxZ: 42 };
    this.controller.setPosition(0, 6, 26);
    this.controller.yaw = 0;   // mirando al volcan
    this.controller.cfg.walkSpeed = 4.6;

    this.lights = createLights({
      sunColor: '#ffb27a',
      sunIntensity: 1.75,
      hemiSky: '#ff8a5c',
      hemiGround: '#2a1512',
      hemiIntensity: 0.95,
      area: 46
    });
    scene.add(this.lights);
    this.sun = this.lights.userData.sun;

    this.buildVolcano();
    this.buildLava();
    this.buildFloatingRocks();
    this.buildScatter();
    this.buildFocuses();
    this.buildBreathSphere();

    // HUD: 4 focos + barra de respiracion
    this.setObjective(FOCUS_POSITIONS.length, '◆');
    this.breathBar = this.addBar('breath', { icon: '🫁', color: '#7fd1ff', value: 0 });
    this.breathBar.show(false);

    this.bindHold();
    setInitialIntensity('alta');
  }

  buildVolcano() {
    const group = new THREE.Group();
    const cone = new THREE.Mesh(
      new THREE.ConeGeometry(11, 13, 9, 3, true),
      new THREE.MeshStandardMaterial({ color: '#2e1a17', roughness: 1, flatShading: true, side: THREE.DoubleSide })
    );
    cone.position.y = 6.4;
    cone.castShadow = true;
    cone.receiveShadow = true;
    group.add(cone);

    const crater = new THREE.Mesh(
      new THREE.CircleGeometry(3.6, 12),
      new THREE.MeshStandardMaterial({ color: '#ff5a2b', emissive: '#ff4a1e', emissiveIntensity: 2.4, flatShading: true })
    );
    crater.rotation.x = -Math.PI / 2;
    crater.position.y = 12.7;
    group.add(crater);
    this.crater = crater;

    this.craterLight = new THREE.PointLight('#ff6a33', 6, 46, 2);
    this.craterLight.position.set(0, 13.5, 0);
    group.add(this.craterLight);

    group.position.set(0, 0, -18);
    this.scene.add(group);
    this.volcano = group;
    // el cono bloquea el paso
    this.controller.addCollider({ type: 'sphere', center: new THREE.Vector3(0, 0, -18), radius: 9.5 });
  }

  buildLava() {
    const geo = new THREE.PlaneGeometry(96, 96, 1, 1);
    geo.rotateX(-Math.PI / 2);
    const mat = new THREE.MeshBasicMaterial({ color: '#ff5326', transparent: true, opacity: 0.85 });
    const lava = new THREE.Mesh(geo, mat);
    lava.position.y = -1.55;
    this.scene.add(lava);
    this.lava = lava;

    // grietas luminosas: instanciadas, una sola llamada de dibujo
    const crackGeo = new THREE.BoxGeometry(0.5, 0.06, 3.4);
    const crackMat = new THREE.MeshStandardMaterial({
      color: '#ff7a3d', emissive: '#ff5a20', emissiveIntensity: 1.8, flatShading: true
    });
    this.cracks = scatterInstanced(crackGeo, crackMat, 46, (i) => {
      const a = (i / 46) * Math.PI * 2 + i * 0.31;
      const r = 12 + (i % 7) * 3.4;
      const x = Math.cos(a) * r;
      const z = Math.sin(a) * r - 6;
      return { x, y: this.ground.userData.heightAt(x, z) + 0.06, z, ry: a, scale: 0.7 + (i % 5) * 0.22 };
    });
    this.cracks.material.emissiveIntensity = 1.8;
    this.scene.add(this.cracks);
  }

  buildFloatingRocks() {
    this.floaters = [];
    const mat = new THREE.MeshStandardMaterial({ color: '#4a2c26', roughness: 1, flatShading: true });
    for (let i = 0; i < 16; i += 1) {
      const rock = new THREE.Mesh(GEO.rock(), mat);
      const a = (i / 16) * Math.PI * 2;
      const r = 9 + (i % 5) * 3.6;
      const x = Math.cos(a) * r;
      const z = Math.sin(a) * r - 4;
      rock.position.set(x, this.ground.userData.heightAt(x, z) + 0.5, z);
      rock.scale.setScalar(0.6 + (i % 4) * 0.35);
      rock.castShadow = true;
      this.scene.add(rock);
      this.floaters.push({
        mesh: rock,
        baseY: rock.position.y,
        phase: i * 0.7,
        amp: 0.7 + (i % 3) * 0.45,
        spin: (i % 2 ? 1 : -1) * (0.4 + (i % 3) * 0.25)
      });
    }
  }

  buildScatter() {
    const mat = new THREE.MeshStandardMaterial({ color: '#3a241f', roughness: 1, flatShading: true });
    const rocks = scatterInstanced(GEO.rock(), mat, 90, (i) => {
      const a = i * 2.399;
      const r = 6 + (i % 30) * 1.25;
      const x = Math.cos(a) * r;
      const z = Math.sin(a) * r;
      return { x, y: this.ground.userData.heightAt(x, z) + 0.1, z, ry: a, scale: 0.35 + (i % 6) * 0.18 };
    });
    this.scene.add(rocks);
  }

  buildFocuses() {
    const focusMat = () => new THREE.MeshStandardMaterial({
      color: '#ff8a4a', emissive: '#ff4a1e', emissiveIntensity: 2.2, roughness: 0.4, flatShading: true
    });

    FOCUS_POSITIONS.forEach((p, i) => {
      const group = new THREE.Group();
      const base = new THREE.Mesh(
        new THREE.CylinderGeometry(0.9, 1.15, 0.7, 6),
        new THREE.MeshStandardMaterial({ color: '#33201c', roughness: 1, flatShading: true })
      );
      base.position.y = 0.35;
      base.castShadow = true;
      group.add(base);

      const crystal = new THREE.Mesh(GEO.crystal(), focusMat());
      crystal.scale.setScalar(1.5);
      crystal.position.y = 1.5;
      group.add(crystal);

      const light = new THREE.PointLight('#ff6a33', 3, 12, 2);
      light.position.y = 1.6;
      group.add(light);

      const y = this.ground.userData.heightAt(p.x, p.z);
      group.position.set(p.x, y, p.z);
      this.scene.add(group);
      this.controller.addCollider({ type: 'sphere', center: new THREE.Vector3(p.x, y, p.z), radius: 1.1 });

      const focus = { group, crystal, light, index: i, done: false, position: new THREE.Vector3(p.x, y, p.z) };
      this.focuses.push(focus);

      focus.interactable = this.interactable({
        object: crystal,
        radius: 3.2,
        icon: '🫁',
        label: 'Respirar',
        onInteract: () => this.startBreath(focus)
      });
    });
  }

  buildBreathSphere() {
    const geo = new THREE.IcosahedronGeometry(1, 3);
    const mat = new THREE.MeshStandardMaterial({
      color: '#9fe3ff',
      emissive: '#4aa8ff',
      emissiveIntensity: 1.6,
      transparent: true,
      opacity: 0.72,
      flatShading: true
    });
    this.sphere = new THREE.Mesh(geo, mat);
    this.sphere.visible = false;
    this.scene.add(this.sphere);

    this.sphereLight = new THREE.PointLight('#7fd1ff', 0, 10, 2);
    this.sphereLight.visible = false;
    this.scene.add(this.sphereLight);
  }

  /* ================================================================ input */

  bindHold() {
    const down = (e) => {
      if (e && e.button !== undefined && e.button !== 0) return;
      this.holding = true;
    };
    const up = () => { this.holding = false; };

    const canvas = this.renderer.domElement;
    canvas.addEventListener('mousedown', down);
    window.addEventListener('mouseup', up);
    const keyDown = (e) => { if (e.key === 'e' || e.key === 'E' || e.key === ' ') down(); };
    const keyUp = (e) => { if (e.key === 'e' || e.key === 'E' || e.key === ' ') up(); };
    window.addEventListener('keydown', keyDown);
    window.addEventListener('keyup', keyUp);

    this.listeners.push(() => canvas.removeEventListener('mousedown', down));
    this.listeners.push(() => window.removeEventListener('mouseup', up));
    this.listeners.push(() => window.removeEventListener('keydown', keyDown));
    this.listeners.push(() => window.removeEventListener('keyup', keyUp));

    // boton tactil principal
    this.onHoldStart = () => { this.holding = true; };
    this.onHoldEnd = () => { this.holding = false; };
  }

  /* ============================================================ arranque */

  onStart() {
    this.ambientRumble = this.audio.ambient('rumble', { volume: 0.5, rate: 0.85 });
    this.say('LLEGA AL FOCO', 2200);
    this.applyTension();
  }

  /* ========================================================== respiracion */

  startBreath(focus) {
    if (this.breath || focus.done) return;
    // phaseIndex -1 = esperando a que el jugador empiece a mantener pulsado
    this.breath = { focus, phaseIndex: -1, elapsed: 0, broke: false };
    this.controller.frozen = true;
    this.audio.duck(0.22);
    this.breathBar.show(true);

    // la esfera aparece sobre el foco, delante del jugador
    this.sphere.visible = true;
    this.sphere.position.copy(focus.position).add(new THREE.Vector3(0, 1.9, 0));
    this.sphere.scale.setScalar(1);
    this.sphereLight.visible = true;
    this.sphereLight.position.copy(this.sphere.position);

    this.say('MANTÉN PULSADO', 1500);
    this.audio.play('breathIn', { volume: 0.4 });
  }

  breakBreath() {
    if (!this.breath) return;
    const focus = this.breath.focus;
    this.breath = null;
    this.controller.frozen = false;
    this.breathBar.show(false);
    this.sphere.visible = false;
    this.sphereLight.visible = false;
    this.audio.unduck(0.4);

    // la esfera se rompe y el entorno se agita: reintento inmediato, sin texto
    this.feedback.burst(this.sphere.position, { count: 18, color: '#8fd7ff', speed: 4.5, life: 0.7 });
    this.feedback.shakeCamera(0.32);
    this.audio.play('soften', { volume: 0.35 });
    this.tension = Math.min(1, this.tension + 0.06);
    this.applyTension();
    // el foco sigue disponible al instante
    focus.interactable.enabled = true;
  }

  completeFocus(focus) {
    focus.done = true;
    focus.interactable.done = true;
    this.breath = null;
    this.controller.frozen = false;
    this.breathBar.show(false);
    this.sphere.visible = false;
    this.sphereLight.visible = false;
    this.audio.unduck(0.8);

    // el cristal se enfria: de rojo a azul
    this.feedback.tweenColor(focus.crystal.material.color, '#8fd7ff', 1.6);
    this.feedback.tweenColor(focus.crystal.material.emissive, '#3f8fd0', 1.6);
    this.feedback.tweenColor(focus.light.color, '#7fd1ff', 1.6);
    this.feedback.burst(focus.position.clone().add(new THREE.Vector3(0, 1.7, 0)), {
      count: 26, color: '#9fe3ff', speed: 3.6, life: 1.3, gravity: -1.2
    });
    this.feedback.flash(focus.position, { color: '#9fe3ff', intensity: 4, duration: 1 });
    this.audio.playAt('chime', focus.group, { volume: 0.7, refDistance: 6 });

    const all = this.advanceObjective();
    this.tension = 1 - this.objective.done / this.objective.total;
    this.applyTension();
    completeActivity(`anger-foco-${focus.index + 1}`, 8);

    if (all) this.calmVolcano();
    else this.say('EL SUELO SE CALMA', 1800);
  }

  /** El mundo entero es el indicador de progreso */
  applyTension() {
    const t = this.tension;
    // niebla y cielo
    this.feedback.tweenColor(this.scene.fog.color, t > 0.5 ? '#4a1410' : t > 0.25 ? '#3c2a2e' : '#20313f', 1.6);
    this.sky.userData.setColors(
      t > 0.5 ? '#2a0b0b' : t > 0.25 ? '#241a24' : '#13293d',
      t > 0.5 ? '#7a2a17' : t > 0.25 ? '#5a4030' : '#3d6a8a'
    );
    this.feedback.tweenValue(this.scene.fog, 'density', 0.012 + t * 0.016, 1.5);
    // crater y grietas
    this.feedback.tweenValue(this.crater.material, 'emissiveIntensity', 0.3 + t * 2.2, 1.5);
    this.feedback.tweenValue(this.craterLight, 'intensity', 0.6 + t * 5.5, 1.5);
    this.feedback.tweenValue(this.cracks.material, 'emissiveIntensity', 0.25 + t * 1.7, 1.5);
    this.feedback.tweenValue(this.lava.material, 'opacity', 0.25 + t * 0.6, 1.5);
    // la ira alta frena al jugador
    this.controller.speedScale = 0.72 + (1 - t) * 0.28;
    // audio
    this.ambientRumble?.setVolume(0.12 + t * 0.5);
  }

  calmVolcano() {
    this.say('VOLCÁN EN CALMA', 2400);
    this.feedback.tweenColor(this.lava.material.color, '#5a86a8', 3);
    this.feedback.tweenColor(this.crater.material.color, '#6f9cc0', 3);
    this.feedback.tweenColor(this.crater.material.emissive, '#4a86b8', 3);
    this.feedback.tweenValue(this.sun, 'intensity', 1.6, 3);
    this.feedback.tweenColor(this.sun.color, '#cfe6ff', 3);
    this.ambientRumble?.setVolume(0.05, 2);
    this.audio.ambient('wind', { volume: 0.25 });

    this.later(() => {
      const p = new THREE.Vector3(0, this.ground.userData.heightAt(0, 6), 6);
      this.openPortal(p, { color: '#9fe3ff', label: 'Salir del volcán' });
      this.say('CRUZA EL PORTAL', 2200);
    }, 1800);
  }

  /* =============================================================== update */

  onUpdate(dt) {
    this.time += dt;
    const t = this.tension;

    // rocas que levitan mas cuanto mayor la tension
    for (let i = 0; i < this.floaters.length; i += 1) {
      const f = this.floaters[i];
      f.mesh.position.y = f.baseY + (0.3 + f.amp * t) * (1 + Math.sin(this.time * 1.4 + f.phase)) * 0.5;
      f.mesh.rotation.y += f.spin * dt * (0.4 + t);
      f.mesh.rotation.x += f.spin * dt * 0.3 * t;
    }

    // temblor de camara proporcional a la tension (nunca durante la respiracion)
    if (!this.breath && t > 0.05) this.feedback.shakeCamera(0.012 + t * 0.03, 6);

    // brasas
    if (t > 0.15 && Math.random() < t * 0.5) {
      this.feedback.drizzle(
        { x: (Math.random() - 0.5) * 40, y: 1.5, z: -18 + (Math.random() - 0.5) * 20 },
        6,
        { color: '#ff8a3d', life: 1.6, speed: 1.2, gravity: 1.6, size: 0.6 }
      );
    }

    if (this.portalRing) this.portalRing.rotation.z += dt * 0.6;

    this.updateBreath(dt);
  }

  updateBreath(dt) {
    if (!this.breath) return;
    const b = this.breath;

    // Espera inicial: la esfera no arranca hasta que el jugador mantiene pulsado
    if (b.phaseIndex === -1) {
      this.sphere.scale.setScalar(1 + Math.sin(this.time * 3) * 0.04);
      if (this.holding) {
        b.phaseIndex = 0;
        b.elapsed = 0;
        this.audio.play('breathIn', { volume: 0.35 });
      }
      return;
    }

    const phase = PHASES[b.phaseIndex];

    // Soltar durante inhalar/sostener rompe la esfera (con 0.15 s de tolerancia)
    if (phase.hold && !this.holding && b.elapsed > 0.15) { this.breakBreath(); return; }

    // Al exhalar hay que soltar: mientras siga pulsado, la fase espera (sin castigo)
    if (phase.id === 'out' && this.holding) {
      if (this.el.center.dataset.phase !== 'release') {
        this.el.center.dataset.phase = 'release';
        this.say('SUELTA', 0);
      }
      return;
    }

    b.elapsed += dt;
    const p = Math.min(1, b.elapsed / phase.seconds);
    this.breathBar.set((b.phaseIndex + p) / PHASES.length);

    // la esfera responde a la fase
    let scale = 1;
    if (phase.id === 'in') scale = 1 + p * 1.1;
    else if (phase.id === 'hold') scale = 2.1;
    else if (phase.id === 'out') scale = 2.1 - p * 1.1;
    this.sphere.scale.setScalar(scale);
    this.sphere.rotation.y += dt * 0.5;
    this.sphereLight.intensity = 1.4 + scale * 0.9;
    this.sphere.material.emissiveIntensity = 1.2 + (phase.id === 'hold' ? 1.1 : 0.4);

    if (this.el.center.dataset.phase !== phase.id) {
      this.el.center.dataset.phase = phase.id;
      this.say(phase.label, 0);
      if (phase.id === 'in') this.audio.play('breathIn', { volume: 0.35 });
      if (phase.id === 'out') this.audio.play('breathOut', { volume: 0.35 });
    }

    if (p >= 1) {
      b.phaseIndex += 1;
      b.elapsed = 0;
      if (b.phaseIndex >= PHASES.length) {
        this.el.center.dataset.phase = '';
        this.clearSay();
        this.completeFocus(b.focus);
      }
    }
  }

  onReset() {
    this.focuses.forEach((f) => {
      f.done = false;
      f.interactable.done = false;
      f.interactable.enabled = true;
      f.crystal.material.color.set('#ff8a4a');
      f.crystal.material.emissive.set('#ff4a1e');
      f.light.color.set('#ff6a33');
    });
    this.breath = null;
    this.sphere.visible = false;
    this.sphereLight.visible = false;
    this.breathBar.show(false);
    this.tension = 1;
    this.applyTension();
    this.controller.setPosition(0, 6, 26);
    this.controller.yaw = 0;
    // el portal solo existe cuando el volcan esta calmado
    if (this.portal) {
      const portalItem = this.interactables.items.find((i) => i.object === this.portal);
      if (portalItem) this.interactables.remove(portalItem);
      this.scene.remove(this.portal);
      this.portal = null;
      this.portalRing = null;
    }
  }

  /* =============================================================== cierre */

  get completionPayload() {
    return {
      islandId: 'anger',
      success: true,
      emoAventura: true,
      badge: 'anger',
      title: 'Volcán de las Emociones',
      message: 'Sostuviste la respiración bajo presión y devolviste la calma al volcán.'
    };
  }

  finish() {
    if (this.finished || this.closing) return;
    this.closing = true;
    this.controller.frozen = true;
    this.controller.exitPointerLock();
    addReward('gota-calma');
    completeActivity('anger-volcan-3d', 20);
    recordReevaluation('anger', 'alta', 'Respiracion sostenida 4-4-4-4', 'baja');
    this.showClosingCard({
      title: 'Gota de Calma',
      lines: [
        'Bajaste la temperatura antes de decidir: pausa, respira, espera y después eliges qué hacer.',
        'La ira no desapareció del volcán: sigue habiendo lava bajo la superficie. Lo que cambió es que ahora puedes sostenerla sin que decida por ti.',
        'Si alguna vez la intensidad no baja, no significa que lo hayas hecho mal. Una estrategia no siempre cambia la emoción al instante: puedes repetirla o pedir apoyo.'
      ],
      onDone: () => super.finish()
    });
  }

  onDispose() {
    this.ambientRumble?.stop();
    this.focuses.length = 0;
    this.floaters.length = 0;
  }
}
