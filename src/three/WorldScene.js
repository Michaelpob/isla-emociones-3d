import * as THREE from 'three';
import { createIslandMesh, setIslandHover } from './createIslandMesh.js';

export class WorldScene {
  constructor(canvasHost, islands, callbacks) {
    this.canvasHost = canvasHost;
    this.islands = islands;
    this.callbacks = callbacks;
    this.clock = new THREE.Clock();
    this.pointer = new THREE.Vector2();
    this.raycaster = new THREE.Raycaster();
    this.islandGroups = new Map();
    this.interactiveMeshes = [];
    this.waves = [];
    this.clouds = [];
    this.completed = new Set();
    this.keys = {};
    this.playerSpeed = 3.8;
    this.nearIsland = null;
    this.playerColor = '#f59f00';
    this.playerPos = new THREE.Vector3(0, 0.15, 0);
    this.playerTargetRot = 0;
    this.drag = {
      active: false,
      moved: false,
      startX: 0,
      startY: 0,
      yaw: -0.35,
      targetYaw: -0.35,
      pitch: 0.72,
      targetPitch: 0.72,
      distance: 9.8,
      targetDistance: 9.8
    };
    this.cameraTarget = new THREE.Vector3(0, 0.35, 0.7);
    this.cameraFocus = new THREE.Vector3(0, 0.35, 0.7);
    this.focusMode = 'map';
    this.focusIsland = null;
    this.hoveredId = null;
  }

  setPlayerAppearance(color) {
    this.playerColor = color ?? this.playerColor;
    if (this.playerGroup) {
      const body = this.playerGroup.getObjectByName('player-body');
      if (body) body.material.color.set(this.playerColor);
      const ring = this.playerGroup.getObjectByName('player-ring');
      if (ring) ring.material.color.set(this.playerColor);
    }
  }

