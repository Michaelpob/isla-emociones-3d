// ISLA DEL MIEDO · Bosque de la Noche
// Verbo: EXPLORAR EN LA OSCURIDAD · Primera persona
//
// Linterna con bateria: correr la agota rapido, caminar la conserva y
// detenerse a respirar (mantener pulsado, quieto) la recarga.
// Hay 5 faroles que encender. Sustos suaves: una sombra que cruza, un sonido.
// Quedarse sin luz no es perder: el bosque se oscurece y hay que parar,
// respirar y seguir. El miedo se atraviesa a ritmo propio, no huyendo.

import * as THREE from 'three';
import { MinigameBase } from '../../engine/MinigameBase.js?v=20260908175209';
import { createGround, createSky, createLights, GEO, scatterInstanced, makeTree } from '../../engine/worldkit.js?v=20260908175209';
import { addReward, completeActivity, recordReevaluation, setInitialIntensity } from '../../data/gameState.js?v=20260908175209';

const LANTERNS = [
  { x: -8, z: -12 },
  { x: 14, z: -6 },
  { x: 6, z: 16 },
  { x: -18, z: 6 },
  { x: 20, z: 18 }
];

const DRAIN_WALK = 0.026;
const DRAIN_RUN = 0.085;
const DRAIN_IDLE = 0.012;
const RECHARGE = 0.16;

export class FearNightGame extends MinigameBase {
  constructor(opts) {
    super({ ...opts, mode: 'first' });
    this.battery = 1;
    this.breathing = false;
    this.holding = false;
    this.lanterns = [];
    this.time = 0;
    this.nextScare = 12 + Math.random() * 8;
    this.dark = false;
  }

  /* ============================================================ escenario */

  build() {
    this.root.classList.add('i3d--fp');
    const scene = this.scene;

    scene.fog = new THREE.FogExp2('#0b1420', 0.052);
    this.sky = createSky({ top: '#050a12', bottom: '#132437' });
    scene.add(this.sky);

    this.ground = createGround({
      size: 100,
      segments: 60,
      color: '#1d2b26',
      amplitude: 0.9,
      scale: 0.06
    });
    scene.add(this.ground);
    this.controller.groundHeightAt = (x, z) => this.ground.userData.heightAt(x, z);
    this.controller.bounds = { minX: -34, maxX: 34, minZ: -34, maxZ: 34 };
    this.controller.setPosition(0, 3, 24);
    this.controller.yaw = 0;
    // el miedo se avanza despacio: se camina, correr cuesta bateria
    this.controller.cfg.walkSpeed = 3.9;
    this.controller.cfg.runSpeed = 6.6;

    this.lights = createLights({
      sunColor: '#6f8fbf',
      sunIntensity: 0.3,
      hemiSky: '#20344d',
      hemiGround: '#0a1210',
      hemiIntensity: 0.46,
      shadows: false
    });
    scene.add(this.lights);
    this.moon = this.lights.userData.sun;

    this.buildForest();
    this.buildLanterns();
    this.buildFlashlight();
    this.buildShadow();

    this.setObjective(LANTERNS.length, '✦');
    this.batteryBar = this.addBar('battery', { icon: '🔦', color: '#ffe08a', value: 1 });
    this.breathBar = this.addBar('breath', { icon: '🫁', color: '#7fd1ff', value: 0 });
    this.breathBar.show(false);

    this.bindHold();
    setInitialIntensity('media');
  }

