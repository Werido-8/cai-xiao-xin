<template>
  <div class="fixed bottom-6 left-6 right-6 h-16 bg-white/90 backdrop-blur-xl rounded-3xl shadow-[0_8px_30px_rgba(0,0,0,0.08)] border border-white/50 flex items-center justify-between px-2 z-50">
    <div 
      v-for="(item, index) in list" 
      :key="index"
      class="flex-1 h-full flex flex-col items-center justify-center relative transition-all duration-300"
      @click="switchTab(item)"
    >
      <!-- Icon Container -->
      <div 
        class="w-10 h-10 rounded-2xl flex items-center justify-center transition-all duration-300"
        :class="currentPath === item.pagePath ? 'bg-emerald-50 scale-110' : ''"
      >
        <!-- Using Image with Data URI for WeChat MP compatibility -->
        <img 
          :src="getIconSrc(item.text, currentPath === item.pagePath)" 
          class="w-6 h-6"
        />
      </div>
      
      <!-- Active Indicator (Rectangular) -->
      <div 
        v-if="currentPath === item.pagePath"
        class="absolute -bottom-1 w-4 h-1 rounded-full bg-emerald-500"
      ></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

const props = defineProps<{
  currentPath: string
}>();

const list = [
  {
    pagePath: "pages/index/index",
    text: "冰箱"
  },
  {
    pagePath: "pages/recipe/index",
    text: "AI菜谱"
  },
  {
    pagePath: "pages/profile/index",
    text: "我的"
  }
];

// SVG Paths
const icons = {
  '冰箱': 'M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10',
  'AI菜谱': 'M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z',
  '我的': 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z'
};

const getIconSrc = (name: string, isActive: boolean) => {
  const color = isActive ? '%2310B981' : '%239CA3AF'; // #10B981 (Emerald-500) or #9CA3AF (Gray-400)
  const path = icons[name as keyof typeof icons] || '';
  const svg = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="${path}" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
  return `data:image/svg+xml;charset=utf-8,${svg}`;
};

const switchTab = (item: any) => {
  uni.switchTab({
    url: '/' + item.pagePath
  });
};
</script>
