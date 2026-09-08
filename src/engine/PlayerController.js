// Nucleo 3D · Controlador del jugador
// WASD relativo a camara, mouse look con pointer lock (primera persona),
// camara orbital de seguimiento (tercera persona), salto, correr, interactuar,
// gravedad, groundCheck, colisiones AABB/esfera y limites invisibles del mapa.
//
// Sin motor de fisica: colisiones resueltas contra un array de colliders.
// Nada de `new` dentro del bucle: todos los vectores son reutilizables.

import * as THREE from 'three';

const _v = new THREE.Vector3();
const _v2 = new THREE.Vector3();
const _forward = new THREE.Vector3();
const _right = new THREE.Vector3();
const _euler = new THREE.Euler(0, 0, 0, 'YXZ');
const _box = new THREE.Box3();

export const DEFAULTS = {
  radius: 0.38,
  height: 1.65,
  eyeHeight: 1.5,
  walkSpeed: 4.2,
  runSpeed: 7.4,
  accel: 26,
  damping: 12,
  jumpSpeed: 6.4,
  gravity: -18,
  mouseSensitivity: 0.0022,
  headBob: 0.055
};

export class PlayerController {
  /**
   * @param {object} opts
   * @param {THREE.PerspectiveCamera} opts.camera
   * @param {HTMLElement} opts.domElement  elemento que captura input (canvas)
   * @param {'first'|'third'} opts.mode
   * @param {THREE.Object3D} [opts.avatar]  malla del personaje (tercera persona)
   * @param {object} [opts.bounds] { minX, maxX, minZ, maxZ } limites invisibles
   */
  constructor({ camera, domElement, mode = 'first', avatar = null, bounds = null, config = {} }) {
    this.camera = camera;
    this.dom = domElement;
    this.mode = mode;
    this.avatar = avatar;
    this.bounds = bounds;
    this.cfg = { ...DEFAULTS, ...config };

    this.position = new THREE.Vector3(0, 0, 0);   // pies del jugador
    this.velocity = new THREE.Vector3();
    this.yaw = 0;
    this.pitch = 0;
    this.onGround = false;
    this.enabled = true;
    this.frozen = false;          // durante una actividad (respiracion, dialogo)
    this.speedScale = 1;          // la emocion puede frenar al jugador
    this.bobPhase = 0;
    this.wasRunning = false;
    this.stepDistance = 0;

    // colliders: { type:'box', box:THREE.Box3 } | { type:'sphere', center:Vector3, radius:number }
    this.colliders = [];
    // orbital (tercera persona)
    this.orbit = { distance: 6.2, height: 2.1, targetDistance: 6.2 };

    this.keys = Object.create(null);
    this.touch = { move: { x: 0, y: 0 }, look: { x: 0, y: 0 }, jump: false, interact: false };
    this.events = { jump: [], step: [], interact: [], land: [] };
    this.pointerLocked = false;

    this._bind();
  }

  /* ------------------------------------------------------------- eventos */

  on(name, fn) {
    (this.events[name] ||= []).push(fn);
    return () => {
      this.events[name] = this.events[name].filter((f) => f !== fn);
    };
  }

  emit(name, payload) {
    (this.events[name] || []).forEach((fn) => fn(payload));
  }

  /* --------------------------------------------------------------- input */

  _bind() {
    this._onKeyDown = (e) => {
      if (!this.enabled) return;
      const k = e.key.toLowerCase();
      this.keys[k] = true;
      if (k === ' ' || k === 'spacebar') { e.preventDefault(); this.tryJump(); }
      if (k === 'e') this.emit('interact');
    };
    this._onKeyUp = (e) => { this.keys[e.key.toLowerCase()] = false; };

    this._onMouseMove = (e) => {
      if (!this.pointerLocked || !this.enabled) return;
      this.addLook(e.movementX * this.cfg.mouseSensitivity, e.movementY * this.cfg.mouseSensitivity);
    };

    this._onPointerLockChange = () => {
      this.pointerLocked = document.pointerLockElement === this.dom;
      this.emit('pointerlock', this.pointerLocked);
    };

    // Arrastre: funciona en escritorio sin pointer lock y en tactil (lado derecho)
    this._drag = { active: false, id: null, x: 0, y: 0 };
    this._onPointerDown = (e) => {
      if (!this.enabled) return;
      if (e.pointerType !== 'touch' && this.pointerLocked) return;
      if (e.pointerType === 'touch' && e.clientX < window.innerWidth * 0.4) return; // zona del joystick
      this._drag.active = true;
      this._drag.id = e.pointerId;
      this._drag.x = e.clientX;
      this._drag.y = e.clientY;
    };
    this._onPointerMove = (e) => {
      if (!this._drag.active || e.pointerId !== this._drag.id) return;
      const dx = e.clientX - this._drag.x;
      const dy = e.clientY - this._drag.y;
      this._drag.x = e.clientX;
      this._drag.y = e.clientY;
      this.addLook(dx * 0.005, dy * 0.005);
    };
    this._onPointerUp = (e) => {
      if (e.pointerId === this._drag.id) { this._drag.active = false; this._drag.id = null; }
    };

    window.addEventListener('keydown', this._onKeyDown);
    window.addEventListener('keyup', this._onKeyUp);
    document.addEventListener('mousemove', this._onMouseMove);
    document.addEventListener('pointerlockchange', this._onPointerLockChange);
    this.dom.addEventListener('pointerdown', this._onPointerDown);
    window.addEventListener('pointermove', this._onPointerMove);
    window.addEventListener('pointerup', this._onPointerUp);
    window.addEventListener('pointercancel', this._onPointerUp);
  }

