import * as THREE from 'three';

export class VolcanoControlGame {
  constructor({ host, island, onComplete, onExit }) {
    this.host = host;
    this.island = island;
    this.onComplete = onComplete;
    this.onExit = onExit;
    this.duration = 35;
    this.remaining = this.duration;
    this.pressure = 35;
    this.maxPressure = 100;
    this.naturalIncrease = 5.5;
    this.smoothDecrease = 4.2;
    this.fastPenalty = 25;
    this.running = false;
    this.clock = new THREE.Clock();
    this.levers = [
      { id: 0, value: 0.5, target: 0.3, label: 'Respirar', lastY: 0, velocity: 0, driftDir: 1 },
      { id: 1, value: 0.5, target: 0.7, label: 'Pensar', lastY: 0, velocity: 0, driftDir: -1 },
      { id: 2, value: 0.5, target: 0.4, label: 'Actuar', lastY: 0, velocity: 0, driftDir: 1 },
      { id: 3, value: 0.5, target: 0.6, label: 'Calmar', lastY: 0, velocity: 0, driftDir: -1 }
    ];
    this.dragging = null;
    this.speedThreshold = 1.5;
    this.exploded = false;
    this.rocks = [];
    this.vents = [];
    this.score = 0;
    this.maxRocks = 3;
    this.rockSpawnTimer = 0;
    this.rockSpawnInterval = 1.8;
    this.ventSpawnTimer = 0;
    this.ventSpawnInterval = 3.5;
    this.leverDriftSpeed = 0.08;
  }

  mount() {
    this.root = document.createElement('div');
    this.root.className = 'minigame minigame--volcano';
    this.root.innerHTML = `
      <div class="game-canvas" data-game-canvas></div>
      <section class="game-hud volcano-hud">
        <div>
          <p class="eyebrow">Enojo</p>
          <h2>Control del Volcan</h2>
        </div>
        <div class="metric-grid">
          <span class="pressure-display"><strong data-pressure>35</strong>% presion</span>
          <span><strong data-time>35</strong>s</span>
        </div>
      </section>
      <div class="pressure-bar-wrap" data-pressure-bar-wrap>
        <div class="pressure-bar" data-pressure-bar></div>
        <div class="pressure-zone" data-pressure-zone></div>
        <div class="pressure-marker" data-pressure-marker></div>
      </div>
      <div class="lever-panel" data-lever-panel>
        ${this.levers.map((l) => `
          <div class="lever-col" data-lever-col="${l.id}">
            <div class="lever-track" data-lever-track="${l.id}">
              <div class="lever-fill" data-lever-fill="${l.id}"></div>
              <div class="lever-thumb" data-lever-thumb="${l.id}"></div>
              <div class="lever-target" data-lever-target="${l.id}"></div>
            </div>
            <span class="lever-label">${l.label}</span>
          </div>
        `).join('')}
      </div>
      <div class="action-zone" data-action-zone></div>
      <div class="game-prompt volcano-prompt" data-prompt>Mantén la presion estable</div>
      <button class="icon-button game-exit" type="button" aria-label="Volver al mapa" title="Volver al mapa">X</button>
    `;
    this.host.appendChild(this.root);
    this.canvasHost = this.root.querySelector('[data-game-canvas]');
    this.pressureEl = this.root.querySelector('[data-pressure]');
    this.timeEl = this.root.querySelector('[data-time]');
    this.promptEl = this.root.querySelector('[data-prompt]');
    this.pressureBar = this.root.querySelector('[data-pressure-bar]');
    this.actionZone = this.root.querySelector('[data-action-zone]');
    this.root.querySelector('.game-exit').addEventListener('click', this.onExit);

    this.levers.forEach((l) => {
      const track = this.root.querySelector(`[data-lever-track="${l.id}"]`);
      const thumb = this.root.querySelector(`[data-lever-thumb="${l.id}"]`);
      l.trackEl = track;
      l.thumbEl = thumb;
      l.fillEl = this.root.querySelector(`[data-lever-fill="${l.id}"]`);
      l.targetEl = this.root.querySelector(`[data-lever-target="${l.id}"]`);
      const targetPos = 1 - l.target;
      l.targetEl.style.bottom = `${targetPos * 100}%`;
      l.targetEl.style.display = 'block';
      thumb.addEventListener('pointerdown', (e) => this.startDrag(e, l.id));
      track.addEventListener('pointerdown', (e) => this.startDrag(e, l.id));
    });

    window.addEventListener('pointermove', this.onDragMove);
    window.addEventListener('pointerup', this.onDragEnd);
    window.addEventListener('resize', this.resize);

    this.setupScene();
    this.resize();
    this.running = true;
    this.animate();
  }

