export class DarknessLightGame {
  constructor({ host, island, onComplete, onExit }) {
    this.host = host;
    this.island = island;
    this.onComplete = onComplete;
    this.onExit = onExit;
    this.duration = 40;
    this.remaining = this.duration;
    this.score = 0;
    this.target = 8;
    this.running = false;
    this.objects = [];
    this.spawnTimer = 0;
    this.spawnInterval = 2.5;
    this.maxObjects = 4;
    this.found = 0;
  }

  mount() {
    this.root = document.createElement('div');
    this.root.className = 'minigame minigame--darkness';
    this.root.innerHTML = `
      <div class="instructions-overlay" data-instructions>
        <section class="instructions-panel darkness-instructions">
          <p class="eyebrow">Miedo</p>
          <h2>Luz en la Oscuridad</h2>
          <p class="instructions-text">La oscuridad esconde objetos. Usa tu linterna para encontrarlos antes de que desaparezcan.</p>
          <div class="instructions-list">
            <div class="instruction-item"><span class="instruction-icon">🔦</span><span>Mueve la <strong>linterna</strong> por la pantalla para iluminar.</span></div>
            <div class="instruction-item"><span class="instruction-icon">⭐</span><span>Toca los <strong>objetos iluminados</strong> para recolectarlos.</span></div>
            <div class="instruction-item"><span class="instruction-icon">👻</span><span>Evita las <strong>sombras</strong> que quitan tiempo.</span></div>
          </div>
          <div class="instructions-actions">
            <button class="primary-action" type="button" data-start-game>Comenzar</button>
            <button class="secondary-action" type="button" data-exit-game>Volver</button>
          </div>
        </section>
      </div>
      <section class="game-hud darkness-hud" style="display:none" data-game-hud>
        <div><p class="eyebrow">Miedo</p><h2>Luz en la Oscuridad</h2></div>
        <div class="metric-grid">
          <span><strong data-score>0</strong> / ${this.target}</span>
          <span><strong data-time>40</strong>s</span>
        </div>
      </section>
      <div class="darkness-zone" data-darkness-zone style="display:none">
        <div class="darkness-overlay" data-darkness-overlay></div>
        <div class="flashlight" data-flashlight></div>
      </div>
      <div class="game-prompt" data-prompt style="display:none">Busca objetos en la oscuridad</div>
      <button class="icon-button game-exit" type="button" data-exit-x style="display:none">X</button>
    `;
    this.host.appendChild(this.root);
    this.darknessZone = this.root.querySelector('[data-darkness-zone]');
    this.darknessOverlay = this.root.querySelector('[data-darkness-overlay]');
    this.flashlight = this.root.querySelector('[data-flashlight]');
    this.scoreEl = this.root.querySelector('[data-score]');
    this.timeEl = this.root.querySelector('[data-time]');
    this.promptEl = this.root.querySelector('[data-prompt]');
    this.gameHud = this.root.querySelector('[data-game-hud]');

    this.root.querySelector('[data-start-game]').addEventListener('click', () => this.startGame());
    this.root.querySelector('[data-exit-game]').addEventListener('click', this.onExit);
    this.root.querySelector('[data-exit-x]').addEventListener('click', this.onExit);
  }

  startGame() {
    this.root.querySelector('[data-instructions]').remove();
    this.gameHud.style.display = '';
    this.darknessZone.style.display = '';
    this.promptEl.style.display = '';
    this.root.querySelector('[data-exit-x]').style.display = '';
    this.running = true;
    this.startTime = Date.now();

    this.darknessZone.addEventListener('pointermove', this.onMove);
    this.darknessZone.addEventListener('pointerdown', this.onTap);

    this.spawnObject();
    this.animate();
  }

  dispose() {
    this.running = false;
    this.darknessZone?.removeEventListener('pointermove', this.onMove);
    this.darknessZone?.removeEventListener('pointerdown', this.onTap);
    this.root?.remove();
  }

