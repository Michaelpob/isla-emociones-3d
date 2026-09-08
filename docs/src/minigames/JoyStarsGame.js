import * as THREE from 'three';

export class JoyStarsGame {
  constructor({ host, island, onComplete, onExit }) {
    this.host = host;
    this.island = island;
    this.onComplete = onComplete;
    this.onExit = onExit;
    this.duration = 30;
    this.target = 6;
    this.score = 0;
    this.remaining = this.duration;
    this.clock = new THREE.Clock();
    this.pointer = new THREE.Vector2();
    this.raycaster = new THREE.Raycaster();
    this.stars = [];
  }

  mount() {
    this.root = document.createElement('div');
    this.root.className = 'minigame minigame--joy';
    this.root.innerHTML = `
      <div class="game-canvas" data-game-canvas></div>
      <section class="game-hud">
        <div>
          <p class="eyebrow">Alegria</p>
          <h2>Destellos en movimiento</h2>
        </div>
        <div class="metric-grid">
          <span><strong data-score>0</strong> / ${this.target}</span>
          <span><strong data-time>${this.duration}</strong>s</span>
        </div>
      </section>
      <div class="game-prompt">Toca los destellos dorados</div>
      <button class="icon-button game-exit" type="button" aria-label="Volver al mapa" title="Volver al mapa">X</button>
    `;
    this.host.appendChild(this.root);
    this.canvasHost = this.root.querySelector('[data-game-canvas]');
    this.scoreEl = this.root.querySelector('[data-score]');
    this.timeEl = this.root.querySelector('[data-time]');
    this.root.querySelector('.game-exit').addEventListener('click', this.onExit);

    this.setupScene();
    this.canvasHost.addEventListener('pointerdown', this.onPointerDown);
    window.addEventListener('resize', this.resize);
    this.resize();
    this.running = true;
    this.animate();
  }

  dispose() {
    this.running = false;
    window.removeEventListener('resize', this.resize);
    this.canvasHost?.removeEventListener('pointerdown', this.onPointerDown);
    this.renderer?.dispose();
    this.root?.remove();
  }

  setupScene() {
    this.renderer = new THREE.WebGLRenderer({
      antialias: true,
      powerPreference: 'high-performance'
    });
    this.renderer.setPixelRatio(this.getPixelRatio());
    this.renderer.setClearColor('#ffe4a3', 1);
    this.renderer.shadowMap.enabled = true;
    this.canvasHost.appendChild(this.renderer.domElement);

    this.scene = new THREE.Scene();
    this.scene.fog = new THREE.Fog('#ffe4a3', 7, 18);
    this.camera = new THREE.PerspectiveCamera(45, 1, 0.1, 80);
    this.camera.position.set(0, 4.2, 7.2);
    this.camera.lookAt(0, 0.7, 0);

    const hemi = new THREE.HemisphereLight('#fff8d0', '#c77731', 2.1);
    this.scene.add(hemi);

    const sun = new THREE.DirectionalLight('#ffffff', 2.4);
    sun.position.set(-3, 5, 4);
    sun.castShadow = true;
    this.scene.add(sun);

    const base = new THREE.Mesh(
      new THREE.CylinderGeometry(2.25, 2.5, 0.55, 10),
      new THREE.MeshStandardMaterial({
        color: this.island.palette.land,
        roughness: 0.75,
        flatShading: true
      })
    );
    base.position.y = -0.12;
    base.receiveShadow = true;
    this.scene.add(base);

    const ring = new THREE.Mesh(
      new THREE.TorusGeometry(2.75, 0.05, 8, 64),
      new THREE.MeshBasicMaterial({ color: '#fff6bd', transparent: true, opacity: 0.58 })
    );
    ring.rotation.x = Math.PI / 2;
    ring.position.y = 0.1;
    this.scene.add(ring);

    for (let i = 0; i < this.target; i += 1) {
      this.spawnStar(i);
    }
  }

