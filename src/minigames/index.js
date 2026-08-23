import { JoyStarsGame } from './JoyStarsGame.js';
import { SupportRainGame } from './SupportRainGame.js';
import { VolcanoControlGame } from './VolcanoControlGame.js';
import { DarknessLightGame } from './DarknessLightGame.js';
import { SpiritCleaningGame } from './SpiritCleaningGame.js';
import { SurpriseBoxesGame } from './SurpriseBoxesGame.js';
import { ComingSoonGame } from './ComingSoonGame.js';

export const minigameRegistry = {
  'joy-stars': JoyStarsGame,
  'support-rain': SupportRainGame,
  'volcano-control': VolcanoControlGame,
  'darkness-light': DarknessLightGame,
  'spirit-cleaning': SpiritCleaningGame,
  'surprise-boxes': SurpriseBoxesGame,
  'coming-soon': ComingSoonGame
};
