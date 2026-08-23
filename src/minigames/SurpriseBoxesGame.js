export class SurpriseBoxesGame {
  constructor({ host, island, onComplete, onExit }) {
    this.host = host;
    this.island = island;
    this.onComplete = onComplete;
    this.onExit = onExit;
    this.duration = 30;
    this.remaining = this.duration;
    this.score = 0;
    this.target = 8;
    this.running = false;
    this.boxes = [];
    this.spawnTimer = 0;
    this.spawnInterval = 1.0;
    this.maxBoxes = 5;
  }

  mount() {
    this.root = document.createElement('div');
    this.root.className = 'minigame minigame--surprise';
    this.root.innerHTML = `
      <div class="instructions-overlay" data-instructions>
        <section class="instructions-panel surprise-instructions">
          <p class="eyebrow">Sorpresa</p>
          <h2>Cajas Sorpresa</h2>
          <p class="instructions-text">Cajas misteriosas aparecen y desaparecen. Toca las doradas para ganar puntos, evita las oscuras.</p>
          <div class="instructions-list">
            <div class="instruction-item"><span class="instruction-icon">🎁</span><span>Toca las <strong>cajas doradas</strong> para ganar puntos.</span></div>
            <div class="instruction-item"><span class="instruction-icon">🖤</span><span>Evita las <strong>cajas oscuras</strong> que restan puntos.</span></div>
            <div class="instruction-item"><span class="instruction-icon">⭐</span><span>Las <strong>estrellas</strong> dan el triple de puntos.</span></div>
          </div>
          <div class="instructions-actions">
            <button class="primary-action" type="button" data-start-game>Comenzar</button>
            <button class="secondary-action" type="button" data-exit-game>Volver</button>
          </div>
        </section>
      </div>
      <section class="game-hud surprise-hud" style="display:none" data-game-hud>
        <div><p class="eyebrow">Sorpresa</p><h2>Cajas Sorpresa</h2></div>
        <div class="metric-grid">
          <span><strong data-score>0</strong> / ${this.target}</span>
          <span><strong data-time>30</strong>s</span>
        </div>
      </section>
      <div class="surprise-zone" data-surprise-zone style="display:none"></div>
      <div class="game-prompt" data-prompt style="display:none">Atrapa las sorpresas</div>
      <button class="icon-button game-exit" type="button" data-exit-x style="display:none">X</button>
    `;
    this.host.appendChild(this.root);
    this.surpriseZone = this.root.querySelector('[data-surprise-zone]');
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
    this.surpriseZone.style.display = '';
    this.promptEl.style.display = '';
    this.root.querySelector('[data-exit-x]').style.display = '';
    this.running = true;
    this.startTime = Date.now();
    this.animate();
  }

  dispose() {
    this.running = false;
    this.root?.remove();
  }

  spawnBox() {
    if (this.boxes.length >= this.maxBoxes) return;
    const rand = Math.random();
    const type = rand < 0.15 ? 'star' : (rand < 0.45 ? 'bad' : 'good');
    const box = {
      id: Date.now() + Math.random(),
      x: 12 + Math.random() * 76,
      y: 10 + Math.random() * 60,
      type,
      life: 2.5 + Math.random() * 2,
      element: null
    };
    const el = document.createElement('button');
    el.className = `surprise-box sb-${type}`;
    el.type = 'button';
    el.textContent = type === 'star' ? '⭐' : (type === 'bad' ? '🖤' : '🎁');
    el.style.left = `${box.x}%`;
    el.style.top = `${box.y}%`;
    el.addEventListener('pointerdown', (e) => {
      e.preventDefault();
      e.stopPropagation();
      this.catchBox(box);
    });
    this.surpriseZone.appendChild(el);
    box.element = el;
    this.boxes.push(box);
  }

  catchBox(box) {
    if (box.caught) return;
    box.caught = true;
    let points = 0;
    if (box.type === 'good') points = 1;
    else if (box.type === 'star') points = 3;
    else points = -2;

    this.score = Math.max(0, this.score + points);
    this.scoreEl.textContent = this.score;
    box.element.classList.add(points >= 0 ? 'caught-good' : 'caught-bad');

    const color = points >= 0 ? '#72c264' : '#e76856';
    const sign = points >= 0 ? '+' : '';
    this.showFloating(box.x, box.y, `${sign}${points}`, color);

    setTimeout(() => {
      box.element?.remove();
      this.boxes = this.boxes.filter((b) => b.id !== box.id);
    }, 250);
  }

  showFloating(x, y, text, color) {
    const el = document.createElement('div');
    el.className = 'float-text';
    el.textContent = text;
    el.style.left = `${x}%`;
    el.style.top = `${y}%`;
    el.style.color = color;
    this.surpriseZone.appendChild(el);
    setTimeout(() => el.remove(), 600);
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
      this.spawnBox();
    }

    this.boxes.forEach((box) => {
      if (box.caught) return;
      box.life -= delta;
      if (box.life < 1) {
        box.element.style.opacity = 0.3 + Math.sin(Date.now() * 0.015) * 0.4;
        box.element.style.transform = 'scale(0.9)';
      }
      if (box.life <= 0) {
        box.element?.remove();
        this.boxes = this.boxes.filter((b) => b.id !== box.id);
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
      title: success ? 'Cajas Sorpresa' : 'Sorpresa',
      message: success
        ? 'La vida esta llena de sorpresas. Saber recibir lo bueno y soltar lo malo es una habilidad.'
        : 'Las sorpresas no siempre son las que esperamos. Intenta de nuevo para encontrar las buenas.'
    });
  }
}