  spawnStar(index) {
    const star = new THREE.Group();
    const material = new THREE.MeshStandardMaterial({
      color: '#fff2a6',
      emissive: '#ffb000',
      emissiveIntensity: 0.65,
      roughness: 0.48,
      flatShading: true
    });

    const core = new THREE.Mesh(new THREE.OctahedronGeometry(0.2, 0), material);
    const halo = new THREE.Mesh(
      new THREE.TorusGeometry(0.28, 0.018, 6, 18),
      new THREE.MeshBasicMaterial({ color: '#ffffff', transparent: true, opacity: 0.7 })
    );
    const hitArea = new THREE.Mesh(
      new THREE.SphereGeometry(0.48, 10, 10),
      new THREE.MeshBasicMaterial({
        transparent: true,
        opacity: 0,
        depthWrite: false
      })
    );
    halo.rotation.x = Math.PI / 2;
    star.add(core, halo, hitArea);

    const angle = (index / this.target) * Math.PI * 2;
    const radius = 0.75 + (index % 4) * 0.34;
    star.position.set(Math.cos(angle) * radius, 0.58 + (index % 3) * 0.24, Math.sin(angle) * radius);
    star.userData = {
      baseAngle: angle,
      radius,
      phase: index * 1.37,
      radiusWobble: 0.08 + (index % 3) * 0.045,
      speed: 0.65 + (index % 5) * 0.14,
      bob: 1.8 + (index % 4) * 0.32,
      collected: false
    };
    star.traverse((child) => {
      if (child.isMesh) {
        child.castShadow = true;
        child.userData.star = star;
      }
    });
    this.stars.push(star);
    this.scene.add(star);
  }

  onPointerDown = (event) => {
    const rect = this.renderer.domElement.getBoundingClientRect();
    this.pointer.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    this.pointer.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
    this.raycaster.setFromCamera(this.pointer, this.camera);
    const hits = this.raycaster.intersectObjects(this.stars, true);
    const hit = hits.find((item) => item.object.userData.star && !item.object.userData.star.userData.collected);
    const star = hit?.object.userData.star ?? this.findNearbyStar(event.clientX, event.clientY, rect);
    if (!star) return;

    this.collectStar(star);
  };

  findNearbyStar(clientX, clientY, rect) {
    let best = null;
    let bestDistance = 112;
    const projected = new THREE.Vector3();
    this.stars.forEach((star) => {
      if (star.userData.collected) return;
      projected.copy(star.position).project(this.camera);
      const x = rect.left + ((projected.x + 1) / 2) * rect.width;
      const y = rect.top + ((1 - projected.y) / 2) * rect.height;
      const distance = Math.hypot(clientX - x, clientY - y);
      if (distance < bestDistance) {
        best = star;
        bestDistance = distance;
      }
    });
    return best;
  }

  collectStar(star) {
    star.userData.collected = true;
    star.visible = false;
    this.score += 1;
    this.scoreEl.textContent = this.score;
    this.root.classList.add('pulse');
    window.setTimeout(() => this.root?.classList.remove('pulse'), 160);

    if (this.score >= this.target) {
      this.finish(true);
    }
  }

  finish(success) {
    if (!this.running) return;
    this.running = false;
    this.onComplete({
      success,
      score: this.score,
      target: this.target,
      islandId: this.island.id,
      title: success ? 'Alegria completada' : 'Buen intento',
      message: success
        ? 'La alegria tambien crece cuando la compartes y notas los pequenos momentos luminosos.'
        : 'Cada destello cuenta. Puedes volver cuando quieras y seguir practicando.'
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
    if (!this.running) return;
    const delta = Math.min(this.clock.getDelta(), 0.033);
    const elapsed = this.clock.elapsedTime;
    this.remaining = Math.max(0, this.duration - elapsed);
    this.timeEl.textContent = Math.ceil(this.remaining);

    this.stars.forEach((star) => {
      if (star.userData.collected) return;
      const angle = star.userData.baseAngle + elapsed * star.userData.speed;
      const radius = star.userData.radius + Math.sin(elapsed * 1.15 + star.userData.phase) * star.userData.radiusWobble;
      star.position.x = Math.cos(angle) * radius + Math.sin(elapsed * 0.7 + star.userData.phase) * 0.14;
      star.position.z = Math.sin(angle * 0.93) * radius + Math.cos(elapsed * 0.52 + star.userData.phase) * 0.12;
      star.position.y = 0.74 + Math.sin(elapsed * star.userData.bob + star.userData.baseAngle) * 0.22;
      star.rotation.y += delta * 2.2;
      star.rotation.x += delta * 0.8;
    });

    this.camera.position.x += (Math.sin(elapsed * 0.25) * 0.35 - this.camera.position.x) * (1 - Math.exp(-delta * 3));
    this.camera.lookAt(0, 0.7, 0);
    this.renderer.render(this.scene, this.camera);

    if (this.remaining <= 0) {
      this.finish(this.score >= this.target);
      return;
    }
    requestAnimationFrame(this.animate);
  };

  getPixelRatio() {
    const coarsePointer = window.matchMedia('(pointer: coarse)').matches;
    return Math.min(window.devicePixelRatio || 1, coarsePointer ? 1.25 : 1.5);
  }
}
