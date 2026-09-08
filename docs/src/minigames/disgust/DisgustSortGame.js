// GUARDIANES DEL DESAGRADO · Territorio de las sensaciones incomodas
// Verbo: MANIPULAR Y ORDENAR · Primera persona
//
// Cuatro zonas contaminadas. En cada una hay tres objetos que el jugador
// EMPUJA con el cuerpo (interaccion fisica real, no botones) hasta uno de los
// dos contenedores: lo que se descarta y lo que se conserva.
// Meterlo en el contenedor equivocado no castiga: el objeto sale rebotado con
// un sonido suave y se puede volver a intentar.
// Con los tres objetos ordenados se activa la valvula de la zona y el pantano
// de esa zona se aclara. Cuatro zonas limpias abren el portal.

import * as THREE from 'three';
import { MinigameBase } from '../../engine/MinigameBase.js?v=20260908180131';
import { createGround, createSky, createLights, GEO, scatterInstanced } from '../../engine/worldkit.js?v=20260908180131';
import { addReward, completeActivity, recordReevaluation, setInitialIntensity } from '../../data/gameState.js?v=20260908180131';

const ZONES = [
  {
    id: 'olores', name: 'Pantano de los Olores', x: -16, z: -12, color: '#6f8f3f',
    objects: [
      { label: 'comida en mal estado', keep: false, color: '#7a6a35', shape: 'box' },
      { label: 'flor del pantano', keep: true, color: '#e58fb5', shape: 'crystal' },
      { label: 'agua estancada', keep: false, color: '#4f6b3a', shape: 'sphere' }
    ]
  },
  {
    id: 'sabores', name: 'Cueva de los Sabores', x: 15, z: -14, color: '#5c7f6a',
    objects: [
      { label: 'raiz amarga', keep: false, color: '#6b5a3a', shape: 'box' },
      { label: 'fruto bueno', keep: true, color: '#e0733a', shape: 'sphere' },
      { label: 'hongo dudoso', keep: false, color: '#8a7f5a', shape: 'crystal' }
    ]
  },
  {
    id: 'imagenes', name: 'Bosque de las Imagenes', x: 17, z: 10, color: '#4f7f52',
    objects: [
      { label: 'imagen que incomoda', keep: false, color: '#5a4a5a', shape: 'box' },
      { label: 'recuerdo agradable', keep: true, color: '#7fc7e8', shape: 'crystal' },
      { label: 'resto olvidado', keep: false, color: '#5f5a4a', shape: 'sphere' }
    ]
  },
  {
    id: 'rechazo', name: 'Zona de Rechazo', x: -15, z: 12, color: '#5f7f4a',
    objects: [
      { label: 'lo que rechazo', keep: false, color: '#63543f', shape: 'box' },
      { label: 'lo que si me importa', keep: true, color: '#ffd166', shape: 'crystal' },
      { label: 'basura del camino', keep: false, color: '#4f5a44', shape: 'sphere' }
    ]
  }
];

const PUSH_RADIUS = 1.25;
const OBJECT_RADIUS = 0.5;

export class DisgustSortGame extends MinigameBase {
  constructor(opts) {
    super({ ...opts, mode: 'first' });
    this.zones = [];
    this.objects = [];
    this.time = 0;
    this.cleaned = 0;
  }

  /* ============================================================ escenario */

  build() {
    this.root.classList.add('i3d--fp');
    const scene = this.scene;

    scene.fog = new THREE.FogExp2('#5d7a4a', 0.022);
    this.sky = createSky({ top: '#47603c', bottom: '#9ab86e' });
    scene.add(this.sky);

    this.ground = createGround({
      size: 100,
      segments: 56,
      color: '#4f6b45',
      amplitude: 0.75,
      scale: 0.06
    });
    scene.add(this.ground);
    this.controller.groundHeightAt = (x, z) => this.ground.userData.heightAt(x, z);
    this.controller.bounds = { minX: -30, maxX: 30, minZ: -30, maxZ: 30 };
    this.controller.setPosition(0, 3, 0);
    this.controller.cfg.walkSpeed = 4.4;

    this.lights = createLights({
      sunColor: '#dff0b8',
      sunIntensity: 1.5,
      hemiSky: '#9fc48a',
      hemiGround: '#3a4a30',
      hemiIntensity: 0.95,
      area: 40
    });
    scene.add(this.lights);
    this.sun = this.lights.userData.sun;

    this.buildSwamp();
    this.buildZones();
    this.buildBubbles();

    this.setObjective(ZONES.length, '◆');
    this.zoneBar = this.addBar('zona', { icon: '🫧', color: '#a8e06a', value: 0 });
  }

