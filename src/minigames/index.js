import { VolcanoControlGame } from './VolcanoControlGame.js';
import { BreathingCalmGame } from './BreathingCalmGame.js';
import { ComingSoonGame } from './ComingSoonGame.js';

export const minigameRegistry = {
  'guided-breathing': BreathingCalmGame,
  'volcano-control': VolcanoControlGame,
  'coming-soon': ComingSoonGame
};
