const STORAGE_KEY = 'emotion-islands-player';

export const avatars = ['🧒', '👧', '🦊', '🐱', '🐶', '🌟', '🌊', '🔥', '🌈', '🦋', '🐸', '🦉'];

export const favoriteColors = [
  { name: 'Dorado', value: '#f59f00' },
  { name: 'Turquesa', value: '#1f9d82' },
  { name: 'Lila', value: '#5947a5' },
  { name: 'Rosa', value: '#e76856' },
  { name: 'Azul', value: '#3178a8' },
  { name: 'Verde', value: '#72c264' }
];

export function getPlayer() {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

export function savePlayer(data) {
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

export function hasPlayer() {
  return getPlayer() !== null;
}

export function resetPlayer() {
  window.localStorage.removeItem(STORAGE_KEY);
}
