// ISLA DE LA SORPRESA · El jardin que cambia
// Verbo: OBSERVAR · Primera persona
//
// El escenario cambia cuando el jugador NO esta mirando: una figura crece,
// cambia de color, se gira o aparece un elemento nuevo. Hay que darse cuenta
// de que cambio y acercarse a ello.
// Sin cronometro y sin castigo: senalar la figura equivocada solo devuelve un
// sonido suave. La sorpresa es una emocion breve que abre la atencion.

import * as THREE from 'three';
import { MinigameBase } from '../../engine/MinigameBase.js';
import { createGround, createSky, createLights, GEO, scatterInstanced } from '../../engine/worldkit.js';
import { addReward, completeActivity } from '../../data/gameState.js';

const PROPS = 12;
const CHANGES_TO_FIND = 5;
const RING_RADIUS = 11;

export class SurpriseObserveGame extends MinigameBase {
  constructor(opts) {
    super({ ...opts, mode: 'first' });
    this.props = [];
    this.changed = null;
    this.found = 0;
    this.time = 0;
    this.nextChangeIn = 2.5;
    this._frustum = new THREE.Frustum();
    this._mat = new THREE.Matrix4();
    this._v = new THREE.Vector3();
  }

  /* ============================================================ escenario */

  build() {
    this.root.classList.add('i3d--fp');
    const scene = this.scene;

    scene.fog = new THREE.FogExp2('#d8c9ef', 0.016);
    this.sky = createSky({ top: '#6a5ac0', bottom: '#f0c8e4' });
    scene.add(this.sky);

    this.ground = createGround({
      size: 90,
      segments: 50,
      color: '#8e7fc4',
      amplitude: 0.45,
      scale: 0.05,
      flatRadius: 14
    });
    scene.add(this.ground);
    this.controller.groundHeightAt = (x, z) => this.ground.userData.heightAt(x, z);
    this.controller.bounds = { minX: -24, maxX: 24, minZ: -24, maxZ: 24 };
    this.controller.setPosition(0, 2, 0);
    this.controller.cfg.walkSpeed = 4.3;

    this.lights = createLights({
      sunColor: '#ffe4f4',
      sunIntensity: 1.6,
      hemiSky: '#cbb6ff',
      hemiGround: '#4a3f6b',
      hemiIntensity: 1,
      area: 30
    });
    scene.add(this.lights);

    this.buildProps();
    this.buildDecor();

    this.setObjective(CHANGES_TO_FIND, '◇');
  }

  buildProps() {
    const palette = ['#ffd166', '#7fd1ff', '#ff8fb8', '#a8e06a', '#ffa45c', '#c8a2ff'];
    for (let i = 0; i < PROPS; i += 1) {
      const a = (i / PROPS) * Math.PI * 2;
      const x = Math.cos(a) * RING_RADIUS;
      const z = Math.sin(a) * RING_RADIUS;
      const y = this.ground.userData.heightAt(x, z);

      const group = new THREE.Group();
      const pedestal = new THREE.Mesh(
        new THREE.CylinderGeometry(0.7, 0.85, 0.9, 6),
        new THREE.MeshStandardMaterial({ color: '#6f629c', roughness: 0.95, flatShading: true })
      );
      pedestal.position.y = 0.45;
      pedestal.castShadow = true;
      group.add(pedestal);

      const figureMat = new THREE.MeshStandardMaterial({
        color: palette[i % palette.length], roughness: 0.6, flatShading: true,
        emissive: palette[i % palette.length], emissiveIntensity: 0.15
      });
      const figure = new THREE.Mesh(i % 2 ? GEO.crystal() : GEO.orb(), figureMat);
      figure.position.y = 1.5;
      figure.castShadow = true;
      group.add(figure);

      group.position.set(x, y, z);
      this.scene.add(group);
      this.controller.addCollider({ type: 'sphere', center: new THREE.Vector3(x, y, z), radius: 0.9 });

      const prop = {
        group, figure, pedestal, index: i,
        baseColor: new THREE.Color(palette[i % palette.length]),
        baseScale: 1,
        baseY: 1.5,
        baseRot: 0,
        position: new THREE.Vector3(x, y, z),
        changeKind: null
      };
      this.props.push(prop);

      prop.interactable = this.interactable({
        object: figure,
        radius: 2.6,
        icon: '👁️',
        label: 'Mirar',
        onInteract: () => this.inspect(prop)
      });
    }
  }

