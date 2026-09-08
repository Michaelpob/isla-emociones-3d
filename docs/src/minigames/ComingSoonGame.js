export class ComingSoonGame {
  constructor({ host, island, onExit }) {
    this.host = host;
    this.island = island;
    this.onExit = onExit;
  }

  mount() {
    this.root = document.createElement('div');
    this.root.className = 'placeholder-game';
    this.root.style.setProperty('--accent', this.island.palette.ui);
    this.root.innerHTML = `
      <section class="placeholder-panel">
        <p class="eyebrow">${this.island.name}</p>
        <h2>${this.island.displayName}</h2>
        <p>${this.island.subtitle}</p>
        <button class="primary-action" type="button">Volver al mapa</button>
      </section>
    `;
    this.root.querySelector('button').addEventListener('click', this.onExit);
    this.host.appendChild(this.root);
  }

  dispose() {
    this.root?.remove();
  }
}