  onMove = (e) => {
    const rect = this.darknessZone.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    this.flashlight.style.left = `${x}%`;
    this.flashlight.style.top = `${y}%`;
    this.darknessOverlay.style.maskImage = `radial-gradient(circle 120px at ${x}% ${y}%, transparent 60%, black 100%)`;
    this.darknessOverlay.style.webkitMaskImage = `radial-gradient(circle 120px at ${x}% ${y}%, transparent 60%, black 100%)`;
  };

  onTap = (e) => {
    const rect = this.darknessZone.getBoundingClientRect();
    const tx = ((e.clientX - rect.left) / rect.width) * 100;
    const ty = ((e.clientY - rect.top) / rect.height) * 100;

    this.objects.forEach((obj) => {
      if (obj.collected) return;
      const dist = Math.hypot(tx - obj.x, ty - obj.y);
      if (dist < 15) {
        this.collectObject(obj);
      }
    });
  };

  spawnObject() {
    if (this.objects.length >= this.maxObjects) return;
    const isBad = Math.random() < 0.25;
    const obj = {
      id: Date.now() + Math.random(),
      x: 15 + Math.random() * 70,
      y: 15 + Math.random() * 60,
      type: isBad ? 'shadow' : 'star',
      life: 4 + Math.random() * 3,
      element: null
    };
    const el = document.createElement('button');
    el.className = `dark-obj dark-${obj.type}`;
    el.type = 'button';
    el.textContent = isBad ? '👻' : '⭐';
    el.style.left = `${obj.x}%`;
    el.style.top = `${obj.y}%`;
    el.addEventListener('pointerdown', (e) => {
      e.preventDefault();
      e.stopPropagation();
      this.collectObject(obj);
    });
    this.darknessZone.appendChild(el);
    obj.element = el;
    this.objects.push(obj);
  }

  collectObject(obj) {
    if (obj.collected) return;
    obj.collected = true;
    if (obj.type === 'star') {
      this.score += 1;
      this.found += 1;
      this.scoreEl.textContent = this.score;
      obj.element.classList.add('collected');
    } else {
      this.remaining = Math.max(0, this.remaining - 3);
      obj.element.classList.add('scared');
    }
    setTimeout(() => {
      obj.element?.remove();
      this.objects = this.objects.filter((o) => o.id !== obj.id);
    }, 300);
  }

  animate = () => {
    if (!this.running) return;
    const now = Date.now();
    const delta = 0.016;
    this.remaining = Math.max(0, this.duration - (now - this.startTime) / 1000);
    this.timeEl.textContent = Math.ceil(this.remaining);

    this.spawnTimer += delta;
    if (this.spawnTimer >= this.spawnInterval) {
      this.spawnTimer = 0;
      this.spawnObject();
    }

    this.objects.forEach((obj) => {
      if (obj.collected) return;
      obj.life -= delta;
      if (obj.life < 1.5) {
        obj.element.style.opacity = 0.3 + Math.sin(Date.now() * 0.01) * 0.3;
      }
      if (obj.life <= 0) {
        obj.element?.remove();
        this.objects = this.objects.filter((o) => o.id !== obj.id);
      }
    });

    if (this.score >= this.target) {
      this.finish(true);
      return;
    }
    if (this.remaining <= 0) {
      this.finish(this.score >= this.target);
      return;
    }
    requestAnimationFrame(this.animate);
  };

  finish(success) {
    if (!this.running) return;
    this.running = false;
    this.onComplete({
      success,
      score: this.score,
      target: this.target,
      islandId: this.island.id,
      title: success ? 'Luz en la Oscuridad' : 'Miedo',
      message: success
        ? 'Encontraste la luz dentro del miedo. El coraje no es ausencia de miedo, sino actuar a pesar de el.'
        : 'El miedo puede paralizarte, pero siempre puedes volver a intentarlo.'
    });
  }
}
