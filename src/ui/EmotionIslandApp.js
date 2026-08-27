import { islands, minigameLabels } from '../data/islands.js';
import { WorldScene } from '../three/WorldScene.js';
import { minigameRegistry } from '../minigames/index.js';
import { getPlayer, savePlayer, hasPlayer, avatars, favoriteColors } from '../data/player.js';

export class EmotionIslandApp {
  constructor(root) {
    this.root = root;
    this.state = 'start';
    this.completed = new Set(JSON.parse(window.localStorage.getItem('emotion-islands-progress') ?? '[]'));
    this.currentMinigame = null;
    this.player = getPlayer();
  }

  start() {
    this.root.innerHTML = `
      <main class="shell">
        <div class="scene-host" data-scene-host></div>
        <div class="overlay-root" data-overlay-root></div>
      </main>
    `;
    this.sceneHost = this.root.querySelector('[data-scene-host]');
    this.overlayRoot = this.root.querySelector('[data-overlay-root]');
    this.world = new WorldScene(this.sceneHost, islands, {
      onIslandSelected: (id) => this.selectIsland(id),
      onProximityChange: (island) => this.onProximityChange(island)
    });
    this.world.mount();
    this.world.setCompleted(this.completed);
    if (this.player?.favoriteColor) {
      this.world.setPlayerAppearance(this.player.favoriteColor);
    }
    this.showStart();
  }

  showStart() {
    this.state = 'start';
    this.world.focusMap();
    this.player = getPlayer();

    if (this.player) {
      this.overlayRoot.innerHTML = `
        <section class="start-screen">
          <div class="brand-mark">${this.player.avatar}</div>
          <h1>Hola, ${this.player.name}</h1>
          <p>Explora un archipielago 3D y completa retos breves sobre lo que sentimos.</p>
          <button class="primary-action" type="button" data-start>Comenzar</button>
          <button class="text-action" type="button" data-edit-profile>Mi perfil</button>
        </section>
      `;
      this.overlayRoot.querySelector('[data-start]').addEventListener('click', () => this.showMap());
      this.overlayRoot.querySelector('[data-edit-profile]').addEventListener('click', () => this.showProfile(true));
    } else {
      this.overlayRoot.innerHTML = `
        <section class="start-screen">
          <div class="brand-mark">IE</div>
          <h1>Isla de las Emociones</h1>
          <p>Explora un archipielago 3D y completa retos breves sobre lo que sentimos.</p>
          <button class="primary-action" type="button" data-create-profile>Crear mi perfil</button>
        </section>
      `;
      this.overlayRoot.querySelector('[data-create-profile]').addEventListener('click', () => this.showProfile(false));
    }
  }

  showProfile(isEditing) {
    this.state = 'profile';
    this.world.focusMap();
    const current = getPlayer();
    const selectedAvatar = current?.avatar ?? avatars[0];
    const selectedColor = current?.favoriteColor ?? favoriteColors[0].value;
    const nameValue = current?.name ?? '';

    this.overlayRoot.innerHTML = `
      <section class="profile-screen">
        <h2>${isEditing ? 'Mi perfil' : 'Crea tu perfil'}</h2>
        <p>${isEditing ? 'Actualiza tu informacion personal.' : 'Cuentanos quien eres para personalizar tu experiencia.'}</p>

        <label class="profile-label" for="player-name">Tu nombre</label>
        <input class="profile-input" id="player-name" type="text" placeholder="Escribe tu nombre..." maxlength="20" value="${nameValue}" />

        <label class="profile-label">Elige tu avatar</label>
        <div class="avatar-grid" data-avatar-grid>
          ${avatars.map((a) => `
            <button class="avatar-option ${a === selectedAvatar ? 'selected' : ''}" type="button" data-avatar="${a}">${a}</button>
          `).join('')}
        </div>

        <label class="profile-label">Tu color favorito</label>
        <div class="color-grid" data-color-grid>
          ${favoriteColors.map((c) => `
            <button class="color-option ${c.value === selectedColor ? 'selected' : ''}" type="button" data-color="${c.value}" style="--swatch:${c.value}" title="${c.name}">
              <span class="color-swatch"></span>
              <span class="color-name">${c.name}</span>
            </button>
          `).join('')}
        </div>

        <div class="profile-actions">
          <button class="primary-action" type="button" data-save-profile>${isEditing ? 'Guardar' : 'Comenzar'}</button>
          ${isEditing ? '<button class="secondary-action" type="button" data-cancel-profile>Cancelar</button>' : ''}
        </div>
      </section>
    `;

    const nameInput = this.overlayRoot.querySelector('#player-name');
    const avatarGrid = this.overlayRoot.querySelector('[data-avatar-grid]');
    const colorGrid = this.overlayRoot.querySelector('[data-color-grid]');

    avatarGrid.addEventListener('click', (e) => {
      const btn = e.target.closest('[data-avatar]');
      if (!btn) return;
      avatarGrid.querySelectorAll('.avatar-option').forEach((el) => el.classList.remove('selected'));
      btn.classList.add('selected');
    });

    colorGrid.addEventListener('click', (e) => {
      const btn = e.target.closest('[data-color]');
      if (!btn) return;
      colorGrid.querySelectorAll('.color-option').forEach((el) => el.classList.remove('selected'));
      btn.classList.add('selected');
    });

    this.overlayRoot.querySelector('[data-save-profile]').addEventListener('click', () => {
      const name = nameInput.value.trim();
      if (!name) {
        nameInput.classList.add('shake');
        setTimeout(() => nameInput.classList.remove('shake'), 400);
        return;
      }
      const avatar = avatarGrid.querySelector('.avatar-option.selected')?.dataset.avatar ?? avatars[0];
      const color = colorGrid.querySelector('.color-option.selected')?.dataset.color ?? favoriteColors[0].value;
      this.player = { name, avatar, favoriteColor: color };
      savePlayer(this.player);
      if (this.world) this.world.setPlayerAppearance(color);
      this.showMap();
    });

    if (isEditing) {
      this.overlayRoot.querySelector('[data-cancel-profile]').addEventListener('click', () => this.showMap());
    }
  }

