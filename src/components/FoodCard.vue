<template>
  <div 
    class="bg-white rounded-2xl p-4 shadow-[0_8px_24px_rgba(149,157,165,0.1)] flex items-center justify-between active:scale-[0.98] transition-all duration-200 relative overflow-hidden mb-3"
    @click="onClick"
  >
    <div class="flex items-center gap-4">
       <!-- Icon Placeholder -->
       <div class="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center text-2xl p-2">
         {{ getFoodEmoji(item.name) }}
       </div>
       <div>
         <h3 class="font-bold text-gray-900 text-lg">{{ item.name }}</h3>
         <p class="text-xs text-gray-400 mt-1 font-medium">{{ item.originalWeight }}</p>
       </div>
    </div>

    <!-- Tag -->
    <div 
      class="px-3 py-1 rounded-full text-xs font-bold tracking-wide flex items-center justify-center min-w-[60px]"
      :class="getStatusClass(item.status)"
    >
      {{ getStatusText(item) }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue';
import { FoodItem } from '../store/types';

const props = defineProps<{
  item: FoodItem
}>();

const emit = defineEmits(['click']);

const getStatusClass = (status: string) => {
  switch (status) {
    case 'FRESH': return 'bg-emerald-50 text-emerald-600';
    case 'WARNING': return 'bg-amber-50 text-amber-600';
    case 'EXPIRED': return 'bg-red-50 text-red-500';
    default: return 'bg-gray-50 text-gray-600';
  }
};

const getStatusText = (item: FoodItem) => {
    if (item.status === 'EXPIRED') return '已过期';
    if (item.status === 'WARNING') return `剩 ${item.expiryDays} 天`;
    return `${item.expiryDays} 天`;
}

const getFoodEmoji = (name: string) => {
  if (name.includes('西红柿') || name.includes('番茄')) return '🍅';
  if (name.includes('奶') || name.includes('牛')) return '🥛'; 
  if (name.includes('蛋')) return '🥚';
  if (name.includes('菜')) return '🥬';
  if (name.includes('果') || name.includes('苹果')) return '🍎';
  if (name.includes('面') || name.includes('包')) return '🍞';
  if (name.includes('胡萝卜')) return '🥕';
  if (name.includes('肉') || name.includes('鸡')) return '🥩';
  return '🥘';
}

const onClick = () => {
  emit('click', props.item);
};
</script>
