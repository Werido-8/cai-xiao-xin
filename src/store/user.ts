import { defineStore } from 'pinia';
import { UserConfig } from './types';

export const useUserStore = defineStore('user', {
  state: () => ({
    userConfig: {
      goal: 'NORMAL',
      dietaryRestrictions: [],
    } as UserConfig,
    achievements: {
      totalConsumedWeight: 12.5, // kg
      savedCount: 34,
      healthScore: 92,
    },
  }),
  actions: {
    updateGoal(goal: 'FAT_LOSS' | 'MUSCLE_GAIN' | 'NORMAL') {
      this.userConfig.goal = goal;
    },
  },
});
