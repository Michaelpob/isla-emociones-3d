// Nucleo 3D · Kit de escenario low-poly
// Terreno con relieve deterministico (misma funcion para la malla y para el
// groundCheck del jugador), vegetacion con InstancedMesh, rocas, cielo con
// gradiente y luces con una sola sombra por escena.

import * as THREE from 'three';

const _m = new THREE.Matrix4();
const _q = new THREE.Quaternion();
const _v = new THREE.Vector3();
const _s = new THREE.Vector3();
const _up = new THREE.Vector3(0, 1, 0);

/** Relieve suave y deterministico: sin ruido aleatorio, reproducible en CPU */
export function terrainHeight(x, z, { amplitude = 1.1, scale = 0.08 } = {}) {
  return (
    Math.sin(x * scale) * Math.cos(z * scale * 1.3) * amplitude +
    Math.sin((x + z) * scale * 2.1) * amplitude * 0.28
  );
}

export function createGround({
  size = 90,
  segments = 60,
  color = '#3d5a45',
  amplitude = 1.1,
  scale = 0.08,
  flatRadius = 0,
  receiveShadow = true
} = {}) {
  const geo = new THREE.PlaneGeometry(size, size, segments, segments);
  geo.rotateX(-Math.PI / 2);
  const pos = geo.attributes.position;
  for (let i = 0; i < pos.count; i += 1) {
    const x = pos.getX(i);
    const z = pos.getZ(i);
    let h = terrainHeight(x, z, { amplitude, scale });
    if (flatRadius > 0) {
      const d = Math.hypot(x, z);
      if (d < flatRadius) h *= d / flatRadius;
    }
    pos.setY(i, h);
  }
  geo.computeVertexNormals();
  const mat = new THREE.MeshStandardMaterial({ color, roughness: 0.95, flatShading: true });
  const mesh = new THREE.Mesh(geo, mat);
  mesh.receiveShadow = receiveShadow;
  mesh.name = 'ground';
  mesh.userData.heightAt = (x, z) => {
    let h = terrainHeight(x, z, { amplitude, scale });
    if (flatRadius > 0) {
      const d = Math.hypot(x, z);
      if (d < flatRadius) h *= d / flatRadius;
    }
    return h;
  };
  return mesh;
}

/** Copias repetidas en una sola llamada de dibujo */
export function scatterInstanced(geometry, material, count, place) {
  const mesh = new THREE.InstancedMesh(geometry, material, count);
  mesh.castShadow = false;
  mesh.receiveShadow = false;
  for (let i = 0; i < count; i += 1) {
    const t = place(i) || {};
    _v.set(t.x ?? 0, t.y ?? 0, t.z ?? 0);
    _q.setFromAxisAngle(_up, t.ry ?? Math.random() * Math.PI * 2);
    const sc = t.scale ?? 1;
    _s.set(sc, t.scaleY ?? sc, sc);
    _m.compose(_v, _q, _s);
    mesh.setMatrixAt(i, _m);
  }
  mesh.instanceMatrix.needsUpdate = true;
  return mesh;
}

/* ------------------------------------------------------------- geometrias */

export const GEO = {
  coneTree: () => new THREE.ConeGeometry(0.62, 1.9, 6),
  trunk: () => new THREE.CylinderGeometry(0.13, 0.17, 0.9, 5),
  rock: () => new THREE.DodecahedronGeometry(0.55, 0),
  crystal: () => new THREE.OctahedronGeometry(0.42, 0),
  grass: () => new THREE.ConeGeometry(0.11, 0.55, 3),
  orb: () => new THREE.IcosahedronGeometry(0.34, 1),
  pillar: () => new THREE.CylinderGeometry(0.5, 0.6, 3.4, 6),
  slab: () => new THREE.BoxGeometry(3, 0.5, 3)
};

/** Arbol low-poly (tronco + copa) como grupo reutilizable */
export function makeTree({ color = '#4b8a52', trunkColor = '#6b4a2f', scale = 1 } = {}) {
  const group = new THREE.Group();
  const trunk = new THREE.Mesh(
    GEO.trunk(),
    new THREE.MeshStandardMaterial({ color: trunkColor, roughness: 1, flatShading: true })
  );
  trunk.position.y = 0.45;
  const crown = new THREE.Mesh(
    GEO.coneTree(),
    new THREE.MeshStandardMaterial({ color, roughness: 0.9, flatShading: true })
  );
  crown.position.y = 1.55;
  group.add(trunk, crown);
  group.scale.setScalar(scale);
  return group;
}

export function makeRock({ color = '#7a7f86', scale = 1 } = {}) {
  const rock = new THREE.Mesh(
    GEO.rock(),
    new THREE.MeshStandardMaterial({ color, roughness: 1, flatShading: true })
  );
  rock.scale.setScalar(scale);
  return rock;
}

/* ------------------------------------------------------------------ cielo */