  mount() {
    this.renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: false,
      powerPreference: 'high-performance'
    });
    this.renderer.setPixelRatio(this.getPixelRatio());
    this.renderer.setClearColor('#88d5eb', 1);
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    this.canvasHost.appendChild(this.renderer.domElement);

    this.scene = new THREE.Scene();
    this.scene.fog = new THREE.Fog('#88d5eb', 8, 23);
    this.camera = new THREE.PerspectiveCamera(42, 1, 0.1, 100);

    this.addLights();
    this.addOcean();
    this.addIslands();
    this.addPlayer();
    this.addAmbientMotion();

    this.renderer.domElement.addEventListener('pointerdown', this.onPointerDown);
    window.addEventListener('pointermove', this.onPointerMove);
    window.addEventListener('pointerup', this.onPointerUp);
    window.addEventListener('keydown', this.onKeyDown);
    window.addEventListener('keyup', this.onKeyUp);
    window.addEventListener('resize', this.resize);

    this.resize();
    this.isRunning = true;
    this.animate();
  }

  dispose() {
    this.isRunning = false;
    this.renderer.domElement.removeEventListener('pointerdown', this.onPointerDown);
    window.removeEventListener('pointermove', this.onPointerMove);
    window.removeEventListener('pointerup', this.onPointerUp);
    window.removeEventListener('keydown', this.onKeyDown);
    window.removeEventListener('keyup', this.onKeyUp);
    window.removeEventListener('resize', this.resize);
    this.renderer.dispose();
    this.canvasHost.replaceChildren();
  }

  setCompleted(completedIds) {
    this.completed = new Set(completedIds);
    this.islandGroups.forEach((group, id) => {
      const badge = group.getObjectByName(`${id}-completion-badge`);
      if (badge) badge.visible = this.completed.has(id);
    });
  }

  focusMap() {
    this.focusMode = 'map';
    this.focusIsland = null;
    this.drag.targetDistance = 9.8;
    this.cameraTarget.set(this.playerPos.x, 0.35, this.playerPos.z);
  }

  focusOnIsland(islandId) {
    const island = this.islands.find((item) => item.id === islandId);
    if (!island) return;
    this.focusMode = 'island';
    this.focusIsland = island;
    this.drag.targetDistance = 4.1;
    this.cameraTarget.set(island.position[0], 0.75, island.position[2]);
  }

  addLights() {
    const hemi = new THREE.HemisphereLight('#fff6d5', '#497b96', 2.2);
    this.scene.add(hemi);
    const sun = new THREE.DirectionalLight('#ffffff', 2.45);
    sun.position.set(-4, 7, 4);
    sun.castShadow = true;
    sun.shadow.mapSize.set(1024, 1024);
    sun.shadow.camera.left = -9;
    sun.shadow.camera.right = 9;
    sun.shadow.camera.top = 9;
    sun.shadow.camera.bottom = -9;
    this.scene.add(sun);
  }

  addOcean() {
    const ocean = new THREE.Mesh(
      new THREE.CircleGeometry(18, 80),
      new THREE.MeshStandardMaterial({ color: '#3caed4', roughness: 0.72, metalness: 0.02 })
    );
    ocean.name = 'ocean';
    ocean.rotation.x = -Math.PI / 2;
    ocean.position.y = -0.08;
    ocean.receiveShadow = true;
    this.scene.add(ocean);

    for (let i = 0; i < 8; i += 1) {
      const wave = new THREE.Mesh(
        new THREE.TorusGeometry(2.1 + i * 1.7, 0.012, 6, 72),
        new THREE.MeshBasicMaterial({ color: i % 2 ? '#b7efff' : '#e5fbff', transparent: true, opacity: 0.18 })
      );
      wave.rotation.x = Math.PI / 2;
      wave.position.y = 0.005;
      wave.userData.waveSpeed = 0.08 + i * 0.015;
      wave.userData.wavePhase = i * 0.7;
      this.scene.add(wave);
      this.waves.push(wave);
    }
  }

  addPlayer() {
    this.playerGroup = new THREE.Group();
    this.playerGroup.name = 'player';

    const body = new THREE.Mesh(
      new THREE.CapsuleGeometry(0.18, 0.35, 6, 10),
      new THREE.MeshStandardMaterial({ color: this.playerColor, roughness: 0.6, flatShading: true })
    );
    body.name = 'player-body';
    body.position.y = 0.35;
    body.castShadow = true;
    this.playerGroup.add(body);

    const head = new THREE.Mesh(
      new THREE.SphereGeometry(0.14, 8, 6),
      new THREE.MeshStandardMaterial({ color: '#ffe4c4', roughness: 0.7, flatShading: true })
    );
    head.name = 'player-head';
    head.position.y = 0.72;
    head.castShadow = true;
    this.playerGroup.add(head);

    const ring = new THREE.Mesh(
      new THREE.TorusGeometry(0.28, 0.015, 8, 24),
      new THREE.MeshBasicMaterial({ color: this.playerColor, transparent: true, opacity: 0.4 })
    );
    ring.name = 'player-ring';
    ring.rotation.x = Math.PI / 2;
    ring.position.y = 0.02;
    this.playerGroup.add(ring);

    const shadow = new THREE.Mesh(
      new THREE.CircleGeometry(0.22, 12),
      new THREE.MeshBasicMaterial({ color: '#000000', transparent: true, opacity: 0.12 })
    );
    shadow.rotation.x = -Math.PI / 2;
    shadow.position.y = 0.01;
    this.playerGroup.add(shadow);

    this.playerGroup.position.copy(this.playerPos);
    this.scene.add(this.playerGroup);
  }

  addIslands() {
    this.islands.forEach((island) => {
      const group = createIslandMesh(island);
      group.traverse((child) => {
        if (child.isMesh) {
          child.castShadow = true;
          child.receiveShadow = true;
          if (child.userData.islandId) {
            this.interactiveMeshes.push(child);
          }
        }
      });
      const badge = new THREE.Mesh(
        new THREE.OctahedronGeometry(0.18, 0),
        new THREE.MeshStandardMaterial({ color: '#fff7a8', emissive: '#ffc247', emissiveIntensity: 0.45, flatShading: true })
      );
      badge.name = `${island.id}-completion-badge`;
      badge.position.set(0.72, 1.18, 0.2);
      badge.visible = false;
      group.add(badge);
      this.scene.add(group);
      this.islandGroups.set(island.id, group);
    });
  }

  addAmbientMotion() {
    const cloudMaterial = new THREE.MeshStandardMaterial({ color: '#ffffff', roughness: 0.9, flatShading: true });
    for (let i = 0; i < 7; i += 1) {
      const cloud = new THREE.Group();
      for (let p = 0; p < 3; p += 1) {
        const puff = new THREE.Mesh(new THREE.DodecahedronGeometry(0.22 + p * 0.04, 0), cloudMaterial);
        puff.position.x = p * 0.28;
        puff.position.y = (p % 2) * 0.08;
        cloud.add(puff);
      }
      cloud.position.set(-7 + i * 2.7, 3.4 + (i % 2) * 0.45, -5.2 - (i % 3) * 0.9);
      cloud.userData.cloudSpeed = 0.05 + i * 0.006;
      cloud.userData.baseY = cloud.position.y;
      cloud.userData.cloudPhase = i * 1.11;
      this.scene.add(cloud);
      this.clouds.push(cloud);
    }
  }

  updatePlayer(delta, elapsed) {
    if (this.focusMode !== 'map') return;

    let dx = 0;
    let dz = 0;
    if (this.keys['w'] || this.keys['arrowup']) dz -= 1;
    if (this.keys['s'] || this.keys['arrowdown']) dz += 1;
    if (this.keys['a'] || this.keys['arrowleft']) dx -= 1;
    if (this.keys['d'] || this.keys['arrowright']) dx += 1;

    if (dx !== 0 || dz !== 0) {
      const len = Math.sqrt(dx * dx + dz * dz);
      dx /= len;
      dz /= len;
      this.playerPos.x += dx * this.playerSpeed * delta;
      this.playerPos.z += dz * this.playerSpeed * delta;
      this.playerTargetRot = Math.atan2(dx, dz);
    }

    const clamp = 7.5;
    this.playerPos.x = THREE.MathUtils.clamp(this.playerPos.x, -clamp, clamp);
    this.playerPos.z = THREE.MathUtils.clamp(this.playerPos.z, -clamp, clamp);

    this.playerGroup.position.x = this.playerPos.x;
    this.playerGroup.position.z = this.playerPos.z;
    this.playerGroup.position.y = 0.15 + Math.sin(elapsed * 2.2) * 0.03;

    const angleDiff = this.playerTargetRot - this.playerGroup.rotation.y;
    const wrapped = ((angleDiff + Math.PI) % (Math.PI * 2)) - Math.PI;
    this.playerGroup.rotation.y += wrapped * Math.min(1, delta * 10);

    const bob = this.playerGroup.getObjectByName('player-body');
    if (bob) bob.position.y = 0.35 + Math.sin(elapsed * 3.5) * 0.02;

    const ring = this.playerGroup.getObjectByName('player-ring');
    if (ring) {
      ring.rotation.z += delta * 0.6;
      ring.material.opacity = 0.3 + Math.sin(elapsed * 2.5) * 0.15;
    }

    let closest = null;
    let closestDist = Infinity;
    for (const island of this.islands) {
      const ip = new THREE.Vector3(...island.position);
      const dist = this.playerPos.distanceTo(ip);
      if (dist < island.radius + 1.2 && dist < closestDist) {
        closest = island;
        closestDist = dist;
      }
    }

    if (closest !== this.nearIsland) {
      this.nearIsland = closest;
      if (this.callbacks.onProximityChange) {
        this.callbacks.onProximityChange(closest);
      }
    }

    if (closest) {
      this.setHoveredId(closest.id);
    } else if (this.hoveredId && !this.nearIsland) {
      this.setHoveredId(null);
    }
  }

  updateCamera(delta) {
    if (this.focusMode === 'map') {
      this.cameraTarget.set(this.playerPos.x, 0.35, this.playerPos.z);
      this.drag.targetYaw += delta * 0.035;
    }

    const focusDamping = 1 - Math.exp(-delta * 4.6);
    const cameraDamping = 1 - Math.exp(-delta * 8.5);
    this.cameraFocus.lerp(this.cameraTarget, focusDamping);
    this.drag.yaw += (this.drag.targetYaw - this.drag.yaw) * cameraDamping;
    this.drag.pitch += (this.drag.targetPitch - this.drag.pitch) * cameraDamping;
    this.drag.distance += (this.drag.targetDistance - this.drag.distance) * cameraDamping;

    const pitch = THREE.MathUtils.clamp(this.drag.pitch, 0.46, 1.08);
    const distance = this.drag.distance;
    const x = this.cameraFocus.x + Math.sin(this.drag.yaw) * Math.cos(pitch) * distance;
    const z = this.cameraFocus.z + Math.cos(this.drag.yaw) * Math.cos(pitch) * distance;
    const y = this.cameraFocus.y + Math.sin(pitch) * distance;
    this.camera.position.set(x, y, z);
    this.camera.lookAt(this.cameraFocus);
  }

  updatePointerFromEvent(event) {
    const rect = this.renderer.domElement.getBoundingClientRect();
    this.pointer.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    this.pointer.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
  }

  pickIsland() {
    this.raycaster.setFromCamera(this.pointer, this.camera);
    const hits = this.raycaster.intersectObjects(this.interactiveMeshes, true);
    const hit = hits.find((item) => item.object.userData.islandId);
    return hit?.object.userData.islandId ?? null;
  }

  onKeyDown = (event) => {
    const key = event.key.toLowerCase();
    this.keys[key] = true;

    if ((key === 'e' || key === ' ') && this.nearIsland && this.focusMode === 'map') {
      event.preventDefault();
      this.callbacks.onIslandSelected(this.nearIsland.id);
    }
  };

  onKeyUp = (event) => {
    this.keys[event.key.toLowerCase()] = false;
  };

  onPointerDown = (event) => {
    this.drag.active = true;
    this.drag.moved = false;
    this.drag.startX = event.clientX;
    this.drag.startY = event.clientY;
    this.updatePointerFromEvent(event);
  };

  onPointerMove = (event) => {
    if (this.drag.active) {
      const dx = event.clientX - this.drag.startX;
      const dy = event.clientY - this.drag.startY;
      if (Math.abs(dx) + Math.abs(dy) > 5) this.drag.moved = true;
      this.drag.targetYaw -= dx * 0.0048;
      this.drag.targetPitch += dy * 0.0024;
      this.drag.targetPitch = THREE.MathUtils.clamp(this.drag.targetPitch, 0.46, 1.08);
      this.drag.startX = event.clientX;
      this.drag.startY = event.clientY;
    }
    this.updatePointerFromEvent(event);
    const hoveredId = this.pickIsland();
    this.setHoveredId(hoveredId);
  };

  onPointerUp = (event) => {
    if (!this.drag.active) return;
    this.updatePointerFromEvent(event);
    const islandId = this.pickIsland();
    if (!this.drag.moved && islandId && this.focusMode === 'map') {
      this.callbacks.onIslandSelected(islandId);
    }
    this.drag.active = false;
  };

  setHoveredId(id) {
    if (this.hoveredId === id) return;
    if (this.hoveredId && this.islandGroups.has(this.hoveredId)) {
      setIslandHover(this.islandGroups.get(this.hoveredId), false);
    }
    this.hoveredId = id;
    if (this.hoveredId && this.islandGroups.has(this.hoveredId)) {
      setIslandHover(this.islandGroups.get(this.hoveredId), true);
    }
    this.renderer.domElement.style.cursor = id && this.focusMode === 'map' ? 'pointer' : 'grab';
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
    if (!this.isRunning) return;
    const delta = Math.min(this.clock.getDelta(), 0.033);
    const elapsed = this.clock.elapsedTime;
    const soft = 1 - Math.exp(-delta * 9);

    this.updatePlayer(delta, elapsed);
    this.updateCamera(delta);

    this.waves.forEach((wave) => {
      wave.rotation.z += wave.userData.waveSpeed * delta;
      wave.position.y = 0.005 + Math.sin(elapsed * 0.7 + wave.userData.wavePhase) * 0.006;
    });
    this.clouds.forEach((cloud) => {
      cloud.position.x += cloud.userData.cloudSpeed * delta;
      cloud.position.y = cloud.userData.baseY + Math.sin(elapsed * 0.38 + cloud.userData.cloudPhase) * 0.045;
      if (cloud.position.x > 9) cloud.position.x = -9;
    });
    this.islandGroups.forEach((group, id) => {
      const phase = group.userData.floatPhase;
      group.position.y = Math.sin(elapsed * 0.48 + phase) * 0.026 + Math.sin(elapsed * 0.91 + phase * 0.4) * 0.01;
      group.scale.setScalar(group.scale.x + ((group.userData.hoverTarget ?? 1) - group.scale.x) * soft);
      const badge = group.getObjectByName(`${id}-completion-badge`);
      if (badge) {
        badge.rotation.y += delta * 1.8;
        badge.position.y = 1.18 + Math.sin(elapsed * 2.2) * 0.06;
      }
      const ring = group.getObjectByName(`${id}-selection-ring`);
      if (ring) {
        ring.rotation.z += delta * 0.45;
        ring.material.opacity += ((ring.userData.targetOpacity ?? 0) - ring.material.opacity) * soft;
      }
    });

    this.renderer.render(this.scene, this.camera);
    requestAnimationFrame(this.animate);
  };

  getPixelRatio() {
    const coarsePointer = window.matchMedia('(pointer: coarse)').matches;
    return Math.min(window.devicePixelRatio || 1, coarsePointer ? 1.25 : 1.5);
  }
}
