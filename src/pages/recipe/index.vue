<template>
  <div class="min-h-screen bg-[#F8FAFC] pb-32 relative overflow-hidden">
    <!-- Background Decor -->
    <div class="absolute top-0 left-0 w-full h-96 overflow-hidden z-0 pointer-events-none">
      <div class="absolute -top-20 -right-20 w-96 h-96 bg-orange-100/40 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob"></div>
      <div class="absolute top-20 -left-20 w-72 h-72 bg-emerald-100/40 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>
    </div>

    <div class="relative z-10 px-6 pt-[var(--status-bar-height)]">
      <!-- Spacer for Custom Nav -->
      <div class="h-12 w-full"></div>

      <!-- Header -->
      <div class="flex justify-between items-center mb-8">
        <div>
          <p class="text-xs text-gray-400 font-bold tracking-widest uppercase mb-1">AI KITCHEN</p>
          <h1 class="text-3xl font-black text-gray-900 tracking-tight">
            今天 <span class="text-emerald-500">吃什么?</span>
          </h1>
        </div>
        <div class="w-10 h-10 rounded-2xl bg-white shadow-sm flex items-center justify-center border border-gray-100">
           <!-- Search Icon -->
           <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTEgMTlhOCA4IDAgMTAwLTE2IDggOCAwIDAwMCAxNnpNMjEgMjFsLTQuMzUtNC4zNSIgc3Ryb2tlPSIjMTExODI3IiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPjwvc3ZnPg==" class="w-5 h-5 opacity-60" />
        </div>
      </div>

      <!-- Goal Selectors (Categories) -->
      <div class="flex gap-3 overflow-x-auto no-scrollbar mb-8 pb-2">
        <button 
          v-for="cat in categories" 
          :key="cat.id"
          class="flex-shrink-0 px-5 py-2.5 rounded-2xl text-xs font-bold transition-all duration-300 border"
          :class="activeCategory === cat.id 
            ? 'bg-gray-900 text-white border-gray-900 shadow-lg shadow-gray-200 scale-105' 
            : 'bg-white text-gray-500 border-gray-100 hover:border-gray-300'"
          @click="activeCategory = cat.id"
        >
          {{ cat.emoji }} {{ cat.name }}
        </button>
      </div>

      <!-- Daily Featured (Hero Card) -->
      <div class="mb-10">
        <div class="flex justify-between items-end mb-4">
          <h2 class="text-xl font-bold text-gray-900">今日精选</h2>
          <span class="text-xs text-emerald-600 font-bold bg-emerald-50 px-2 py-1 rounded-lg">98% 匹配</span>
        </div>
        
        <div class="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.08)] group">
          <!-- Mock Image (Gradient Placeholder for now, can replace with real image) -->
          <div class="absolute inset-0 bg-gradient-to-br from-orange-400 to-red-500"></div>
          <!-- Overlay -->
          <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
          
          <div class="absolute bottom-0 left-0 w-full p-6">
            <div class="flex gap-2 mb-3">
              <span class="px-2 py-1 rounded-lg bg-white/20 backdrop-blur-md text-[10px] font-bold text-white border border-white/10">🔥 低碳水</span>
              <span class="px-2 py-1 rounded-lg bg-white/20 backdrop-blur-md text-[10px] font-bold text-white border border-white/10">⚡ 15 分钟</span>
            </div>
            <h3 class="text-2xl font-black text-white mb-2 leading-tight">香煎三文鱼配 <br/> 藜麦沙拉</h3>
            
            <!-- Nutrition Mini-Bar -->
            <div class="flex items-center gap-4 text-white/80 text-xs font-medium">
              <div class="flex items-center gap-1">
                <div class="w-1.5 h-1.5 rounded-full bg-orange-400"></div>
                450 千卡
              </div>
              <div class="flex items-center gap-1">
                <div class="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                32g 蛋白质
              </div>
            </div>
          </div>

          <!-- Floating Action: Cook This -->
          <button class="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/20 active:scale-90 transition-transform">
             <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTIgMjEuMzVhMy41NSAzLjU1IDAgMCAwIDMuNTUtMy41NWgtNy4xQTMuNTUgMy41NSAwIDAgMCAxMiAyMS4zNXptLTguODctNy4xMWExNi4zNyAxNi4zNyAwIDAgMSAzLjU1LTcuMzZWMy41NWEzLjU1IDMuNTUgMCAwIDEgNy4xMSAwdi4zN2MuMzUuMDk1LjcuMiAxLjA1LjMxVjMuNTVhNC42MiA0LjYyIDAgMCAwLTkuMjQgMHYzLjM2QTE3LjQxIDE3LjQxIDAgMCAwIDIgMTQuMjRoMS4xM3ptMTguODYgMGE0LjUgNC41IDAgMCAwLTQuNS00LjVoLS4zNXYzLjQxbC4zNS4wOWEzLjQ1IDMuNDUgMCAwIDEgMi40IDMuMjR2MS4yNmgyLjF2LTEuMjZ6IiBmaWxsPSJ3aGl0ZSIvPjwvc3ZnPg==" class="w-5 h-5" />
          </button>
        </div>
      </div>

      <!-- Quick Recommendations (Horizontal Scroll) -->
      <div class="mb-8">
        <h2 class="text-xl font-bold text-gray-900 mb-4">冰箱食材推荐</h2>
        <div class="flex gap-4 overflow-x-auto no-scrollbar pb-4">
          <div 
            v-for="item in recommendations" 
            :key="item.id"
            class="flex-shrink-0 w-40 bg-white rounded-3xl p-4 shadow-[0_8px_20px_rgba(0,0,0,0.03)] border border-gray-50 flex flex-col active:scale-95 transition-transform"
          >
             <div class="w-full h-24 rounded-2xl bg-gray-100 mb-3 relative overflow-hidden">
                <!-- Mock Image -->
                <div :class="`absolute inset-0 bg-gradient-to-br ${item.gradient}`"></div>
                <div class="absolute bottom-1 right-1 bg-white px-1.5 py-0.5 rounded-md text-[10px] font-bold text-gray-800 shadow-sm">
                  {{ item.time }}
                </div>
             </div>
             <h4 class="font-bold text-gray-800 text-sm leading-snug mb-1">{{ item.name }}</h4>
             <p class="text-[10px] text-gray-400 font-medium line-clamp-1">{{ item.missingIngredients.length === 0 ? '食材齐全' : `缺少: ${item.missingIngredients.join(', ')}` }}</p>
          </div>
        </div>
      </div>

      <!-- Nutrition Stats Block -->
      <div class="bg-gray-900 rounded-3xl p-6 text-white shadow-xl shadow-gray-200 mb-8 relative overflow-hidden">
         <div class="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl -mr-10 -mt-10"></div>
         
         <div class="flex justify-between items-center mb-6">
           <div>
             <h3 class="font-bold text-lg">每日营养</h3>
             <p class="text-xs text-gray-400">目标: 增肌</p>
           </div>
           <div class="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-xs font-bold">
             75%
           </div>
         </div>

         <div class="flex gap-4">
            <div class="flex-1 bg-white/10 rounded-2xl p-3 backdrop-blur-sm">
               <p class="text-[10px] text-gray-400 uppercase font-bold mb-1">蛋白质</p>
               <p class="text-xl font-black text-emerald-400">85g</p>
            </div>
            <div class="flex-1 bg-white/10 rounded-2xl p-3 backdrop-blur-sm">
               <p class="text-[10px] text-gray-400 uppercase font-bold mb-1">碳水</p>
               <p class="text-xl font-black text-orange-400">120g</p>
            </div>
            <div class="flex-1 bg-white/10 rounded-2xl p-3 backdrop-blur-sm">
               <p class="text-[10px] text-gray-400 uppercase font-bold mb-1">脂肪</p>
               <p class="text-xl font-black text-blue-400">45g</p>
            </div>
         </div>
      </div>

    </div>

    <!-- Floating Generate Button -->
    <div class="fixed bottom-24 right-6 z-40">
      <button class="group flex items-center gap-2 bg-black text-white pl-5 pr-2 py-2 rounded-full shadow-2xl shadow-gray-400 active:scale-90 transition-all duration-300">
        <span class="text-xs font-bold">问问 AI 厨师</span>
        <div class="w-10 h-10 rounded-full bg-emerald-500 flex items-center justify-center group-hover:rotate-12 transition-transform">
           <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTIgNHYxNm04LThINCIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIzIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz48L3N2Zz4=" class="w-5 h-5" />
        </div>
      </button>
    </div>

    <!-- Custom TabBar -->
    <CustomTabBar currentPath="pages/recipe/index" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import CustomTabBar from '../../components/CustomTabBar.vue';

const activeCategory = ref('healthy');

const categories = [
  { id: 'healthy', name: '减脂', emoji: '🥗' },
  { id: 'muscle', name: '增肌', emoji: '💪' },
  { id: 'cheat', name: '放纵', emoji: '🍔' },
  { id: 'quick', name: '快手', emoji: '⚡' },
];

const recommendations = [
  { id: 1, name: '西红柿炒鸡蛋', time: '10m', gradient: 'from-red-400 to-orange-500', missingIngredients: [] },
  { id: 2, name: '鸡胸肉沙拉', time: '20m', gradient: 'from-emerald-400 to-teal-500', missingIngredients: ['柠檬'] },
  { id: 3, name: '燕麦酸奶碗', time: '5m', gradient: 'from-blue-400 to-indigo-500', missingIngredients: [] },
];
</script>

<style>
.no-scrollbar::-webkit-scrollbar {
  display: none;
}
.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