  buildSwamp() {
    // charcas verdosas: planos bajos y translucidos
    const geo = new THREE.CircleGeometry(7, 18);
    geo.rotateX(-Math.PI / 2);
    this.pools = ZONES.map((z) => {
      const mat = new THREE.MeshStandardMaterial({
        color: '#5f7a2e', roughness: 0.35, transparent: true, opacity: 0.9, flatShading: true
      });
      const pool = new THREE.Mesh(geo, mat);
      pool.position.set(z.x, this.ground.userData.heightAt(z.x, z.z) + 0.06, z.z);
      this.scene.add(pool);
      return pool;
    });

    // vegetacion espesa
    const mat = new THREE.MeshStandardMaterial({ color: '#3f6b3a', roughness: 1, flatShading: true });
    const reeds = scatterInstanced(GEO.grass(), mat, 320, (i) => {
      const a = i * 2.399;
      const r = 4 + (i % 55) * 0.48;
      const x = Math.cos(a) * r;
      const z = Math.sin(a) * r;
      return { x, y: this.ground.userData.heightAt(x, z) + 0.3, z, ry: a, scale: 1 + (i % 4) * 0.35 };
    });
    this.scene.add(reeds);
  }

  buildZones() {
    ZONES.forEach((def, zi) => {
      const y = this.ground.userData.heightAt(def.x, def.z);
      const zone = { ...def, index: zi, y, sorted: 0, cleaned: false, objects: [] };

      // contenedores: descartar y conservar
      zone.binDiscard = this.makeBin(def.x - 3.4, y, def.z - 3.4, '#8a5a3a', '🚫');
      zone.binKeep = this.makeBin(def.x + 3.4, y, def.z - 3.4, '#4a8a6a', '💚');

      // valvula: se activa cuando los tres objetos estan ordenados
      const lever = new THREE.Group();
      const base = new THREE.Mesh(
        new THREE.CylinderGeometry(0.5, 0.6, 0.9, 6),
        new THREE.MeshStandardMaterial({ color: '#4a5548', roughness: 1, flatShading: true })
      );
      base.position.y = 0.45;
      lever.add(base);
      const handle = new THREE.Mesh(
        new THREE.BoxGeometry(0.18, 1.1, 0.18),
        new THREE.MeshStandardMaterial({ color: '#8a8f86', emissive: '#222', roughness: 0.6, flatShading: true })
      );
      handle.position.y = 1.3;
      handle.rotation.z = 0.5;
      lever.add(handle);
      lever.position.set(def.x, y, def.z + 4.2);
      this.scene.add(lever);
      zone.lever = lever;
      zone.leverHandle = handle;
      this.controller.addCollider({ type: 'sphere', center: new THREE.Vector3(def.x, y, def.z + 4.2), radius: 0.6 });

      zone.leverInteractable = this.interactable({
        object: handle,
        radius: 2.6,
        icon: '🔧',
        label: 'Activar',
        onInteract: () => this.pullLever(zone)
      });
      zone.leverInteractable.enabled = false;

      // objetos que hay que empujar
      def.objects.forEach((o, oi) => {
        const geo = o.shape === 'box' ? new THREE.BoxGeometry(0.8, 0.8, 0.8)
          : o.shape === 'sphere' ? new THREE.IcosahedronGeometry(0.5, 1)
            : GEO.crystal();
        const mesh = new THREE.Mesh(geo, new THREE.MeshStandardMaterial({
          color: o.color, roughness: 0.85, flatShading: true,
          emissive: o.keep ? o.color : '#000000', emissiveIntensity: o.keep ? 0.35 : 0
        }));
        const a = (oi / def.objects.length) * Math.PI * 2 + zi;
        const ox = def.x + Math.cos(a) * 3.2;
        const oz = def.z + Math.sin(a) * 3.2 + 1.5;
        mesh.position.set(ox, this.ground.userData.heightAt(ox, oz) + 0.5, oz);
        mesh.castShadow = true;
        this.scene.add(mesh);

        const obj = {
          mesh, zone, keep: o.keep, label: o.label,
          vel: new THREE.Vector3(), placed: false, home: mesh.position.clone()
        };
        this.objects.push(obj);
        zone.objects.push(obj);
      });

      this.zones.push(zone);
    });
  }

