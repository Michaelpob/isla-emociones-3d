import { JoyStarsGame } from './JoyStarsGame.js';
import { SupportRainGame } from './SupportRainGame.js';
import { VolcanoControlGame } from './VolcanoControlGame.js';
import { DarknessLightGame } from './DarknessLightGame.js';
import { SpiritCleaningGame } from './SpiritCleaningGame.js';
import { SurpriseBoxesGame } from './SurpriseBoxesGame.js';
import { ComingSoonGame } from './ComingSoonGame.js';
import { ValleDeLasNubesGame } from './ValleDeLasNubesGame.js';
import { BreathingCalmGame } from './BreathingCalmGame.js';

export const minigameRegistry = {
  'joy-stars': JoyStarsGame,
  'support-rain': ValleDeLasNubesGame,
  'valle-nubes': ValleDeLasNubesGame,
  'volcano-control': VolcanoControlGame,
  'guided-breathing': BreathingCalmGame,
  'darkness-light': DarknessLightGame,
  'spirit-cleaning': SpiritCleaningGame,
  'surprise-boxes': SurpriseBoxesGame,
  'coming-soon': ComingSoonGame
};
