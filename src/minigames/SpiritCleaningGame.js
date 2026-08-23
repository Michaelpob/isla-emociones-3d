export class SpiritCleaningGame {
  constructor({ host, island, onComplete, onExit }) {
    this.host = host;
    this.island = island;
    this.onComplete = onComplete;
    this.onExit = onExit;
    this.duration = 30;
    this.remaining = this.duration;
    this.score = 0;
    this.target = 10;
    this.running = false;
    this.items = [];
    this.spawnTimer = 0;
    this.spawnInterval = 1.2;
    this.maxItems = 5;
    this.correct = 0;
    this.wrong = 0;
  }

  mount() {
    this.root = document.createElement('div');
    this.root.className = 'minigame minigame--cleaning';
    this.root.innerHTML = `
      <div class="instructions-overlay" data-instructions>
        <section class="instructions-panel cleaning-instructions">
          <p class="eyebrow">Desagrado</p>
          <h2>Limpieza Espiritual</h2>
          <p class="instructions-text">Separa lo positivo de lo negativo. Arrastra cada item al lado correcto.</p>
          <div class="instructions-list">
            <div class="instruction-item"><span class="instruction-icon">💚</span><span>Toca los items <strong>verdes</strong> (positivos) para aceptarlos.</span></div>
            <div class="instruction-item"><span class="instruction-icon">💜</span><span>Toca los items <strong>morados</strong> (negativos) para descartarlos.</span></div>
            <div class="instruction-item"><span class="instruction-icon">⏱️</span><span>Cada item tiene tiempo. No dejes que desaparezca.</span></div>
          </div>
          <div class="instructions-actions">
            <button class="primary-action" type="button" data-start-game>Comenzar</button>
            <button class="secondary-action" type="button" data-exit-game>Volver</button>
          </div>
        </section>
      </div>
      <section class="game-hud cleaning-hud" style="display:none" data-game-hud>
        <div><p class="eyebrow">Desagrado</p><h2>Limpieza Espiritual</h2></div>
        <div class="metric-grid">
          <span><strong data-score>0</strong> / ${this.target}</span>
          <span><strong data-time>30</strong>s</span>
        </div>
      </section>
      <div class="cleaning-zone" data-cleaning-zone style="display:none"></div>
      <div class="game-prompt" data-prompt style="display:none">Acepta lo positivo, descarta lo negativo</div>
      <button class="icon-button game-exit" type="button" data-exit-x style="display:none">X</button>
    `;
    this.host.appendChild(this.root);
    this.cleaningZone = this.root.querySelector('[data-cleaning-zone]');
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
    this.cleaningZone.style.display = '';
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

  spawnItem() {
    if (this.items.length >= this.maxItems) return;
    const isPositive = Math.random() < 0.55;
    const emojis = isPositive
      ? ['🌟', '💚', '🌻', '😊', '✨', '🦋']
      : ['💜', '🕸️', '🥀', '😐', '💣', '🪨'];
    const item = {
      id: Date.now() + Math.random(),
      x: 15 + Math.random() * 70,
      y: 15 + Math.random() * 55,
      type: isPositive ? 'positive' : 'negative',
      emoji: emojis[Math.floor(Math.random() * emojis.length)],
      life: 3.5 + Math.random() * 2,
      maxLife: 5.5,
      element: null
    };
    const el = document.createElement('button');
    el.className = `clean-item clean-${item.type}`;
    el.type = 'button';
    el.textContent = item.emoji;
    el.style.left = `${item.x}%`;
    el.style.top = `${item.y}%`;
    el.addEventListener('pointerdown', (e) => {
      e.preventDefault();
      e.stopPropagation();
      this.cleanItem(item);
    });
    this.cleaningZone.appendChild(el);
    item.element = el;
    this.items.push(item);
  }

  cleanItem(item) {
    if (item.cleaned) return;
    item.cleaned = true;
    if (item.type === 'positive') {
      this.score += 1;
      this.correct += 1;
      item.element.classList.add('accepted');
    } else {
      this.score += 1;
      this.wrong += 1;
      item.element.classList.add('discarded');
    }
    this.scoreEl.textContent = this.score;
    setTimeout(() => {
      item.element?.remove();
      this.items = this.items.filter((i) => i.id !== item.id);
    }, 250);
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
      this.spawnItem();
    }

    this.items.forEach((item) => {
      if (item.cleaned) return;
      item.life -= delta;
      if (item.life < 1.5) {
        item.element.style.opacity = 0.3 + Math.sin(Date.now() * 0.012) * 0.4;
      }
      if (item.life <= 0) {
        item.element?.remove();
        this.items = this.items.filter((i) => i.id !== item.id);
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
      title: success ? 'Limpieza Espiritual' : 'Desagrado',
      message: success
        ? 'Supiste distinguir lo bueno de lo malo. Proteger tu energia es importante.'
        : 'A veces es dificil separar lo positivo de lo negativo. Intenta de nuevo con mas calma.'
    });
  }
}