  makeBin(x, y, z, color, glyph) {
    const group = new THREE.Group();
    const body = new THREE.Mesh(
      new THREE.CylinderGeometry(1.25, 1.05, 1.1, 8, 1, true),
      new THREE.MeshStandardMaterial({ color, roughness: 0.9, flatShading: true, side: THREE.DoubleSide })
    );
    body.position.y = 0.55;
    group.add(body);
    const rim = new THREE.Mesh(
      new THREE.TorusGeometry(1.25, 0.09, 6, 18),
      new THREE.MeshStandardMaterial({ color, emissive: color, emissiveIntensity: 0.6, flatShading: true })
    );
    rim.rotation.x = Math.PI / 2;
    rim.position.y = 1.1;
    group.add(rim);

    // etiqueta diegetica: un simbolo flotando sobre el contenedor
    const canvas = document.createElement('canvas');
    canvas.width = canvas.height = 64;
    const ctx = canvas.getContext('2d');
    ctx.font = '52px serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(glyph, 32, 36);
    const sprite = new THREE.Sprite(new THREE.SpriteMaterial({
      map: new THREE.CanvasTexture(canvas), transparent: true, depthWrite: false
    }));
    sprite.scale.set(0.9, 0.9, 1);
    sprite.position.y = 1.9;
    group.add(sprite);

    group.position.set(x, y, z);
    this.scene.add(group);
    return { group, x, z, radius: 1.35 };
  }

  buildBubbles() {
    this.bubbles = [];
    const mat = new THREE.MeshStandardMaterial({
      color: '#b9e08a', transparent: true, opacity: 0.5, roughness: 0.2, flatShading: true
    });
    for (let i = 0; i < 18; i += 1) {
      const b = new THREE.Mesh(new THREE.IcosahedronGeometry(0.22, 0), mat);
      const z = ZONES[i % ZONES.length];
      b.position.set(z.x + (Math.random() - 0.5) * 8, this.ground.userData.heightAt(z.x, z.z) + 0.2, z.z + (Math.random() - 0.5) * 8);
      b.userData = { baseY: b.position.y, speed: 0.4 + Math.random() * 0.6, phase: Math.random() * 6 };
      this.scene.add(b);
      this.bubbles.push(b);
    }
  }

  onStart() {
    this.ambient = this.audio.ambient('swamp', { volume: 0.35, rate: 0.9 });
    this.say('EMPUJA Y ORDENA', 2400);
    setInitialIntensity('media');
  }

  /* ============================================================== empujar */

  pushObjects(dt) {
    const p = this.controller.position;
    const speed = Math.hypot(this.controller.velocity.x, this.controller.velocity.z);

    for (let i = 0; i < this.objects.length; i += 1) {
      const obj = this.objects[i];
      if (obj.placed) continue;
      const m = obj.mesh;

      // empuje del cuerpo del jugador
      const dx = m.position.x - p.x;
      const dz = m.position.z - p.z;
      const d = Math.hypot(dx, dz);
      if (d < PUSH_RADIUS + OBJECT_RADIUS && d > 0.001) {
        const push = (PUSH_RADIUS + OBJECT_RADIUS - d) * (2.5 + speed * 0.9);
        obj.vel.x += (dx / d) * push * dt * 8;
        obj.vel.z += (dz / d) * push * dt * 8;
        if (speed > 0.8 && Math.random() < 0.08) this.audio.play('step', { volume: 0.12, rate: 0.7 });
      }

      // integracion + rozamiento
      m.position.x += obj.vel.x * dt;
      m.position.z += obj.vel.z * dt;
      obj.vel.multiplyScalar(1 - Math.min(1, 3.2 * dt));
      m.position.y = this.ground.userData.heightAt(m.position.x, m.position.z) + 0.5;
      m.rotation.x += obj.vel.z * dt * 1.4;
      m.rotation.z -= obj.vel.x * dt * 1.4;

      // limites del mapa
      m.position.x = Math.max(-29, Math.min(29, m.position.x));
      m.position.z = Math.max(-29, Math.min(29, m.position.z));

      // contenedores
      this.checkBins(obj);
    }
  }

