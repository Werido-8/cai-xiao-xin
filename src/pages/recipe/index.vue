<template>
  <div class="min-h-screen bg-[#F8FAFC] pb-32 pt-14 px-6">
    <h1 class="text-2xl font-black text-gray-900 mb-4">AI 厨神</h1>
    <div class="bg-white rounded-3xl p-8 shadow-sm flex flex-col items-center justify-center text-center">
        <div class="text-6xl mb-4">🍳</div>
        <h2 class="text-lg font-bold text-gray-800 mb-2">今天吃什么？</h2>
        <p class="text-gray-400 text-sm mb-6">让 AI 为你搭配冰箱里的食材</p>
        <button class="bg-emerald-500 text-white px-8 py-3 rounded-xl font-bold shadow-lg shadow-emerald-200 active:scale-95 transition-transform">
            开始生成
        </button>
    </div>
    
    <!-- Custom TabBar -->
    <CustomTabBar currentPath="pages/recipe/index" />
  </div>
</template>

<script setup lang="ts">
import CustomTabBar from '../../components/CustomTabBar.vue';
</script>
