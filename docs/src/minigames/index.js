import { VolcanoControlGame } from './VolcanoControlGame.js?v=20260908173652';
import { BreathingCalmGame } from './BreathingCalmGame.js?v=20260908173652';
import { ComingSoonGame } from './ComingSoonGame.js?v=20260908173652';
import { FearIslandGame } from './fear/FearIslandGame.js?v=20260908173652';
import { JoyValleyGame } from './joy/JoyValleyGame.js?v=20260908173652';
import { DisgustGuardiansGame } from './disgust/DisgustGuardiansGame.js?v=20260908173652';
import { AngerVolcanoGame } from './anger/AngerVolcanoGame.js?v=20260908173652';
import { FearNightGame } from './fear/FearNightGame.js?v=20260908173652';
import { SadnessRestoreGame } from './sadness/SadnessRestoreGame.js?v=20260908173652';

export const minigameRegistry = {
  // Islas 3D jugables
  'anger-volcano': AngerVolcanoGame,
  'fear-night': FearNightGame,
  'sadness-restore': SadnessRestoreGame,
  // EMO-AVENTURA (2D, en migracion a 3D)
  'fear-island': FearIslandGame,
  'joy-valley': JoyValleyGame,
  'disgust-guardians': DisgustGuardiansGame,
  // Isla del Enojo (minijuego existente, sin cambios)
  'guided-breathing': BreathingCalmGame,
  'volcano-control': VolcanoControlGame,
  // Islas aun sin contenido
  'coming-soon': ComingSoonGame
};
