// EMO-AVENTURA · Sistema central de estado
// Guarda y recupera todo el progreso en localStorage. Ninguna accion resta puntos.

import { TOOLS, BADGES } from './tools.js?v=20260908175209';

const STORAGE_KEY = 'emo-aventura-state';

// Cadena de desbloqueo: Miedo -> Alegria -> Ira -> Desagrado
export const ISLAND_CHAIN = ['fear', 'joy', 'anger', 'disgust'];

// Islas del mapa que no forman parte de la aventura (siguen visibles, sin candado)
export const FREE_ISLANDS = ['sadness', 'surprise'];

function baseState() {
  return {
    currentIsland: null,
    unlockedIslands: ['fear'],
    completedIslands: [],
    emotionalPoints: 0,
    rewards: [],
    badges: [],
    tools: [],
    currentIntensity: null,
    initialIntensity: null,
    finalIntensity: null,
    selectedStrategy: null,
    completedActivities: [],
    progress: 0,
    reevaluations: [],
    settings: { sound: false, reduceMotion: false }
  };
}

export const gameState = baseState();

const listeners = new Set();

export function onStateChange(fn) {
  listeners.add(fn);
  return () => listeners.delete(fn);
}

function emit() {
  listeners.forEach((fn) => {
    try {
      fn(gameState);
    } catch (err) {
      console.warn('[emo-aventura] listener error', err);
    }
  });
}

export function loadProgress() {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const saved = JSON.parse(raw);
      Object.assign(gameState, baseState(), saved);
      // Normaliza colecciones por si el guardado viene de una version previa
      ['unlockedIslands', 'completedIslands', 'rewards', 'badges', 'tools', 'completedActivities', 'reevaluations']
        .forEach((key) => {
          if (!Array.isArray(gameState[key])) gameState[key] = [];
        });
      if (!gameState.unlockedIslands.includes('fear')) gameState.unlockedIslands.push('fear');
      if (!gameState.settings) gameState.settings = { sound: false, reduceMotion: false };
    }
  } catch (err) {
    console.warn('[emo-aventura] no se pudo leer el progreso, se inicia limpio', err);
    Object.assign(gameState, baseState());
  }
  recalcProgress();
  return gameState;
}

export function saveProgress() {
  recalcProgress();
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(gameState));
  } catch (err) {
    console.warn('[emo-aventura] no se pudo guardar el progreso', err);
  }
  emit();
  return gameState;
}

export function resetGame() {
  Object.assign(gameState, baseState());
  saveProgress();
}

function recalcProgress() {
  const total = ISLAND_CHAIN.length;
  const done = ISLAND_CHAIN.filter((id) => gameState.completedIslands.includes(id)).length;
  gameState.progress = Math.round((done / total) * 100);
}

/* ---------------------------------------------------------------- puntos */

export function addPoints(amount) {
  const value = Math.max(0, Number(amount) || 0); // nunca resta
  gameState.emotionalPoints += value;
  saveProgress();
  return gameState.emotionalPoints;
}

/* ------------------------------------------------------------ actividades */

export function completeActivity(activityId, points = 0) {
  if (!gameState.completedActivities.includes(activityId)) {
    gameState.completedActivities.push(activityId);
    if (points) {
      gameState.emotionalPoints += Math.max(0, points);
    }
  }
  saveProgress();
  return gameState.completedActivities;
}

export function isActivityCompleted(activityId) {
  return gameState.completedActivities.includes(activityId);
}

/* ------------------------------------------------------------ herramientas */

export function addReward(toolId) {
  const tool = TOOLS[toolId];
  if (!tool) {
    console.warn('[emo-aventura] herramienta desconocida:', toolId);
    return null;
  }
  if (!gameState.tools.includes(toolId)) {
    gameState.tools.push(toolId);
    gameState.rewards.push({ toolId, at: Date.now() });
  }
  saveProgress();
  return tool;
}

