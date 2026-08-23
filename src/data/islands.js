export const islands = [
  {
    id: 'joy',
    name: 'Alegria',
    displayName: 'Isla de la Alegria',
    emoji: '🌈',
    subtitle: 'Recolecta destellos de felicidad.',
    palette: {
      land: '#f6c85f',
      accent: '#ff8a3d',
      foliage: '#72c264',
      glow: '#ffd85a',
      ui: '#f59f00'
    },
    position: [-3.5, 0, -3],
    radius: 1.3,
    height: 0.4,
    minigame: 'joy-stars'
  },
  {
    id: 'sadness',
    name: 'Tristeza',
    displayName: 'Isla de la Tristeza',
    emoji: '🌧️',
    subtitle: 'Recoge gotas de apoyo antes de que desaparezcan.',
    palette: {
      land: '#7db8d6',
      accent: '#4f7ba8',
      foliage: '#8cc6d1',
      glow: '#b7e4f5',
      ui: '#3178a8'
    },
    position: [0, 0, -4.5],
    radius: 1.25,
    height: 0.34,
    minigame: 'support-rain'
  },
  {
    id: 'anger',
    name: 'Enojo',
    displayName: 'Isla del Enojo',
    emoji: '🔥',
    subtitle: 'Respira y controla la presion del volcan.',
    palette: {
      land: '#e76856',
      accent: '#b92d32',
      foliage: '#ffb15c',
      glow: '#ff765f',
      ui: '#c0392b'
    },
    position: [3.5, 0, -3],
    radius: 1.4,
    height: 0.48,
    minigame: 'volcano-control'
  },
  {
    id: 'fear',
    name: 'Miedo',
    displayName: 'Isla del Miedo',
    emoji: '🌑',
    subtitle: 'Ilumina el camino y encuentra objetos ocultos.',
    palette: {
      land: '#6c5a94',
      accent: '#403a67',
      foliage: '#4fb0a1',
      glow: '#b6a7ff',
      ui: '#5947a5'
    },
    position: [-3.5, 0, 2],
    radius: 1.3,
    height: 0.38,
    minigame: 'darkness-light'
  },
  {
    id: 'disgust',
    name: 'Desagrado',
    displayName: 'Isla del Desagrado',
    emoji: '💚',
    subtitle: 'Separa lo positivo de lo negativo.',
    palette: {
      land: '#6ab86a',
      accent: '#3a8a3a',
      foliage: '#a8d86e',
      glow: '#8ce88c',
      ui: '#2e8b2e'
    },
    position: [0, 0, 3.5],
    radius: 1.2,
    height: 0.36,
    minigame: 'spirit-cleaning'
  },
  {
    id: 'surprise',
    name: 'Sorpresa',
    displayName: 'Isla de la Sorpresa',
    emoji: '🎆',
    subtitle: 'Atrapa las cajas sorpresa que aparecen.',
    palette: {
      land: '#e8a0d0',
      accent: '#c060a0',
      foliage: '#f3d45b',
      glow: '#ff7ad9',
      ui: '#b050a0'
    },
    position: [3.5, 0, 2],
    radius: 1.18,
    height: 0.36,
    minigame: 'surprise-boxes'
  }
];

export const minigameLabels = {
  'joy-stars': 'Destellos en movimiento',
  'support-rain': 'Lluvia de Apoyo',
  'volcano-control': 'Control del Volcan',
  'darkness-light': 'Luz en la Oscuridad',
  'spirit-cleaning': 'Limpieza Espiritual',
  'surprise-boxes': 'Cajas Sorpresa',
  'coming-soon': 'Prototipo listo para ampliar'
};