  buildForest() {
    // arboles: dos InstancedMesh (tronco + copa), una llamada de dibujo cada uno
    const count = 150;
    const spots = [];
    for (let i = 0; i < count; i += 1) {
      const a = i * 2.399;
      const r = 5 + (i % 40) * 0.82;
      const x = Math.cos(a) * r + Math.sin(i) * 2.4;
      const z = Math.sin(a) * r + Math.cos(i * 1.7) * 2.4;
      // claros: centro del bosque, punto de partida y salida
      if (Math.hypot(x, z) < 4) continue;
      if (Math.hypot(x, z - 24) < 5.5) continue;
      if (Math.hypot(x, z - 8) < 4.5) continue;
      // no plantar encima de un farol
      if (LANTERNS.some((l) => Math.hypot(l.x - x, l.z - z) < 3.4)) continue;
      spots.push({ x, z, scale: 0.85 + (i % 5) * 0.28 });
    }
    this.treeSpots = spots;

    const trunkMat = new THREE.MeshStandardMaterial({ color: '#2b211c', roughness: 1, flatShading: true });
    const crownMat = new THREE.MeshStandardMaterial({ color: '#26463a', roughness: 1, flatShading: true });

    const trunks = scatterInstanced(GEO.trunk(), trunkMat, spots.length, (i) => {
      const s = spots[i];
      return { x: s.x, y: this.ground.userData.heightAt(s.x, s.z) + 0.45 * s.scale, z: s.z, scale: s.scale, scaleY: s.scale * 1.6 };
    });
    const crowns = scatterInstanced(GEO.coneTree(), crownMat, spots.length, (i) => {
      const s = spots[i];
      return { x: s.x, y: this.ground.userData.heightAt(s.x, s.z) + 1.75 * s.scale, z: s.z, scale: s.scale * 1.25, scaleY: s.scale * 1.7 };
    });
    this.scene.add(trunks, crowns);

    // colisiones: cilindros finos en los troncos cercanos al area jugable
    spots.forEach((s) => {
      if (Math.hypot(s.x, s.z) > 32) return;
      this.controller.addCollider({
        type: 'sphere',
        center: new THREE.Vector3(s.x, this.ground.userData.heightAt(s.x, s.z), s.z),
        radius: 0.42 * s.scale
      });
    });

    // maleza baja, instanciada
    const grassMat = new THREE.MeshStandardMaterial({ color: '#20402f', roughness: 1, flatShading: true });
    const grass = scatterInstanced(GEO.grass(), grassMat, 260, (i) => {
      const a = i * 1.618;
      const r = 3 + (i % 60) * 0.52;
      const x = Math.cos(a) * r;
      const z = Math.sin(a) * r;
      return { x, y: this.ground.userData.heightAt(x, z) + 0.25, z, ry: a, scale: 0.7 + (i % 4) * 0.3 };
    });
    this.scene.add(grass);
  }

  buildLanterns() {
    LANTERNS.forEach((p, i) => {
      const group = new THREE.Group();
      const post = new THREE.Mesh(
        new THREE.CylinderGeometry(0.08, 0.11, 2.1, 6),
        new THREE.MeshStandardMaterial({ color: '#2a2622', roughness: 1, flatShading: true })
      );
      post.position.y = 1.05;
      group.add(post);

      const glass = new THREE.Mesh(
        new THREE.OctahedronGeometry(0.34, 0),
        new THREE.MeshStandardMaterial({
          color: '#6d747a', emissive: '#101418', emissiveIntensity: 0.2, roughness: 0.4, flatShading: true
        })
      );
      glass.position.y = 2.25;
      group.add(glass);

      const light = new THREE.PointLight('#ffcf7a', 0, 16, 2);
      light.position.y = 2.3;
      group.add(light);

      const y = this.ground.userData.heightAt(p.x, p.z);
      group.position.set(p.x, y, p.z);
      this.scene.add(group);
      this.controller.addCollider({ type: 'sphere', center: new THREE.Vector3(p.x, y, p.z), radius: 0.4 });

      const lantern = { group, glass, light, lit: false, index: i, position: new THREE.Vector3(p.x, y, p.z) };
      this.lanterns.push(lantern);

      lantern.interactable = this.interactable({
        object: glass,
        radius: 2.8,
        icon: '🔥',
        label: 'Encender',
        onInteract: () => this.lightLantern(lantern)
      });
    });
  }

  buildFlashlight() {
    this.flashlight = new THREE.SpotLight('#ffe6b8', 9, 30, Math.PI / 6.2, 0.5, 1.1);
    this.flashlight.position.set(0, 0, 0);
    this.camera.add(this.flashlight);
    // apuntada un poco hacia abajo: se ve el suelo por delante
    this.flashlight.target.position.set(0, -0.32, -1);
    this.camera.add(this.flashlight.target);
    this.scene.add(this.camera);

    // halo tenue alrededor del jugador para no perder el suelo del todo
    this.halo = new THREE.PointLight('#8fb6ff', 0.6, 9, 1.6);
    this.camera.add(this.halo);
  }

  buildShadow() {
    // "algo" que cruza a lo lejos: silueta oscura, nunca encima del jugador
    const geo = new THREE.CapsuleGeometry(0.42, 1.2, 3, 6);
    const mat = new THREE.MeshBasicMaterial({ color: '#05070a', transparent: true, opacity: 0 });
    this.shadowFigure = new THREE.Mesh(geo, mat);
    this.shadowFigure.visible = false;
    this.scene.add(this.shadowFigure);
    this.scare = null;
  }

  /* ================================================================ input */

  bindHold() {
    const down = (e) => { if (!e || e.button === undefined || e.button === 0) this.holding = true; };
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
    this.onHoldStart = () => { this.holding = true; };
    this.onHoldEnd = () => { this.holding = false; };
  }

  onStart() {
    this.ambientWind = this.audio.ambient('wind', { volume: 0.3, rate: 0.8 });
    this.say('ENCIENDE LOS FAROLES', 2600);
  }