  buildDecor() {
    const mat = new THREE.MeshStandardMaterial({ color: '#7a6ab0', roughness: 1, flatShading: true });
    const grass = scatterInstanced(GEO.grass(), mat, 200, (i) => {
      const a = i * 2.399;
      const r = 14 + (i % 24) * 0.7;
      const x = Math.cos(a) * r;
      const z = Math.sin(a) * r;
      return { x, y: this.ground.userData.heightAt(x, z) + 0.25, z, ry: a, scale: 0.8 + (i % 4) * 0.3 };
    });
    this.scene.add(grass);

    // fuente central: da un punto de referencia al girar
    const fountain = new THREE.Group();
    const base = new THREE.Mesh(
      new THREE.CylinderGeometry(2.2, 2.5, 0.6, 12),
      new THREE.MeshStandardMaterial({ color: '#8779c4', roughness: 0.9, flatShading: true })
    );
    base.position.y = 0.3;
    fountain.add(base);
    const water = new THREE.Mesh(
      new THREE.CylinderGeometry(1.9, 1.9, 0.12, 12),
      new THREE.MeshStandardMaterial({ color: '#a8e0ff', roughness: 0.15, emissive: '#3f7fbf', emissiveIntensity: 0.4 })
    );
    water.position.y = 0.62;
    fountain.add(water);
    fountain.position.set(0, this.ground.userData.heightAt(0, 0), 0);
    this.scene.add(fountain);
    this.controller.addCollider({ type: 'sphere', center: fountain.position.clone(), radius: 2.5 });
    this.fountain = fountain;
  }

  onStart() {
    this.ambient = this.audio.ambient('pad', { volume: 0.2, rate: 1.1 });
    this.say('ALGO VA A CAMBIAR', 2600);
  }

  /* ============================================================== cambios */

  /** ¿El objeto esta fuera del campo de vision del jugador? */
  isOutOfView(prop) {
    this.camera.updateMatrixWorld();
    this._mat.multiplyMatrices(this.camera.projectionMatrix, this.camera.matrixWorldInverse);
    this._frustum.setFromProjectionMatrix(this._mat);
    this._v.copy(prop.position).setY(prop.position.y + 1.5);
    return !this._frustum.containsPoint(this._v);
  }

  triggerChange() {
    if (this.changed || this.found >= CHANGES_TO_FIND) return;
    const candidates = this.props.filter((p) => !p.changeKind && this.isOutOfView(p));
    if (!candidates.length) return;     // si lo mira todo, se espera: nunca cambia a la vista
    const prop = candidates[Math.floor(Math.random() * candidates.length)];

    const kinds = ['color', 'scale', 'rise', 'spin', 'extra'];
    const kind = kinds[Math.floor(Math.random() * kinds.length)];
    prop.changeKind = kind;
    this.changed = prop;

    if (kind === 'color') {
      prop.figure.material.color.set('#ffffff');
      prop.figure.material.emissive.set('#ffd166');
      prop.figure.material.emissiveIntensity = 0.9;
    } else if (kind === 'scale') {
      prop.figure.scale.setScalar(1.9);
    } else if (kind === 'rise') {
      prop.figure.position.y = prop.baseY + 1.1;
    } else if (kind === 'spin') {
      prop.spinning = true;
    } else if (kind === 'extra') {
      const hat = new THREE.Mesh(
        new THREE.ConeGeometry(0.45, 0.8, 6),
        new THREE.MeshStandardMaterial({ color: '#ff8fb8', roughness: 0.6, flatShading: true })
      );
      hat.position.y = prop.baseY + 0.8;
      prop.group.add(hat);
      prop.extra = hat;
    }

    // pista sonora: algo paso a tu espalda
    this.audio.playAt('chime', prop.group, { volume: 0.35, refDistance: 14 });
    this.feedback.shakeCamera(0.04);
  }

