<template>
  <div class="min-h-screen bg-gray-50 p-4 pb-24">
    <!-- Header -->
    <div class="flex justify-between items-center mb-6 pt-2">
      <div>
        <h1 class="text-2xl font-bold text-gray-900 tracking-tight">我的冰箱</h1>
        <p class="text-sm text-gray-500 mt-1 font-medium">{{ store.totalCount }} 件物品</p>
      </div>
      <button 
        class="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center shadow-lg active:scale-95 transition-transform hover:shadow-xl hover:bg-emerald-500" 
        @click="onAddClick"
      >
        <span class="text-2xl font-light mb-1">+</span>
      </button>
    </div>

    <!-- Tabs -->
    <div class="flex space-x-1 mb-6 bg-gray-200 p-1 rounded-xl">
      <button 
        v-for="tab in tabs" 
        :key="tab.key"
        class="flex-1 py-2 text-sm font-bold rounded-lg transition-all duration-200"
        :class="activeTab === tab.key ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-500 hover:text-gray-700'"
        @click="activeTab = tab.key"
      >
        {{ tab.label }}
      </button>
    </div>

    <!-- List -->
    <div v-if="filteredList.length > 0" class="space-y-3">
      <FoodCard 
        v-for="item in filteredList" 
        :key="item.id" 
        :item="item"
        @click="onCardClick"
      />
    </div>

    <!-- Empty State -->
    <div v-else class="flex flex-col items-center justify-center py-20 opacity-60">
       <div class="text-6xl grayscale opacity-50 mb-4">🥬</div>
       <p class="text-gray-400 text-sm font-medium">冰箱空空如也，快去进货吧</p>
       <button class="mt-6 px-6 py-2 bg-primary text-white text-sm font-bold rounded-full shadow-lg" @click="onAddClick">
         立即添加
       </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useInventoryStore } from '../../store/inventory';
import { FoodItem } from '../../store/types';
import FoodCard from '../../components/FoodCard.vue';

const store = useInventoryStore();
const activeTab = ref('ALL');

const tabs = [
  { key: 'ALL', label: '全部' },
  { key: 'WARNING', label: '即将过期' },
  { key: 'EXPIRED', label: '已过期' },
];

const filteredList = computed(() => {
  if (activeTab.value === 'ALL') return store.inventoryList;
  if (activeTab.value === 'WARNING') return store.warningItems;
  if (activeTab.value === 'EXPIRED') return store.expiredItems;
  return [];
});

const onAddClick = () => {
  uni.showToast({ title: '功能开发中', icon: 'none' });
};

const onCardClick = (item: FoodItem) => {
  console.log('Clicked item:', item.name);
};
</script>

<style>
/* Custom utility if needed, but Tailwind covers most */
</style>