  /* ============================================================== faroles */

  lightLantern(lantern) {
    if (lantern.lit) return;
    lantern.lit = true;
    lantern.interactable.done = true;
    lantern.glass.material.color.set('#ffd98a');
    lantern.glass.material.emissive.set('#ffb347');
    this.feedback.tweenValue(lantern.glass.material, 'emissiveIntensity', 2.6, 1.2);
    this.feedback.tweenValue(lantern.light, 'intensity', 4.5, 1.4);
    this.feedback.burst(lantern.position.clone().add(new THREE.Vector3(0, 2.3, 0)), {
      count: 22, color: '#ffcf7a', speed: 2.6, life: 1.2, gravity: -1.4
    });
    this.audio.playAt('light', lantern.group, { volume: 0.8, refDistance: 5 });

    // cada farol aclara un poco la noche y devuelve algo de bateria
    this.battery = Math.min(1, this.battery + 0.25);
    const done = this.advanceObjective();
    const progress = this.objective.done / this.objective.total;
    this.feedback.tweenValue(this.scene.fog, 'density', 0.052 - progress * 0.028, 2);
    this.feedback.tweenValue(this.lights.userData.hemi, 'intensity', 0.46 + progress * 0.5, 2);
    completeActivity(`fear-farol-${lantern.index + 1}`, 6);

    if (done) this.dawn();
    else this.say('UN FAROL MENOS DE OSCURIDAD', 1800);
  }

  dawn() {
    this.say('AMANECE', 2600);
    this.feedback.tweenColor(this.scene.fog.color, '#8fb0c9', 4);
    this.feedback.tweenValue(this.scene.fog, 'density', 0.012, 4);
    this.sky.userData.setColors('#2c4d70', '#c9a97a');
    this.feedback.tweenValue(this.moon, 'intensity', 1.45, 4);
    this.feedback.tweenColor(this.moon.color, '#ffd9a8', 4);
    this.feedback.tweenValue(this.lights.userData.hemi, 'intensity', 1.15, 4);
    this.ambientWind?.setVolume(0.12, 2);

    this.later(() => {
      const p = new THREE.Vector3(0, this.ground.userData.heightAt(0, 8), 8);
      this.openPortal(p, { color: '#ffd9a8', label: 'Salir del bosque' });
      this.say('CRUZA EL PORTAL', 2000);
    }, 2000);
  }

  /* ============================================================== sustos */

  triggerScare() {
    const p = this.controller.position;
    const yaw = this.controller.yaw;
    // aparece a un lado del campo de vision, a media distancia
    const side = Math.random() < 0.5 ? -1 : 1;
    const dist = 9 + Math.random() * 5;
    const angle = yaw + side * 0.9;
    const x = p.x - Math.sin(angle) * dist;
    const z = p.z - Math.cos(angle) * dist;
    this.shadowFigure.position.set(x, this.ground.userData.heightAt(x, z) + 1, z);
    this.shadowFigure.visible = true;
    this.shadowFigure.material.opacity = 0;
    this.scare = { t: 0, dir: -side, speed: 5.5 + Math.random() * 2 };

    this.audio.play('soften', { volume: 0.3, rate: 0.7 });
    this.feedback.shakeCamera(0.08);
  }

  updateScare(dt) {
    if (!this.scare) return;
    const s = this.scare;
    s.t += dt;
    const yaw = this.controller.yaw;
    // cruza lateralmente respecto a la mirada
    this.shadowFigure.position.x += Math.cos(yaw) * s.dir * s.speed * dt;
    this.shadowFigure.position.z -= Math.sin(yaw) * s.dir * s.speed * dt;
    this.shadowFigure.position.y = this.ground.userData.heightAt(
      this.shadowFigure.position.x, this.shadowFigure.position.z
    ) + 1;
    // aparece y se desvanece: nunca se queda
    this.shadowFigure.material.opacity = Math.sin(Math.min(1, s.t / 1.4) * Math.PI) * 0.85;
    if (s.t > 1.4) {
      this.scare = null;
      this.shadowFigure.visible = false;
    }
  }

  /* =============================================================== update */

