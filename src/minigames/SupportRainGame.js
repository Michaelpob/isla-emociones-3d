export class SupportRainGame {
  constructor({ host, island, onComplete, onExit }) {
    this.host = host;
    this.island = island;
    this.onComplete = onComplete;
    this.onExit = onExit;
    this.duration = 35;
    this.remaining = this.duration;
    this.score = 0;
    this.target = 12;
    this.running = false;
    this.drops = [];
    this.spawnTimer = 0;
    this.spawnInterval = 0.9;
    this.maxDrops = 6;
  }

  mount() {
    this.root = document.createElement('div');
    this.root.className = 'minigame minigame--rain';
    this.root.innerHTML = `
      <div class="instructions-overlay" data-instructions>
        <section class="instructions-panel rain-instructions">
          <p class="eyebrow">Tristeza</p>
          <h2>Lluvia de Apoyo</h2>
          <p class="instructions-text">Gotas de apoyo caen del cielo. Toca las gotas azules y los corazones antes de que desaparezcan para acumular apoyo.</p>
          <div class="instructions-list">
            <div class="instruction-item"><span class="instruction-icon">💙</span><span>Toca las <strong>gotas azules</strong> para ganar puntos.</span></div>
            <div class="instruction-item"><span class="instruction-icon">❤️</span><span>Toca los <strong>corazones</strong> para ganar el doble.</span></div>
            <div class="instruction-item"><span class="instruction-icon">⛈️</span><span>Evita las gotas <strong>grises</strong> que restan puntos.</span></div>
          </div>
          <div class="instructions-actions">
            <button class="primary-action" type="button" data-start-game>Comenzar</button>
            <button class="secondary-action" type="button" data-exit-game>Volver</button>
          </div>
        </section>
      </div>
      <section class="game-hud rain-hud" style="display:none" data-game-hud>
        <div><p class="eyebrow">Tristeza</p><h2>Lluvia de Apoyo</h2></div>
        <div class="metric-grid">
          <span><strong data-score>0</strong> / ${this.target}</span>
          <span><strong data-time>35</strong>s</span>
        </div>
      </section>
      <div class="rain-zone" data-rain-zone style="display:none"></div>
      <div class="game-prompt" data-prompt style="display:none">Toca las gotas de apoyo</div>
      <button class="icon-button game-exit" type="button" data-exit-x style="display:none">X</button>
    `;
    this.host.appendChild(this.root);
    this.rainZone = this.root.querySelector('[data-rain-zone]');
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
    this.rainZone.style.display = '';
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

  spawnDrop() {
    if (this.drops.length >= this.maxDrops) return;
    const isHeart = Math.random() < 0.25;
    const isBad = !isHeart && Math.random() < 0.2;
    const drop = {
      id: Date.now() + Math.random(),
      x: 10 + Math.random() * 80,
      y: -8,
      speed: 2 + Math.random() * 2,
      type: isHeart ? 'heart' : (isBad ? 'bad' : 'good'),
      element: null
    };
    const el = document.createElement('button');
    el.className = `rain-drop rain-${drop.type}`;
    el.type = 'button';
    el.textContent = isHeart ? '❤️' : (isBad ? '⛈️' : '💙');
    el.addEventListener('pointerdown', (e) => {
      e.preventDefault();
      this.catchDrop(drop);
    });
    this.rainZone.appendChild(el);
    drop.element = el;
    this.drops.push(drop);
  }

  catchDrop(drop) {
    if (drop.caught) return;
    drop.caught = true;
    const points = drop.type === 'heart' ? 2 : (drop.type === 'bad' ? -1 : 1);
    this.score = Math.max(0, this.score + points);
    this.scoreEl.textContent = this.score;
    drop.element.classList.add('caught');
    if (points > 0) {
      this.showFloatingText(drop.x, drop.y, `+${points}`, '#72c264');
    } else {
      this.showFloatingText(drop.x, drop.y, `${points}`, '#e76856');
    }
    setTimeout(() => {
      drop.element?.remove();
      this.drops = this.drops.filter((d) => d.id !== drop.id);
    }, 250);
  }

  showFloatingText(x, y, text, color) {
    const el = document.createElement('div');
    el.className = 'float-text';
    el.textContent = text;
    el.style.left = `${x}%`;
    el.style.top = `${y}%`;
    el.style.color = color;
    this.rainZone.appendChild(el);
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
      this.spawnDrop();
    }

    this.drops.forEach((drop) => {
      if (drop.caught) return;
      drop.y += drop.speed * 60 * delta;
      drop.element.style.left = `${drop.x}%`;
      drop.element.style.top = `${drop.y}%`;
      if (drop.y > 105) {
        drop.element?.remove();
        this.drops = this.drops.filter((d) => d.id !== drop.id);
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
      title: success ? 'Lluvia de Apoyo' : 'Tristeza',
      message: success
        ? 'Recogiste suficiente apoyo. Pedir ayuda es una senial de fortaleza.'
        : 'A veces la tristeza pesa. Esta bien buscar apoyo cuando lo necesites.'
    });
  }
}
