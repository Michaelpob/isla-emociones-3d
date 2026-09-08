// Nucleo 3D · Objetos interactivos
// Registro con radio de activacion, deteccion por proximidad + raycast frontal,
// chip [E] Interactuar (sin parrafos) y realce sutil del objeto.

import * as THREE from 'three';

const _v = new THREE.Vector3();
const _dir = new THREE.Vector3();

export class Interactable {
  /**
   * @param {object} opts
   * @param {THREE.Object3D} opts.object   objeto a resaltar / centro del radio
   * @param {number} [opts.radius]         radio de activacion
   * @param {string} [opts.icon]           icono del chip
   * @param {string} [opts.label]          3-5 palabras como maximo
   * @param {Function} [opts.onEnter]
   * @param {Function} [opts.onExit]
   * @param {Function} [opts.onInteract]
   */
  constructor({ object, radius = 2.2, icon = '✋', label = 'Interactuar', onEnter, onExit, onInteract, requireLook = false }) {
    this.object = object;
    this.radius = radius;
    this.icon = icon;
    this.label = label;
    this.onEnter = onEnter;
    this.onExit = onExit;
    this.onInteract = onInteract;
    this.requireLook = requireLook;
    this.enabled = true;
    this.inRange = false;
    this.done = false;
    this._baseScale = object ? object.scale.clone() : new THREE.Vector3(1, 1, 1);
    this._emissiveTargets = [];
    if (object) {
      object.traverse((child) => {
        if (child.isMesh && child.material && 'emissiveIntensity' in child.material) {
          this._emissiveTargets.push({ mat: child.material, base: child.material.emissiveIntensity });
        }
      });
    }
  }

  get position() {
    return this.object ? this.object.getWorldPosition(_v) : _v.set(0, 0, 0);
  }

  highlight(on) {
    if (!this.object) return;
    const s = on ? 1.09 : 1;
    this.object.scale.set(this._baseScale.x * s, this._baseScale.y * s, this._baseScale.z * s);
    this._emissiveTargets.forEach(({ mat, base }) => {
      mat.emissiveIntensity = on ? base + 0.55 : base;
    });
  }

  dispose() {
    this.highlight(false);
    this._emissiveTargets.length = 0;
    this.object = null;
    this.onEnter = this.onExit = this.onInteract = null;
  }
}

export class InteractableManager {
  /**
   * @param {object} opts
   * @param {THREE.Camera} opts.camera
   * @param {HTMLElement} opts.hud  contenedor donde vive el chip [E]
   */
  constructor({ camera, hud }) {
    this.camera = camera;
    this.items = [];
    this.active = null;
    this.hud = hud;
    this.chip = document.createElement('div');
    this.chip.className = 'i3d-prompt';
    this.chip.hidden = true;
    this.chip.innerHTML = '<kbd>E</kbd><span class="i3d-prompt__icon"></span><span class="i3d-prompt__label"></span>';
    hud.appendChild(this.chip);
  }

  add(interactable) {
    this.items.push(interactable);
    return interactable;
  }

  remove(interactable) {
    this.items = this.items.filter((i) => i !== interactable);
    if (this.active === interactable) this.setActive(null);
    interactable.dispose();
  }

  clear() {
    this.setActive(null);
    this.items.forEach((i) => i.dispose());
    this.items.length = 0;
  }

  /** Devuelve el interactuable mas cercano al frente del jugador */
  update(playerPosition) {
    let best = null;
    let bestScore = Infinity;
    this.camera.getWorldDirection(_dir);

    for (let i = 0; i < this.items.length; i += 1) {
      const item = this.items[i];
      if (!item.enabled || item.done || !item.object) continue;
      const p = item.position;
      const dx = p.x - playerPosition.x;
      const dz = p.z - playerPosition.z;
      const dist = Math.hypot(dx, dz);
      if (dist > item.radius) continue;
      if (item.requireLook) {
        const dot = (dx / (dist || 1)) * _dir.x + (dz / (dist || 1)) * _dir.z;
        if (dot < 0.45) continue; // hay que estar mirandolo
      }
      if (dist < bestScore) { bestScore = dist; best = item; }
    }

    if (best !== this.active) this.setActive(best);
  }

  setActive(item) {
    if (this.active) {
      this.active.highlight(false);
      this.active.onExit?.(this.active);
    }
    this.active = item;
    if (item) {
      item.highlight(true);
      item.onEnter?.(item);
      this.chip.querySelector('.i3d-prompt__icon').textContent = item.icon;
      this.chip.querySelector('.i3d-prompt__label').textContent = item.label;
      this.chip.hidden = false;
    } else {
      this.chip.hidden = true;
    }
  }

  /** Llamado por la tecla E o el boton tactil */
  interact() {
    if (!this.active || this.active.done) return false;
    this.active.onInteract?.(this.active);
    return true;
  }

  dispose() {
    this.clear();
    this.chip.remove();
    this.camera = null;
  }
}