  inspect(prop) {
    if (this.found >= CHANGES_TO_FIND) return;
    if (prop === this.changed) {
      this.found += 1;
      this.audio.play('collect', { volume: 0.6, rate: 1 + this.found * 0.06 });
      this.feedback.burst(prop.position.clone().add(new THREE.Vector3(0, 1.6, 0)), {
        count: 24, color: '#ffe9a8', speed: 3.2, life: 1.2, gravity: -1
      });
      this.feedback.flash(prop.position, { color: '#ffe9a8', intensity: 3.5, duration: 0.8 });
      this.restoreProp(prop);
      this.changed = null;
      completeActivity(`surprise-cambio-${this.found}`, 6);
      const all = this.advanceObjective();
      this.say('¡LO VISTE!', 1400);
      if (all) this.later(() => this.finale(), 1400);
      else this.nextChangeIn = 3 + Math.random() * 3;
    } else {
      // no era: sonido suave, sin texto de error
      this.audio.play('soften', { volume: 0.28 });
      this.feedback.burst(prop.position.clone().add(new THREE.Vector3(0, 1.6, 0)), {
        count: 5, color: '#cbb6ff', speed: 1.4, life: 0.5
      });
    }
  }

  restoreProp(prop) {
    prop.figure.material.color.copy(prop.baseColor);
    prop.figure.material.emissive.copy(prop.baseColor);
    prop.figure.material.emissiveIntensity = 0.15;
    prop.figure.scale.setScalar(1);
    prop.figure.position.y = prop.baseY;
    prop.spinning = false;
    if (prop.extra) {
      prop.group.remove(prop.extra);
      prop.extra.geometry.dispose();
      prop.extra.material.dispose();
      prop.extra = null;
    }
    prop.changeKind = null;
  }

  finale() {
    this.say('JARDÍN DESPIERTO', 2400);
    this.audio.play('success', { volume: 0.6 });
    this.props.forEach((p, i) => {
      this.later(() => {
        this.feedback.burst(p.position.clone().add(new THREE.Vector3(0, 1.6, 0)), {
          count: 10, color: '#ffd166', speed: 2.4, life: 1
        });
      }, i * 90);
    });
    this.later(() => {
      const p = new THREE.Vector3(0, this.ground.userData.heightAt(0, 5), 5);
      this.openPortal(p, { color: '#ffd1f0', label: 'Seguir camino' });
      this.say('CRUZA EL PORTAL', 2000);
    }, 1800);
  }

  /* =============================================================== update */

  onUpdate(dt) {
    this.time += dt;

    if (!this.changed && this.found < CHANGES_TO_FIND) {
      this.nextChangeIn -= dt;
      if (this.nextChangeIn <= 0) {
        this.triggerChange();
        this.nextChangeIn = 1.5;
      }
    }

    for (let i = 0; i < this.props.length; i += 1) {
      const p = this.props[i];
      if (p.spinning) p.figure.rotation.y += dt * 2.4;
      else p.figure.rotation.y += dt * 0.25;
      p.figure.position.y += Math.sin(this.time * 1.4 + i) * 0.0012;
    }

    if (this.fountain) this.fountain.rotation.y += dt * 0.05;
    if (this.portalRing) this.portalRing.rotation.z += dt * 0.6;
  }

  onReset() {
    this.found = 0;
    this.changed = null;
    this.nextChangeIn = 2.5;
    this.props.forEach((p) => this.restoreProp(p));
    this.controller.setPosition(0, 2, 0);
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
      islandId: 'surprise',
      success: true,
      emoAventura: true,
      badge: 'surprise',
      title: 'Isla de la Sorpresa',
      message: 'Detectaste los cinco cambios del jardín.'
    };
  }

  finish() {
    if (this.finished || this.closing) return;
    this.closing = true;
    this.controller.frozen = true;
    this.controller.exitPointerLock();
    addReward('estrella-atencion');
    completeActivity('surprise-observar-3d', 18);
    this.showClosingCard({
      title: 'Lo que abre la atención',
      lines: [
        'La sorpresa dura poco: es el instante en que algo no encaja y la atención se abre de golpe.',
        'Aquí no había peligro, solo cambios. Cuando la sorpresa no se convierte en miedo, se convierte en curiosidad.',
        'Mirar dos veces el mismo sitio es una forma de darse cuenta de lo que ya estaba cambiando.'
      ],
      onDone: () => super.finish()
    });
  }

  onDispose() {
    this.ambient?.stop();
    this.props.forEach((p) => { if (p.extra) { p.extra.geometry.dispose(); p.extra.material.dispose(); } });
    this.props.length = 0;
  }
}
