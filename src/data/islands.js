export const islands = [
  {
    id: 'anger',
    name: 'Enojo',
    displayName: 'Isla del Enojo',
    subtitle: 'Respira y controla la presion del volcan.',
    palette: {
      land: '#e76856',
      accent: '#b92d32',
      foliage: '#ffb15c',
      glow: '#ff765f',
      ui: '#c0392b'
    },
    position: [0, 0, 0],
    radius: 1.8,
    height: 0.55,
    minigame: 'volcano-control'
  }
];

export const allIslands = [
  {
    id: 'joy',
    name: 'Alegria',
    displayName: 'Isla de la Alegria',
    subtitle: 'Recolecta destellos antes de que termine el tiempo.',
    palette: { land: '#f6c85f', accent: '#ff8a3d', foliage: '#72c264', glow: '#ffd85a', ui: '#f59f00' },
    position: [-4.5, 0, -1.2], radius: 1.45, height: 0.42, minigame: 'joy-stars'
  },
  {
    id: 'anger',
    name: 'Enojo',
    displayName: 'Isla del Enojo',
    subtitle: 'Respira y controla la presion del volcan.',
    palette: { land: '#e76856', accent: '#b92d32', foliage: '#ffb15c', glow: '#ff765f', ui: '#c0392b' },
    position: [1.7, 0, -1.6], radius: 1.3, height: 0.48, minigame: 'volcano-control'
  },
  {
    id: 'sadness',
    name: 'Tristeza',
    displayName: 'Isla de la Tristeza',
    subtitle: 'Une apoyos que ayudan a atravesar un dia gris.',
    palette: { land: '#7db8d6', accent: '#4f7ba8', foliage: '#8cc6d1', glow: '#b7e4f5', ui: '#3178a8' },
    position: [-1.8, 0, 2.1], radius: 1.25, height: 0.34, minigame: 'coming-soon'
  },
  {
    id: 'fear',
    name: 'Miedo',
    displayName: 'Isla del Miedo',
    subtitle: 'Ilumina el camino y descubre lo que habia en la sombra.',
    palette: { land: '#6c5a94', accent: '#403a67', foliage: '#4fb0a1', glow: '#b6a7ff', ui: '#5947a5' },
    position: [4.35, 0, 1.6], radius: 1.32, height: 0.38, minigame: 'coming-soon'
  },
  {
    id: 'surprise',
    name: 'Sorpresa',
    displayName: 'Isla de la Sorpresa',
    subtitle: 'Atrapa objetos que aparecen de pronto.',
    palette: { land: '#7ed279', accent: '#28a58c', foliage: '#f3d45b', glow: '#ff7ad9', ui: '#1f9d82' },
    position: [0.8, 0, 3.9], radius: 1.18, height: 0.36, minigame: 'coming-soon'
  }
];

export const minigameLabels = {
  'joy-stars': 'Destellos en movimiento',
  'volcano-control': 'Control del Volcan',
  'coming-soon': 'Prototipo listo para ampliar'
};