  onUpdate(dt) {
    this.time += dt;

    const moving = Math.hypot(this.controller.velocity.x, this.controller.velocity.z) > 0.6;
    const running = this.controller.isRunning && moving;

    // Respirar: quieto + mantener pulsado -> recarga la linterna
    const canBreathe = !moving && this.holding;
    if (canBreathe !== this.breathing) {
      this.breathing = canBreathe;
      this.breathBar.show(canBreathe);
      if (canBreathe) {
        this.audio.duck(0.3);
        this.audio.play('breathIn', { volume: 0.3 });
        this.say('RESPIRA', 0);
      } else {
        this.audio.unduck();
        this.clearSay();
      }
    }

    if (this.breathing) {
      this.battery = Math.min(1, this.battery + RECHARGE * dt);
      this.breathBar.set((Math.sin(this.time * 1.2) * 0.5 + 0.5));
      this.controller.cfg.headBob = 0;
      if (this.dark && this.battery > 0.18) this.setDark(false);
    } else {
      const drain = running ? DRAIN_RUN : moving ? DRAIN_WALK : DRAIN_IDLE;
      this.battery = Math.max(0, this.battery - drain * dt);
      this.controller.cfg.headBob = 0.055;
      if (!this.dark && this.battery <= 0.001) this.setDark(true);
    }
    this.batteryBar.set(this.battery);

    // la linterna parpadea cuando queda poca bateria
    const low = this.battery < 0.25 && this.battery > 0;
    const flicker = low ? 0.55 + Math.random() * 0.45 : 1;
    this.flashlight.intensity = this.dark ? 0 : (2.5 + this.battery * 7) * flicker;
    this.flashlight.angle = Math.PI / 7 * (0.75 + this.battery * 0.35);
    this.halo.intensity = this.dark ? 0.12 : 0.35 + this.battery * 0.35;

    // sustos suaves espaciados
    this.nextScare -= dt;
    if (this.nextScare <= 0 && !this.scare && this.objective.done < this.objective.total) {
      this.triggerScare();
      this.nextScare = 16 + Math.random() * 14;
    }
    this.updateScare(dt);

    // faroles encendidos: leve latido de luz
    for (let i = 0; i < this.lanterns.length; i += 1) {
      const l = this.lanterns[i];
      if (l.lit) l.light.intensity = 4.2 + Math.sin(this.time * 3 + i) * 0.5;
    }

    if (this.portalRing) this.portalRing.rotation.z += dt * 0.6;
  }

  /** Sin bateria: no se pierde, se para y se respira */
  setDark(dark) {
    this.dark = dark;
    if (dark) {
      this.say('PÁRATE Y RESPIRA', 2600);
      this.audio.play('soften', { volume: 0.35 });
      this.feedback.shakeCamera(0.12);
      this.controller.speedScale = 0.6;
    } else {
      this.clearSay();
      this.audio.play('light', { volume: 0.4 });
      this.controller.speedScale = 1;
    }
  }

  onReset() {
    this.battery = 1;
    this.dark = false;
    this.scare = null;
    this.shadowFigure.visible = false;
    this.controller.speedScale = 1;
    this.lanterns.forEach((l) => {
      l.lit = false;
      l.interactable.done = false;
      l.glass.material.color.set('#6d747a');
      l.glass.material.emissive.set('#101418');
      l.glass.material.emissiveIntensity = 0.2;
      l.light.intensity = 0;
    });
    this.scene.fog.density = 0.052;
    this.scene.fog.color.set('#0b1420');
    this.sky.userData.setColors('#050a12', '#132437');
    this.lights.userData.hemi.intensity = 0.46;
    this.moon.intensity = 0.3;
    this.controller.setPosition(0, 3, 24);
    this.controller.yaw = 0;
    if (this.portal) {
      const item = this.interactables.items.find((i) => i.object === this.portal);
      if (item) this.interactables.remove(item);
      this.scene.remove(this.portal);
      this.portal = null;
      this.portalRing = null;
    }
  }

  /* =============================================================== cierre */

  get completionPayload() {
    return {
      islandId: 'fear',
      success: true,
      emoAventura: true,
      badge: 'fear',
      title: 'Isla del Miedo',
      message: 'Cruzaste el bosque a tu ritmo y encendiste los cinco faroles.'
    };
  }

  finish() {
    if (this.finished || this.closing) return;
    this.closing = true;
    this.controller.frozen = true;
    this.controller.exitPointerLock();
    addReward('lupa-realidad');
    addReward('gota-aire');
    completeActivity('fear-bosque-3d', 20);
    recordReevaluation('fear', 'media', 'Avanzar a ritmo propio + respiracion', 'baja');
    this.showClosingCard({
      title: 'Atravesar, no huir',
      lines: [
        'Correr gastaba la linterna; caminar con calma la conservaba. El miedo se atraviesa a ritmo propio.',
        'Cuando te quedaste a oscuras no perdiste nada: te detuviste, respiraste y la luz volvió. Quedarse sin recursos un momento no es fracasar.',
        'Los faroles siguen encendidos detrás de ti. Cada paso pequeño que diste hizo posible el siguiente.'
      ],
      onDone: () => super.finish()
    });
  }

  onDispose() {
    this.ambientWind?.stop();
    this.lanterns.length = 0;
  }
}
