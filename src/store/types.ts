export interface FoodItem {
  id: string;
  name: string;
  originalWeight: string;
  status: 'FRESH' | 'WARNING' | 'EXPIRED';
  entryDate: number;
  expiryDays: number;
  storageTips: string;
}

export interface ConsumeLog {
  id: string;
  foodId: string;
  foodName: string;
  action: 'CONSUMED' | 'WASTED';
  date: number;
}

export interface UserConfig {
  goal: 'FAT_LOSS' | 'MUSCLE_GAIN' | 'NORMAL';
  dietaryRestrictions: string[];
}