  addLook(dx, dy) {
    this.yaw -= dx;
    this.pitch -= dy;
    const limit = Math.PI / 2 - 0.05;
    this.pitch = Math.max(-limit, Math.min(limit, this.pitch));
  }

  requestPointerLock() {
    if (this.mode !== 'first') return;
    this.dom.requestPointerLock?.();
  }

  exitPointerLock() {
    if (document.pointerLockElement === this.dom) document.exitPointerLock?.();
  }

  /* ------------------------------------------------------------ movimiento */

  tryJump() {
    if (this.frozen || !this.onGround) return;
    this.velocity.y = this.cfg.jumpSpeed;
    this.onGround = false;
    this.emit('jump');
  }

  setPosition(x, y, z) {
    this.position.set(x, y, z);
    this.velocity.set(0, 0, 0);
    this.onGround = false;
  }

  addCollider(collider) {
    this.colliders.push(collider);
    return collider;
  }

  /** Caja a partir de una malla (se calcula una vez, no por frame) */
  addBoxFromObject(object, padding = 0) {
    _box.setFromObject(object);
    if (padding) _box.expandByScalar(padding);
    return this.addCollider({ type: 'box', box: _box.clone() });
  }

  clearColliders() {
    this.colliders.length = 0;
  }

  /** Altura del suelo bajo el jugador; las islas la sobreescriben si tienen relieve */
  groundHeightAt(/* x, z */) {
    return 0;
  }

  get inputVector() {
    let x = 0;
    let z = 0;
    if (this.keys['w'] || this.keys['arrowup']) z -= 1;
    if (this.keys['s'] || this.keys['arrowdown']) z += 1;
    if (this.keys['a'] || this.keys['arrowleft']) x -= 1;
    if (this.keys['d'] || this.keys['arrowright']) x += 1;
    x += this.touch.move.x;
    z += this.touch.move.y;
    const len = Math.hypot(x, z);
    if (len > 1) { x /= len; z /= len; }
    return { x, z };
  }

  get isRunning() {
    return (this.keys['shift'] || this.touch.run) && !this.frozen;
  }

  update(dt) {
    if (!this.enabled) return;
    dt = Math.min(dt, 0.05); // estabilidad si el navegador salta frames

    const cfg = this.cfg;
    const input = this.frozen ? { x: 0, z: 0 } : this.inputVector;

    // direcciones relativas a la camara (yaw)
    _forward.set(-Math.sin(this.yaw), 0, -Math.cos(this.yaw));
    _right.set(Math.cos(this.yaw), 0, -Math.sin(this.yaw));

    const target = this.isRunning ? cfg.runSpeed : cfg.walkSpeed;
    const maxSpeed = target * this.speedScale;

    _v.set(0, 0, 0)
      .addScaledVector(_forward, -input.z)
      .addScaledVector(_right, input.x);
    if (_v.lengthSq() > 0) _v.normalize().multiplyScalar(maxSpeed);

    // aceleracion / frenado suavizados (inercia)
    const accel = _v.lengthSq() > 0 ? cfg.accel : cfg.damping;
    this.velocity.x += (_v.x - this.velocity.x) * Math.min(1, accel * dt);
    this.velocity.z += (_v.z - this.velocity.z) * Math.min(1, accel * dt);

    // gravedad
    this.velocity.y += cfg.gravity * dt;

    // integracion por ejes (permite deslizar contra paredes)
    const prevY = this.position.y;
    this.position.x += this.velocity.x * dt;
    this.resolveHorizontal('x');
    this.position.z += this.velocity.z * dt;
    this.resolveHorizontal('z');
    this.position.y += this.velocity.y * dt;

    // suelo
    const ground = this.groundHeightAt(this.position.x, this.position.z);
    const wasAir = !this.onGround;
    if (this.position.y <= ground) {
      this.position.y = ground;
      if (this.velocity.y < -1 && wasAir) this.emit('land', Math.abs(this.velocity.y));
      this.velocity.y = 0;
      this.onGround = true;
    } else {
      this.onGround = false;
    }

    // limites invisibles del mapa
    if (this.bounds) {
      const b = this.bounds;
      const r = cfg.radius;
      this.position.x = Math.max(b.minX + r, Math.min(b.maxX - r, this.position.x));
      this.position.z = Math.max(b.minZ + r, Math.min(b.maxZ - r, this.position.z));
    }

    // pasos (para audio)
    if (this.onGround) {
      const moved = Math.hypot(this.velocity.x, this.velocity.z) * dt;
      this.stepDistance += moved;
      const stride = this.isRunning ? 1.9 : 2.5;
      if (this.stepDistance > stride) {
        this.stepDistance = 0;
        this.emit('step', { running: this.isRunning });
      }
    }

    this.updateCamera(dt, prevY);
    if (this.avatar) this.updateAvatar(dt);
  }