export function hasTool(toolId) {
  return gameState.tools.includes(toolId);
}

export function getTools() {
  return gameState.tools.map((id) => TOOLS[id]).filter(Boolean).sort((a, b) => a.order - b.order);
}

/* ---------------------------------------------------------------- insignias */

export function addBadge(badgeId) {
  if (!BADGES[badgeId]) return null;
  if (!gameState.badges.includes(badgeId)) gameState.badges.push(badgeId);
  saveProgress();
  return BADGES[badgeId];
}

export function getBadges() {
  return gameState.badges.map((id) => BADGES[id]).filter(Boolean);
}

/* ---------------------------------------------------------------- islas */

export function isUnlocked(islandId) {
  if (FREE_ISLANDS.includes(islandId)) return true;
  return gameState.unlockedIslands.includes(islandId);
}

export function isCompleted(islandId) {
  return gameState.completedIslands.includes(islandId);
}

export function unlockIsland(islandId) {
  if (!islandId) return false;
  if (gameState.unlockedIslands.includes(islandId)) return false;
  gameState.unlockedIslands.push(islandId);
  saveProgress();
  return true;
}

export function nextIslandOf(islandId) {
  const idx = ISLAND_CHAIN.indexOf(islandId);
  if (idx === -1 || idx === ISLAND_CHAIN.length - 1) return null;
  return ISLAND_CHAIN[idx + 1];
}

/** Marca una isla como completada, entrega insignia y desbloquea la siguiente.
 *  Devuelve el id de la isla desbloqueada (o null). */
export function completeIsland(islandId) {
  if (!gameState.completedIslands.includes(islandId)) {
    gameState.completedIslands.push(islandId);
  }
  addBadge(islandId);
  const next = nextIslandOf(islandId);
  let unlocked = null;
  if (next && unlockIsland(next)) unlocked = next;
  saveProgress();
  return unlocked;
}

export function allIslandsCompleted() {
  return ISLAND_CHAIN.every((id) => gameState.completedIslands.includes(id));
}

export function lockedIslands() {
  const all = [...ISLAND_CHAIN, ...FREE_ISLANDS];
  return all.filter((id) => !isUnlocked(id));
}

/* -------------------------------------------------------------- intensidad */

export function changeIntensity(level) {
  gameState.currentIntensity = level;
  saveProgress();
  return level;
}

export function setInitialIntensity(level) {
  gameState.initialIntensity = level;
  gameState.currentIntensity = level;
  saveProgress();
}

export function setStrategy(strategyId) {
  gameState.selectedStrategy = strategyId;
  saveProgress();
}

/** Registra { initialIntensity, strategy, finalIntensity } de una reevaluacion. */
export function recordReevaluation(islandId, initialIntensity, strategy, finalIntensity) {
  gameState.finalIntensity = finalIntensity;
  gameState.currentIntensity = finalIntensity;
  gameState.reevaluations.push({
    island: islandId,
    initialIntensity,
    strategy,
    finalIntensity,
    at: Date.now()
  });
  saveProgress();
  return gameState.reevaluations[gameState.reevaluations.length - 1];
}

export function getReevaluations() {
  return [...gameState.reevaluations];
}

/* --------------------------------------------------------------- ajustes */

export function setSetting(key, value) {
  gameState.settings[key] = value;
  saveProgress();
  return value;
}

export function prefersReducedMotion() {
  if (gameState.settings.reduceMotion) return true;
  try {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  } catch {
    return false;
  }
}

/* ------------------------------------------------------- resumen progreso */

export function getProgressSummary() {
  return {
    completed: ISLAND_CHAIN.filter((id) => gameState.completedIslands.includes(id)),
    total: ISLAND_CHAIN.length,
    percent: gameState.progress,
    points: gameState.emotionalPoints,
    tools: getTools(),
    badges: getBadges(),
    strategies: [...new Set(getTools().map((t) => t.strategy))],
    reevaluations: getReevaluations()
  };
}

loadProgress();