  showMap() {
    if (islands.length === 1) {
      this.selectIsland(islands[0].id);
      return;
    }
    this.state = 'map';
    this.world.focusMap();
    this.player = getPlayer();
    const playerLabel = this.player ? `${this.player.avatar} ${this.player.name}` : '';

    this.overlayRoot.innerHTML = `
      <section class="map-hud">
        <div>
          <p class="eyebrow">Mapa principal</p>
          <h2>Elige una isla</h2>
        </div>
        <div class="hud-right">
          ${this.player ? `
            <button class="player-pill" type="button" data-edit-profile style="--pill-color:${this.player.favoriteColor}">
              <span class="pill-avatar">${this.player.avatar}</span>
              <span class="pill-name">${this.player.name}</span>
            </button>
          ` : ''}
          <div class="progress-pill">${this.completed.size}/${islands.length} completadas</div>
        </div>
      </section>
      <div class="touch-controls" data-touch-controls>
        <div class="joystick-zone" data-joystick-zone>
          <div class="joystick-base" data-joystick-base>
            <div class="joystick-stick" data-joystick-stick></div>
          </div>
        </div>
        <button class="action-button" data-action-button type="button">E</button>
      </div>
      <div class="controls-hint">
        <span>W A S D</span> mover &middot; <span>E</span> entrar
      </div>
    `;

    const editBtn = this.overlayRoot.querySelector('[data-edit-profile]');
    if (editBtn) {
      editBtn.addEventListener('click', () => this.showProfile(true));
    }

    this.setupTouchControls();
  }

  setupTouchControls() {
    const joystickZone = this.overlayRoot.querySelector('[data-joystick-zone]');
    const joystickBase = this.overlayRoot.querySelector('[data-joystick-base]');
    const joystickStick = this.overlayRoot.querySelector('[data-joystick-stick]');
    const actionButton = this.overlayRoot.querySelector('[data-action-button]');

    if (!joystickZone || !joystickBase || !joystickStick) return;

    let joystickActive = false;
    let joystickId = null;
    const maxDist = 40;

    const handleJoystickMove = (clientX, clientY) => {
      const rect = joystickBase.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      let dx = clientX - cx;
      let dy = clientY - cy;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist > maxDist) {
        dx = (dx / dist) * maxDist;
        dy = (dy / dist) * maxDist;
      }
      joystickStick.style.transform = `translate(${dx}px, ${dy}px)`;

      const nx = dx / maxDist;
      const ny = dy / maxDist;
      if (this.world) {
        this.world.keys['d'] = nx > 0.2;
        this.world.keys['a'] = nx < -0.2;
        this.world.keys['s'] = ny > 0.2;
        this.world.keys['w'] = ny < -0.2;
      }
    };

    const resetJoystick = () => {
      joystickActive = false;
      joystickId = null;
      joystickStick.style.transform = 'translate(0, 0)';
      if (this.world) {
        this.world.keys['w'] = false;
        this.world.keys['a'] = false;
        this.world.keys['s'] = false;
        this.world.keys['d'] = false;
      }
    };