  checkBins(obj) {
    const zone = obj.zone;
    const m = obj.mesh;
    const bins = [
      { bin: zone.binDiscard, keep: false },
      { bin: zone.binKeep, keep: true }
    ];
    for (const { bin, keep } of bins) {
      const d = Math.hypot(m.position.x - bin.x, m.position.z - bin.z);
      if (d > bin.radius) continue;
      if (keep === obj.keep) {
        this.placeObject(obj, bin);
      } else {
        // contenedor equivocado: sale rebotado, sin castigo y sin regano
        const dx = m.position.x - bin.x;
        const dz = m.position.z - bin.z;
        const len = Math.hypot(dx, dz) || 1;
        obj.vel.set((dx / len) * 5.5, 0, (dz / len) * 5.5);
        m.position.x += (dx / len) * 0.4;
        m.position.z += (dz / len) * 0.4;
        this.audio.play('soften', { volume: 0.3 });
        this.feedback.burst(m.position, { count: 6, color: '#cfe0a8', speed: 1.6, life: 0.6 });
      }
      return;
    }
  }

  placeObject(obj, bin) {
    obj.placed = true;
    const zone = obj.zone;
    zone.sorted += 1;
    this.audio.playAt('collect', bin.group, { volume: 0.6, refDistance: 6, });
    this.feedback.burst(obj.mesh.position, { count: 16, color: obj.keep ? '#a8e06a' : '#cbb08a', speed: 2.6, life: 0.9 });

    // el objeto cae dentro del contenedor
    const from = obj.mesh.position.clone();
    this.feedback.tween({
      from: 0, to: 1, duration: 0.5,
      onUpdate: (t) => {
        obj.mesh.position.set(
          from.x + (bin.x - from.x) * t,
          from.y + Math.sin(t * Math.PI) * 1.2 - t * 0.9,
          from.z + (bin.z - from.z) * t
        );
        obj.mesh.scale.setScalar(1 - t * 0.55);
      },
      onDone: () => { obj.mesh.visible = false; }
    });

    this.zoneBar.set(zone.sorted / zone.objects.length);
    if (zone.sorted >= zone.objects.length) {
      zone.leverInteractable.enabled = true;
      zone.leverHandle.material.emissive.set('#7fd1ff');
      zone.leverHandle.material.emissiveIntensity = 1.2;
      this.say('ACTIVA LA VÁLVULA', 2000);
      this.audio.play('light', { volume: 0.4 });
    }
  }

  /* ============================================================== valvula */

  pullLever(zone) {
    if (zone.cleaned || zone.sorted < zone.objects.length) return;
    zone.cleaned = true;
    zone.leverInteractable.done = true;
    this.cleaned += 1;

    this.feedback.tween({
      from: 0.5, to: -0.9, duration: 0.6,
      onUpdate: (v) => { zone.leverHandle.rotation.z = v; }
    });

    // la zona se aclara: el agua deja de estar estancada
    const pool = this.pools[zone.index];
    this.feedback.tweenColor(pool.material.color, '#6fc3d8', 2.5);
    this.feedback.tweenValue(pool.material, 'opacity', 0.55, 2.5);
    this.feedback.burst(zone.lever.position.clone().add(new THREE.Vector3(0, 1.4, 0)), {
      count: 26, color: '#a8e0ff', speed: 3.2, life: 1.4, gravity: -1
    });
    this.audio.playAt('water', zone.lever, { volume: 0.6, refDistance: 8 });

    const p = this.cleaned / ZONES.length;
    this.feedback.tweenColor(this.scene.fog.color, p >= 1 ? '#a8cfe0' : '#5f7a4a', 2.5);
    this.feedback.tweenValue(this.scene.fog, 'density', 0.022 - p * 0.012, 2.5);
    this.sky.userData.setColors(
      p > 0.5 ? '#4a7f9a' : '#47603c',
      p > 0.5 ? '#bfe0c0' : '#9ab86e'
    );
    this.feedback.tweenValue(this.sun, 'intensity', 1.5 + p * 0.8, 2.5);
    this.ambient?.setVolume(0.35 - p * 0.22);

    completeActivity(`disgust-zona-${zone.id}`, 8);
    this.zoneBar.set(0);
    const all = this.advanceObjective();
    if (all) this.later(() => this.clearIsland(), 1600);
    else this.say('ZONA LIMPIA', 1800);
  }