  /** Empuja al jugador fuera de cualquier collider (cilindro vs caja/esfera) */
  resolveHorizontal(axis) {
    const r = this.cfg.radius;
    const py = this.position.y;
    const topY = py + this.cfg.height;
    for (let i = 0; i < this.colliders.length; i += 1) {
      const c = this.colliders[i];
      if (c.disabled) continue;
      if (c.type === 'box') {
        const b = c.box;
        if (topY < b.min.y || py > b.max.y) continue;
        const cx = Math.max(b.min.x, Math.min(this.position.x, b.max.x));
        const cz = Math.max(b.min.z, Math.min(this.position.z, b.max.z));
        const dx = this.position.x - cx;
        const dz = this.position.z - cz;
        const distSq = dx * dx + dz * dz;
        if (distSq >= r * r) continue;
        if (axis === 'x') {
          this.position.x = this.position.x < (b.min.x + b.max.x) / 2 ? b.min.x - r : b.max.x + r;
          this.velocity.x = 0;
        } else {
          this.position.z = this.position.z < (b.min.z + b.max.z) / 2 ? b.min.z - r : b.max.z + r;
          this.velocity.z = 0;
        }
      } else if (c.type === 'sphere') {
        if (Math.abs(c.center.y - py) > (c.radius + this.cfg.height)) continue;
        const dx = this.position.x - c.center.x;
        const dz = this.position.z - c.center.z;
        const dist = Math.hypot(dx, dz);
        const min = c.radius + r;
        if (dist >= min || dist === 0) continue;
        const push = (min - dist);
        this.position.x += (dx / dist) * push;
        this.position.z += (dz / dist) * push;
        if (axis === 'x') this.velocity.x = 0; else this.velocity.z = 0;
      }
    }
  }

  updateCamera(dt, prevY) {
    const cfg = this.cfg;
    if (this.mode === 'first') {
      const speed = Math.hypot(this.velocity.x, this.velocity.z);
      this.bobPhase += dt * (speed > 0.4 ? (this.isRunning ? 13 : 8.5) : 0);
      const bob = Math.sin(this.bobPhase) * cfg.headBob * Math.min(1, speed / cfg.walkSpeed);
      this.camera.position.set(
        this.position.x,
        this.position.y + cfg.eyeHeight + bob,
        this.position.z
      );
      _euler.set(this.pitch, this.yaw, 0);
      this.camera.quaternion.setFromEuler(_euler);
    } else {
      // tercera persona: orbita suave detras del jugador
      const d = this.orbit.distance;
      const cosP = Math.cos(this.pitch * 0.6);
      _v.set(
        this.position.x + Math.sin(this.yaw) * d * cosP,
        this.position.y + this.orbit.height - Math.sin(this.pitch * 0.6) * d,
        this.position.z + Math.cos(this.yaw) * d * cosP
      );
      this.camera.position.lerp(_v, Math.min(1, dt * 8));
      _v2.set(this.position.x, this.position.y + 1.1, this.position.z);
      this.camera.lookAt(_v2);
    }
    void prevY;
  }

  updateAvatar(dt) {
    const a = this.avatar;
    a.position.set(this.position.x, this.position.y, this.position.z);
    const speed = Math.hypot(this.velocity.x, this.velocity.z);
    if (speed > 0.25) {
      const angle = Math.atan2(this.velocity.x, this.velocity.z);
      let diff = angle - a.rotation.y;
      while (diff > Math.PI) diff -= Math.PI * 2;
      while (diff < -Math.PI) diff += Math.PI * 2;
      a.rotation.y += diff * Math.min(1, dt * 12);
    }
    // pequeno balanceo al caminar / estirado al saltar
    const bob = this.onGround ? Math.sin(this.bobPhase * 1.6) * 0.05 * Math.min(1, speed / 4) : 0;
    a.scale.set(1, this.onGround ? 1 + bob : 1.08, 1);
    this.bobPhase += dt * (speed > 0.4 ? (this.isRunning ? 13 : 8.5) : 2);
    a.userData.state = !this.onGround ? 'jump' : speed > 5 ? 'run' : speed > 0.3 ? 'walk' : 'idle';
  }

  /* --------------------------------------------------------------- limpieza */

  dispose() {
    window.removeEventListener('keydown', this._onKeyDown);
    window.removeEventListener('keyup', this._onKeyUp);
    document.removeEventListener('mousemove', this._onMouseMove);
    document.removeEventListener('pointerlockchange', this._onPointerLockChange);
    this.dom.removeEventListener('pointerdown', this._onPointerDown);
    window.removeEventListener('pointermove', this._onPointerMove);
    window.removeEventListener('pointerup', this._onPointerUp);
    window.removeEventListener('pointercancel', this._onPointerUp);
    this.exitPointerLock();
    this.colliders.length = 0;
    this.events = { jump: [], step: [], interact: [], land: [] };
    this.enabled = false;
  }
}