  dispose() {
    this.running = false;
    window.removeEventListener('pointermove', this.onDragMove);
    window.removeEventListener('pointerup', this.onDragEnd);
    window.removeEventListener('resize', this.resize);
    this.renderer?.dispose();
    this.root?.remove();
  }

  setupScene() {
    this.renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: 'high-performance' });
    this.renderer.setPixelRatio(this.getPixelRatio());
    this.renderer.setClearColor('#3d1a0a', 1);
    this.renderer.shadowMap.enabled = true;
    this.canvasHost.appendChild(this.renderer.domElement);

    this.scene = new THREE.Scene();
    this.scene.fog = new THREE.Fog('#3d1a0a', 12, 28);
    this.camera = new THREE.PerspectiveCamera(40, 1, 0.1, 80);
    this.camera.position.set(0, 5.5, 9);
    this.camera.lookAt(0, 2.5, 0);

    const hemi = new THREE.HemisphereLight('#ff9944', '#1a0a00', 1.6);
    this.scene.add(hemi);
    const sun = new THREE.DirectionalLight('#ffcc88', 2.2);
    sun.position.set(-3, 8, 5);
    sun.castShadow = true;
    this.scene.add(sun);

    const ground = new THREE.Mesh(
      new THREE.CircleGeometry(10, 32),
      new THREE.MeshStandardMaterial({ color: '#2a1508', roughness: 0.95, flatShading: true })
    );
    ground.rotation.x = -Math.PI / 2;
    ground.position.y = -0.1;
    ground.receiveShadow = true;
    this.scene.add(ground);

    this.volcanoGroup = new THREE.Group();
    const cone = new THREE.Mesh(
      new THREE.ConeGeometry(2.2, 4.5, 12),
      new THREE.MeshStandardMaterial({ color: '#5a3018', roughness: 0.85, flatShading: true })
    );
    cone.position.y = 2.25;
    cone.castShadow = true;
    this.volcanoGroup.add(cone);

    const crater = new THREE.Mesh(
      new THREE.CylinderGeometry(0.6, 0.75, 0.5, 10),
      new THREE.MeshStandardMaterial({ color: '#1a0800', roughness: 0.9, flatShading: true })
    );
    crater.position.y = 4.5;
    this.volcanoGroup.add(crater);

    const lava = new THREE.Mesh(
      new THREE.CircleGeometry(0.55, 10),
      new THREE.MeshStandardMaterial({ color: '#ff3300', emissive: '#ff2200', emissiveIntensity: 0.3, roughness: 0.6 })
    );
    lava.rotation.x = -Math.PI / 2;
    lava.position.y = 4.52;
    this.lavaMesh = lava;
    this.volcanoGroup.add(lava);

    const glow = new THREE.Mesh(
      new THREE.SphereGeometry(0.8, 12, 8),
      new THREE.MeshBasicMaterial({ color: '#ff4400', transparent: true, opacity: 0.15 })
    );
    glow.position.y = 4.6;
    this.glowMesh = glow;
    this.volcanoGroup.add(glow);

    this.scene.add(this.volcanoGroup);

    this.smokeParticles = [];
    for (let i = 0; i < 20; i++) {
      const puff = new THREE.Mesh(
        new THREE.DodecahedronGeometry(0.12 + Math.random() * 0.15, 0),
        new THREE.MeshBasicMaterial({ color: '#888888', transparent: true, opacity: 0 })
      );
      puff.position.set(
        (Math.random() - 0.5) * 0.6,
        4.8 + Math.random() * 0.5,
        (Math.random() - 0.5) * 0.6
      );
      puff.userData = {
        speed: 0.4 + Math.random() * 0.6,
        drift: (Math.random() - 0.5) * 0.3,
        life: Math.random(),
        maxLife: 1.5 + Math.random() * 1.5
      };
      this.scene.add(puff);
      this.smokeParticles.push(puff);
    }
  }

  startDrag(e, leverId) {
    e.preventDefault();
    e.stopPropagation();
    this.dragging = leverId;
    this.levers[leverId].lastY = e.clientY;
    this.levers[leverId].velocity = 0;
    this.root.querySelector(`[data-lever-thumb="${leverId}"]`).setPointerCapture(e.pointerId);
  }

  onDragMove = (e) => {
    if (this.dragging === null) return;
    const lever = this.levers[this.dragging];
    const rect = lever.trackEl.getBoundingClientRect();
    const dy = e.clientY - lever.lastY;
    lever.lastY = e.clientY;
    const trackHeight = rect.height;
    const deltaNorm = -dy / trackHeight;
    lever.value = Math.max(0, Math.min(1, lever.value + deltaNorm));
    lever.velocity = Math.abs(deltaNorm * 60);
    this.updateLeverVisual(lever);
  };

  onDragEnd = () => {
    if (this.dragging !== null) {
      this.levers[this.dragging].velocity = 0;
      this.dragging = null;
    }
  };

  updateLeverVisual(lever) {
    const pos = lever.value * 100;
    lever.thumbEl.style.bottom = `${pos}%`;
    lever.fillEl.style.height = `${pos}%`;
    const distToTarget = Math.abs(lever.value - lever.target);
    if (distToTarget < 0.15) {
      lever.thumbEl.classList.add('in-zone');
      lever.thumbEl.classList.remove('out-zone');
    } else {
      lever.thumbEl.classList.remove('in-zone');
      lever.thumbEl.classList.add('out-zone');
    }
  }

  driftLevers(delta) {
    this.levers.forEach((lever) => {
      if (this.dragging === lever.id) return;
      lever.value += lever.driftDir * this.leverDriftSpeed * delta;
      if (lever.value >= 1 || lever.value <= 0) {
        lever.driftDir *= -1;
      }
      lever.value = Math.max(0, Math.min(1, lever.value));
      this.updateLeverVisual(lever);
    });
  }

  spawnRock() {
    if (this.rocks.length >= this.maxRocks) return;
    const rock = {
      id: Date.now() + Math.random(),
      x: (Math.random() - 0.5) * 5,
      z: (Math.random() - 0.5) * 3 - 1,
      y: 5,
      vy: 0,
      clicked: false,
      element: null
    };
    const el = document.createElement('button');
    el.className = 'lava-rock';
    el.type = 'button';
    el.textContent = '🔥';
    el.addEventListener('pointerdown', (e) => {
      e.preventDefault();
      e.stopPropagation();
      this.clickRock(rock);
    });
    this.actionZone.appendChild(el);
    rock.element = el;
    this.rocks.push(rock);
  }

  clickRock(rock) {
    if (rock.clicked) return;
    rock.clicked = true;
    rock.element.classList.add('caught');
    this.score += 1;
    this.pressure = Math.max(0, this.pressure - 6);
    setTimeout(() => {
      rock.element?.remove();
      this.rocks = this.rocks.filter((r) => r.id !== rock.id);
    }, 200);
  }

  updateRocks(delta) {
    this.rockSpawnTimer += delta;
    if (this.rockSpawnTimer >= this.rockSpawnInterval) {
      this.rockSpawnTimer = 0;
      this.rockSpawnInterval = Math.max(0.8, this.rockSpawnInterval - 0.08);
      this.spawnRock();
    }

    this.rocks.forEach((rock) => {
      if (rock.clicked) return;
      rock.vy += 12 * delta;
      rock.y -= rock.vy * delta;
      const pct = Math.max(0, Math.min(1, 1 - (rock.y / 5)));
      rock.element.style.left = `${50 + rock.x * 6}%`;
      rock.element.style.top = `${10 + pct * 70}%`;

      if (rock.y <= 0 && !rock.clicked) {
        rock.element.classList.add('missed');
        this.pressure += 8;
        setTimeout(() => {
          rock.element?.remove();
          this.rocks = this.rocks.filter((r) => r.id !== rock.id);
        }, 300);
      }
    });
  }

  spawnVent() {
    if (this.vents.length >= 2) return;
    const angle = Math.random() * Math.PI * 2;
    const dist = 1.2 + Math.random() * 0.8;
    const vent = {
      id: Date.now() + Math.random(),
      x: Math.cos(angle) * dist,
      z: Math.sin(angle) * dist,
      life: 3,
      element: null
    };
    const el = document.createElement('button');
    el.className = 'vent-seal';
    el.type = 'button';
    el.textContent = '💨';
    el.style.left = `${50 + vent.x * 10}%`;
    el.style.top = `${15 + vent.z * 5}%`;
    el.addEventListener('pointerdown', (e) => {
      e.preventDefault();
      e.stopPropagation();
      this.sealVent(vent);
    });
    this.actionZone.appendChild(el);
    vent.element = el;
    this.vents.push(vent);
  }

  sealVent(vent) {
    if (vent.sealed) return;
    vent.sealed = true;
    vent.element.classList.add('sealed');
    this.score += 2;
    this.pressure = Math.max(0, this.pressure - 10);
    setTimeout(() => {
      vent.element?.remove();
      this.vents = this.vents.filter((v) => v.id !== vent.id);
    }, 300);
  }

  updateVents(delta) {
    this.ventSpawnTimer += delta;
    if (this.ventSpawnTimer >= this.ventSpawnInterval) {
      this.ventSpawnTimer = 0;
      this.spawnVent();
    }

    this.vents.forEach((vent) => {
      if (vent.sealed) return;
      vent.life -= delta;
      const pulse = 0.7 + Math.sin(Date.now() * 0.008) * 0.3;
      vent.element.style.opacity = vent.life < 1 ? pulse : 1;

      if (vent.life <= 0) {
        vent.element.classList.add('missed');
        this.pressure += 10;
        setTimeout(() => {
          vent.element?.remove();
          this.vents = this.vents.filter((v) => v.id !== vent.id);
        }, 300);
      }
    });
  }

  updatePressure(delta) {
    let decrease = 0;
    let fastMovement = false;

    this.levers.forEach((lever) => {
      const distToTarget = Math.abs(lever.value - lever.target);
      if (distToTarget < 0.15) {
        decrease += this.smoothDecrease;
      }
      if (lever.velocity > this.speedThreshold) {
        fastMovement = true;
      }
    });

    this.pressure += this.naturalIncrease * delta;
    this.pressure -= decrease * delta;

    if (fastMovement) {
      this.pressure += this.fastPenalty * delta;
    }

    this.pressure = Math.max(0, Math.min(this.maxPressure, this.pressure));

    const pct = this.pressure / this.maxPressure;
    this.pressureBar.style.width = `${pct * 100}%`;

    if (pct < 0.5) {
      this.pressureBar.style.background = 'linear-gradient(0deg, #72c264, #a8d86e)';
    } else if (pct < 0.75) {
      this.pressureBar.style.background = 'linear-gradient(0deg, #f59f00, #ffcc00)';
    } else {
      this.pressureBar.style.background = 'linear-gradient(0deg, #e76856, #ff3300)';
    }

    this.pressureEl.textContent = Math.round(this.pressure);

    if (fastMovement) {
      this.promptEl.textContent = '¡Despacio! Muy brusco';
      this.promptEl.classList.add('danger');
    } else if (pct > 0.8) {
      this.promptEl.textContent = '¡Peligro! Presion alta';
      this.promptEl.classList.add('danger');
    } else if (pct < 0.3) {
      this.promptEl.textContent = '¡Bien! Control total';
      this.promptEl.classList.remove('danger');
    } else {
      this.promptEl.textContent = 'Controla las palancas y apaga los focos';
      this.promptEl.classList.remove('danger');
    }

    this.updateVolcanoVisual(pct, delta);

    if (this.pressure >= this.maxPressure) {
      this.explode();
    }
  }

  updateVolcanoVisual(pct, delta) {
    const intensity = pct;
    this.lavaMesh.material.emissiveIntensity = 0.3 + intensity * 1.5;
    this.lavaMesh.material.color.setRGB(1, 0.2 - intensity * 0.15, 0);
    this.glowMesh.material.opacity = 0.05 + intensity * 0.4;
    this.glowMesh.scale.setScalar(1 + intensity * 0.8);

    const shake = intensity > 0.7 ? Math.sin(Date.now() * 0.02) * intensity * 0.04 : 0;
    this.volcanoGroup.position.x = shake;
    this.volcanoGroup.position.z = shake * 0.7;

    this.smokeParticles.forEach((puff) => {
      if (intensity > 0.2) {
        puff.material.opacity = Math.min(intensity * 0.8, puff.userData.life / puff.userData.maxLife * intensity);
        puff.position.y += puff.userData.speed * delta * (0.5 + intensity);
        puff.position.x += puff.userData.drift * delta;
        puff.userData.life += delta;
        const scale = 1 + puff.userData.life * intensity * 1.5;
        puff.scale.setScalar(scale);
        if (puff.userData.life > puff.userData.maxLife || puff.position.y > 8) {
          puff.position.set(
            (Math.random() - 0.5) * 0.6,
            4.8,
            (Math.random() - 0.5) * 0.6
          );
          puff.userData.life = 0;
        }
      } else {
        puff.material.opacity = 0;
      }
    });
  }

  explode() {
    if (this.exploded) return;
    this.exploded = true;
    this.running = false;

    this.volcanoGroup.traverse((child) => {
      if (child.isMesh && child !== this.glowMesh) {
        child.material.color.set('#ff2200');
        child.material.emissive = '#ff1100';
        child.material.emissiveIntensity = 0.8;
      }
    });

    for (let i = 0; i < 30; i++) {
      const rock = new THREE.Mesh(
        new THREE.DodecahedronGeometry(0.08 + Math.random() * 0.12, 0),
        new THREE.MeshStandardMaterial({ color: '#ff4400', emissive: '#ff2200', emissiveIntensity: 1, flatShading: true })
      );
      rock.position.set(
        (Math.random() - 0.5) * 0.4,
        4.8,
        (Math.random() - 0.5) * 0.4
      );
      rock.userData.vel = new THREE.Vector3(
        (Math.random() - 0.5) * 5,
        4 + Math.random() * 6,
        (Math.random() - 0.5) * 5
      );
      rock.userData.life = 0;
      this.scene.add(rock);
      this.smokeParticles.push(rock);
    }

    this.root.classList.add('screen-shake');
    setTimeout(() => this.finish(false), 1200);
  }

  finish(success) {
    if (!this.running && !this.exploded) return;
    this.running = false;
    this.onComplete({
      success,
      score: this.score,
      target: this.duration,
      islandId: this.island.id,
      title: success ? 'Control del Volcan' : 'El volcan exploto',
      message: success
        ? 'Mantuviste la calma bajo presion extrema. El autocontrol es poder.'
        : 'La presion te gano. Respira y vuelve con mas calma.'
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

    this.driftLevers(delta);
    this.updatePressure(delta);
    this.updateRocks(delta);
    this.updateVents(delta);

    this.remaining = Math.max(0, this.remaining - delta);
    this.timeEl.textContent = Math.ceil(this.remaining);

    if (this.remaining <= 0) {
      this.finish(true);
      return;
    }

    this.renderer.render(this.scene, this.camera);
    requestAnimationFrame(this.animate);
  };

  getPixelRatio() {
    const coarsePointer = window.matchMedia('(pointer: coarse)').matches;
    return Math.min(window.devicePixelRatio || 1, coarsePointer ? 1.25 : 1.5);
  }
}
