import { VolcanoControlGame } from './VolcanoControlGame.js';
import { BreathingCalmGame } from './BreathingCalmGame.js';
import { ComingSoonGame } from './ComingSoonGame.js';
import { FearIslandGame } from './fear/FearIslandGame.js';
import { JoyValleyGame } from './joy/JoyValleyGame.js';
import { DisgustGuardiansGame } from './disgust/DisgustGuardiansGame.js';

export const minigameRegistry = {
  // EMO-AVENTURA
  'fear-island': FearIslandGame,
  'joy-valley': JoyValleyGame,
  'disgust-guardians': DisgustGuardiansGame,
  // Isla del Enojo (minijuego existente, sin cambios)
  'guided-breathing': BreathingCalmGame,
  'volcano-control': VolcanoControlGame,
  // Islas aun sin contenido
  'coming-soon': ComingSoonGame
};