  clearIsland() {
    this.say('ISLA PROTEGIDA', 2600);
    this.audio.play('success', { volume: 0.6 });
    this.later(() => {
      const p = new THREE.Vector3(0, this.ground.userData.heightAt(0, 8), 8);
      this.openPortal(p, { color: '#a8e0ff', label: 'Salir del pantano' });
      this.say('CRUZA EL PORTAL', 2000);
    }, 1600);
  }

  /* =============================================================== update */

  onUpdate(dt) {
    this.time += dt;
    this.pushObjects(dt);

    for (let i = 0; i < this.bubbles.length; i += 1) {
      const b = this.bubbles[i];
      const zone = this.zones[i % this.zones.length];
      b.position.y = b.userData.baseY + ((this.time * b.userData.speed + b.userData.phase) % 2) * 0.9;
      b.visible = !zone.cleaned;
      b.scale.setScalar(0.7 + Math.sin(this.time * 2 + i) * 0.15);
    }

    // objetos por ordenar: leve latido para que se vean
    for (let i = 0; i < this.objects.length; i += 1) {
      const o = this.objects[i];
      if (o.placed || !o.keep) continue;
      o.mesh.material.emissiveIntensity = 0.3 + Math.sin(this.time * 2.5 + i) * 0.18;
    }

    if (this.portalRing) this.portalRing.rotation.z += dt * 0.6;
  }

  onReset() {
    this.cleaned = 0;
    this.zones.forEach((z, i) => {
      z.sorted = 0;
      z.cleaned = false;
      z.leverInteractable.done = false;
      z.leverInteractable.enabled = false;
      z.leverHandle.rotation.z = 0.5;
      z.leverHandle.material.emissive.set('#222222');
      z.leverHandle.material.emissiveIntensity = 1;
      this.pools[i].material.color.set('#5f7a2e');
      this.pools[i].material.opacity = 0.9;
    });
    this.objects.forEach((o) => {
      o.placed = false;
      o.vel.set(0, 0, 0);
      o.mesh.visible = true;
      o.mesh.scale.setScalar(1);
      o.mesh.position.copy(o.home);
    });
    this.scene.fog.color.set('#5d7a4a');
    this.scene.fog.density = 0.022;
    this.sky.userData.setColors('#47603c', '#9ab86e');
    this.sun.intensity = 1.5;
    this.zoneBar.set(0);
    this.controller.setPosition(0, 3, 0);
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
      islandId: 'disgust',
      success: true,
      emoAventura: true,
      badge: 'disgust',
      title: 'Guardianes del Desagrado',
      message: 'Ordenaste las cuatro zonas y el pantano volvió a aclararse.'
    };
  }

  finish() {
    if (this.finished || this.closing) return;
    this.closing = true;
    this.controller.frozen = true;
    this.controller.exitPointerLock();
    addReward('semilla-aceptacion');
    addReward('cristal-perspectiva');
    completeActivity('disgust-ordenar-3d', 20);
    recordReevaluation('disgust', 'media', 'Discriminar y ordenar', 'baja');
    this.showClosingCard({
      title: 'Discriminar, no huir',
      lines: [
        'El desagrado sirve para eso: separar lo que puede dañarte de lo que no. No para apartarlo todo.',
        'En cada zona había algo que valía la pena conservar. Cuando el rechazo lo ocupa todo, también se descarta lo bueno.',
        'Meter algo en el contenedor equivocado no rompió nada: el objeto volvió y pudiste decidir otra vez.'
      ],
      onDone: () => super.finish()
    });
  }

  onDispose() {
    this.ambient?.stop();
    this.zones.length = 0;
    this.objects.length = 0;
    this.bubbles.length = 0;
  }
}