export function createSky({ top = '#0d1b2a', bottom = '#3d5a80', size = 210 } = {}) {
  const geo = new THREE.SphereGeometry(size, 24, 16);
  const mat = new THREE.ShaderMaterial({
    side: THREE.BackSide,
    depthWrite: false,
    uniforms: {
      topColor: { value: new THREE.Color(top) },
      bottomColor: { value: new THREE.Color(bottom) },
      offset: { value: 12 },
      exponent: { value: 0.9 }
    },
    vertexShader: `
      varying vec3 vWorld;
      void main() {
        vWorld = (modelMatrix * vec4(position, 1.0)).xyz;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
    fragmentShader: `
      uniform vec3 topColor;
      uniform vec3 bottomColor;
      uniform float offset;
      uniform float exponent;
      varying vec3 vWorld;
      void main() {
        float h = normalize(vWorld + vec3(0.0, offset, 0.0)).y;
        gl_FragColor = vec4(mix(bottomColor, topColor, pow(max(h, 0.0), exponent)), 1.0);
      }
    `
  });
  const mesh = new THREE.Mesh(geo, mat);
  mesh.name = 'sky';
  mesh.userData.setColors = (t, b) => {
    if (t) mat.uniforms.topColor.value.set(t);
    if (b) mat.uniforms.bottomColor.value.set(b);
  };
  mesh.userData.uniforms = mat.uniforms;
  return mesh;
}

/* ------------------------------------------------------------------ luces */

/** Una sola luz con sombras por escena, mapa 1024 */
export function createLights({
  sunColor = '#ffe6bf',
  sunIntensity = 1.6,
  hemiSky = '#8fc7ff',
  hemiGround = '#3a4a3a',
  hemiIntensity = 0.55,
  shadows = true,
  area = 40
} = {}) {
  const group = new THREE.Group();
  const hemi = new THREE.HemisphereLight(hemiSky, hemiGround, hemiIntensity);
  group.add(hemi);

  const sun = new THREE.DirectionalLight(sunColor, sunIntensity);
  sun.position.set(18, 26, 12);
  if (shadows) {
    sun.castShadow = true;
    sun.shadow.mapSize.set(1024, 1024);
    sun.shadow.camera.near = 1;
    sun.shadow.camera.far = 90;
    sun.shadow.camera.left = -area;
    sun.shadow.camera.right = area;
    sun.shadow.camera.top = area;
    sun.shadow.camera.bottom = -area;
    sun.shadow.bias = -0.0012;
  }
  group.add(sun);
  group.userData.sun = sun;
  group.userData.hemi = hemi;
  return group;
}

/* ------------------------------------------------------------- personaje */

/** Avatar low-poly estilizado (capsula + cabeza + brazos) para tercera persona */
export function makeAvatar({ color = '#f5b942', accent = '#ffffff', emoji = null } = {}) {
  const group = new THREE.Group();
  const bodyMat = new THREE.MeshStandardMaterial({ color, roughness: 0.6, flatShading: true });
  const body = new THREE.Mesh(new THREE.CapsuleGeometry(0.32, 0.62, 4, 8), bodyMat);
  body.position.y = 0.78;
  body.castShadow = true;
  group.add(body);

  const head = new THREE.Mesh(
    new THREE.IcosahedronGeometry(0.28, 1),
    new THREE.MeshStandardMaterial({ color: accent, roughness: 0.5, flatShading: true })
  );
  head.position.y = 1.45;
  head.castShadow = true;
  group.add(head);

  const armGeo = new THREE.CapsuleGeometry(0.1, 0.4, 3, 6);
  const armL = new THREE.Mesh(armGeo, bodyMat);
  armL.position.set(-0.4, 0.9, 0);
  const armR = new THREE.Mesh(armGeo, bodyMat);
  armR.position.set(0.4, 0.9, 0);
  group.add(armL, armR);
  group.userData.arms = [armL, armR];
  group.userData.head = head;
  group.userData.body = body;

  if (emoji) {
    const canvas = document.createElement('canvas');
    canvas.width = canvas.height = 128;
    const ctx = canvas.getContext('2d');
    ctx.font = '104px serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(emoji, 64, 70);
    const tex = new THREE.CanvasTexture(canvas);
    const face = new THREE.Sprite(new THREE.SpriteMaterial({ map: tex, transparent: true, depthWrite: false }));
    face.scale.set(0.5, 0.5, 1);
    face.position.set(0, 1.46, 0.26);
    group.add(face);
  }
  return group;
}

/** Animacion simple del avatar segun su estado (idle/walk/run/jump) */
export function animateAvatar(avatar, t) {
  const state = avatar.userData.state || 'idle';
  const [armL, armR] = avatar.userData.arms || [];
  if (!armL) return;
  const speed = state === 'run' ? 12 : state === 'walk' ? 7 : 2;
  const amp = state === 'run' ? 0.9 : state === 'walk' ? 0.55 : 0.12;
  armL.rotation.x = Math.sin(t * speed) * amp;
  armR.rotation.x = -Math.sin(t * speed) * amp;
  if (state === 'jump') {
    armL.rotation.x = -1.2;
    armR.rotation.x = -1.2;
  }
  if (avatar.userData.head) {
    avatar.userData.head.position.y = 1.45 + Math.sin(t * speed * 0.5) * 0.02;
  }
}
