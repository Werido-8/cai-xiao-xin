<template>
  <div class="min-h-screen bg-[#F8FAFC] pb-32 pt-14 px-6">
    <div class="flex items-center gap-4 mb-8">
        <div class="w-16 h-16 rounded-full bg-gray-200 border-4 border-white shadow-md overflow-hidden">
            <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" alt="avatar" class="w-full h-full" />
        </div>
        <div>
            <h1 class="text-2xl font-black text-gray-900">Cai Xiao Xin</h1>
            <p class="text-xs text-emerald-600 font-bold bg-emerald-50 px-2 py-1 rounded-md inline-block mt-1">PRO Member</p>
        </div>
    </div>

    <div class="bg-white rounded-3xl p-6 shadow-sm mb-4">
        <h3 class="font-bold text-gray-900 mb-4">成就概览</h3>
        <div class="flex justify-between text-center">
            <div>
                <p class="text-2xl font-black text-gray-900">12.5</p>
                <p class="text-xs text-gray-400 font-bold uppercase mt-1">kg Saved</p>
            </div>
             <div>
                <p class="text-2xl font-black text-gray-900">34</p>
                <p class="text-xs text-gray-400 font-bold uppercase mt-1">Actions</p>
            </div>
             <div>
                <p class="text-2xl font-black text-emerald-500">92</p>
                <p class="text-xs text-gray-400 font-bold uppercase mt-1">Score</p>
            </div>
        </div>
    </div>
    
    <!-- Custom TabBar -->
    <CustomTabBar currentPath="pages/profile/index" />
  </div>
</template>

<script setup lang="ts">
import CustomTabBar from '../../components/CustomTabBar.vue';
</script>
