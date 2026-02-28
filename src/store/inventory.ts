import { defineStore } from 'pinia';
import { FoodItem } from './types';

export const useInventoryStore = defineStore('inventory', {
  state: () => ({
    inventoryList: [
      {
        id: '1',
        name: '西红柿',
        originalWeight: '500g',
        status: 'FRESH',
        entryDate: Date.now() - 1000 * 60 * 60 * 24 * 1, // 1 day ago
        expiryDays: 7,
        storageTips: '建议冷藏',
      },
      {
        id: '2',
        name: '牛奶',
        originalWeight: '1L',
        status: 'WARNING',
        entryDate: Date.now() - 1000 * 60 * 60 * 24 * 5, // 5 days ago
        expiryDays: 7, // 2 days left
        storageTips: '开封后需冷藏',
      },
      {
        id: '3',
        name: '生菜',
        originalWeight: '300g',
        status: 'FRESH',
        entryDate: Date.now(),
        expiryDays: 5,
        storageTips: '尽快食用',
      },
      {
        id: '4',
        name: '鸡蛋',
        originalWeight: '12个',
        status: 'WARNING',
        entryDate: Date.now() - 1000 * 60 * 60 * 24 * 14,
        expiryDays: 15, // 1 day left
        storageTips: '冷藏保存',
      },
      {
        id: '5',
        name: '酸奶',
        originalWeight: '200ml',
        status: 'EXPIRED',
        entryDate: Date.now() - 1000 * 60 * 60 * 24 * 22,
        expiryDays: 21, // Expired
        storageTips: '低温冷藏',
      },
      {
        id: '6',
        name: '胡萝卜',
        originalWeight: '400g',
        status: 'FRESH',
        entryDate: Date.now() - 1000 * 60 * 60 * 24 * 2,
        expiryDays: 14,
        storageTips: '常温或冷藏',
      },
      {
        id: '7',
        name: '苹果',
        originalWeight: '600g',
        status: 'FRESH',
        entryDate: Date.now(),
        expiryDays: 10,
        storageTips: '冷藏口感更佳',
      },
      {
        id: '8',
        name: '面包',
        originalWeight: '1个',
        status: 'WARNING',
        entryDate: Date.now() - 1000 * 60 * 60 * 24 * 2,
        expiryDays: 4, // 2 days left
        storageTips: '密封保存',
      },
    ] as FoodItem[],
  }),
  getters: {
    warningItems: (state) => state.inventoryList.filter((item) => item.status === 'WARNING'),
    expiredItems: (state) => state.inventoryList.filter((item) => item.status === 'EXPIRED'),
    freshItems: (state) => state.inventoryList.filter((item) => item.status === 'FRESH'),
    totalCount: (state) => state.inventoryList.length,
  },
  actions: {
    addItem(item: FoodItem) {
      this.inventoryList.unshift(item);
    },
    consumeItem(id: string) {
      const index = this.inventoryList.findIndex((item) => item.id === id);
      if (index !== -1) {
        this.inventoryList.splice(index, 1);
        // Log consumption logic here
      }
    },
    removeItem(id: string) {
      const index = this.inventoryList.findIndex((item) => item.id === id);
      if (index !== -1) {
        this.inventoryList.splice(index, 1);
        // Log waste logic here
      }
    },
  },
});
