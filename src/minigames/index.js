import { JoyStarsGame } from './JoyStarsGame.js';
import { ComingSoonGame } from './ComingSoonGame.js';
import { VolcanoControlGame } from './VolcanoControlGame.js';

export const minigameRegistry = {
  'joy-stars': JoyStarsGame,
  'volcano-control': VolcanoControlGame,
  'coming-soon': ComingSoonGame
};