    joystickZone.addEventListener('pointerdown', (e) => {
      joystickActive = true;
      joystickId = e.pointerId;
      joystickZone.setPointerCapture(e.pointerId);
      handleJoystickMove(e.clientX, e.clientY);
    });

    joystickZone.addEventListener('pointermove', (e) => {
      if (!joystickActive || e.pointerId !== joystickId) return;
      handleJoystickMove(e.clientX, e.clientY);
    });

    joystickZone.addEventListener('pointerup', (e) => {
      if (e.pointerId === joystickId) resetJoystick();
    });

    joystickZone.addEventListener('pointercancel', (e) => {
      if (e.pointerId === joystickId) resetJoystick();
    });

    if (actionButton) {
      actionButton.addEventListener('pointerdown', (e) => {
        e.preventDefault();
        if (this.world && this.world.nearIsland) {
          this.selectIsland(this.world.nearIsland.id);
        }
      });
    }
  }

  onProximityChange(island) {
    if (this.state !== 'map') return;
    let prompt = this.overlayRoot.querySelector('.proximity-prompt');
    if (!island) {
      if (prompt) prompt.remove();
      return;
    }
    if (!prompt) {
      prompt = document.createElement('div');
      prompt.className = 'proximity-prompt';
      this.overlayRoot.appendChild(prompt);
    }
    const completed = this.completed.has(island.id);
    prompt.innerHTML = `
      <strong>${island.displayName}</strong>
      <span>${completed ? 'Volver a jugar' : 'Presiona E para entrar'}</span>
    `;
    prompt.style.setProperty('--accent', island.palette.ui);
  }

  renderIslandButton(island) {
    const completed = this.completed.has(island.id);
    return `
      <button class="island-chip" style="--chip:${island.palette.ui}" data-island-id="${island.id}" type="button">
        <span class="chip-emoji">${island.emoji || ''}</span>
        <span>
          <strong>${island.name}</strong>
          <small>${minigameLabels[island.minigame]}</small>
        </span>
        <em>${completed ? 'Completada' : 'Entrar'}</em>
      </button>
    `;
  }

  selectIsland(id) {
    const island = islands.find((item) => item.id === id);
    if (!island) return;
    this.state = 'island';
    this.world.focusOnIsland(id);
    this.overlayRoot.innerHTML = `
      <section class="island-panel" style="--accent:${island.palette.ui}">
        <p class="eyebrow">${island.name}</p>
        <h2>${island.displayName}</h2>
        <p>${island.subtitle}</p>
        <div class="panel-actions">
          <button class="primary-action" type="button" data-play>Jugar</button>
          <button class="secondary-action" type="button" data-back>Mapa</button>
        </div>
      </section>
    `;
    this.overlayRoot.querySelector('[data-play]').addEventListener('click', () => this.launchMinigame(island));
    this.overlayRoot.querySelector('[data-back]').addEventListener('click', () => this.showMap());
  }

  launchMinigame(island) {
    const Game = minigameRegistry[island.minigame] ?? minigameRegistry['coming-soon'];
    this.state = 'game';
    this.overlayRoot.innerHTML = '';
    this.currentMinigame = new Game({
      host: this.overlayRoot,
      island,
      player: this.player,
      onComplete: (result) => this.showResult(result),
      onExit: () => this.exitMinigame()
    });
    this.currentMinigame.mount();
  }

  exitMinigame() {
    this.currentMinigame?.dispose();
    this.currentMinigame = null;
    this.showMap();
  }

  showResult(result) {
    this.currentMinigame?.dispose();
    this.currentMinigame = null;
    if (result.success) {
      this.completed.add(result.islandId);
      window.localStorage.setItem('emotion-islands-progress', JSON.stringify([...this.completed]));
      this.world.setCompleted(this.completed);
    }

    const playerName = this.player?.name;
    const title = playerName
      ? (result.success ? `${playerName}, completaste ${result.title}` : `${playerName}, ${result.title}`)
      : result.title;

    this.overlayRoot.innerHTML = `
      <section class="result-screen">
        <p class="eyebrow">Resultado</p>
        <h2>${title}</h2>
        <p>${result.message}</p>
        <div class="result-score">${result.score}/${result.target} destellos</div>
        <button class="primary-action" type="button" data-back-map>Volver al mapa</button>
      </section>
    `;
    this.overlayRoot.querySelector('[data-back-map]').addEventListener('click', () => this.showMap());
  }
}
