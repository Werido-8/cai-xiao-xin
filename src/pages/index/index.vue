<template>
  <div class="min-h-screen bg-[#F8FAFC] pb-32 relative overflow-hidden">
    <!-- Background Decor (Blobs) - Made softer -->
    <div class="absolute top-0 left-0 w-full h-96 overflow-hidden z-0 pointer-events-none">
      <div class="absolute -top-20 -left-20 w-80 h-80 bg-emerald-100/50 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob"></div>
      <div class="absolute top-0 -right-20 w-80 h-80 bg-amber-50/50 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob animation-delay-2000"></div>
    </div>

    <!-- Main Content -->
    <div class="relative z-10 px-6 pt-[var(--status-bar-height)]">
      <!-- Custom NavBar Placeholder -->
      <div class="h-12 w-full"></div>

      <!-- Enhanced Header -->
      <div class="flex flex-col mb-8">
        <!-- Top Row: Avatar & Greeting -->
        <div class="flex justify-between items-center mb-8">
           <div class="flex items-center gap-3">
             <!-- Avatar: Squircle (rounded-2xl) -->
             <div class="w-10 h-10 rounded-2xl bg-white border border-gray-100 shadow-sm overflow-hidden p-0.5">
                <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iNTAiIGN5PSI1MCIgcj0iNTAiIGZpbGw9IiNFNUU3RUIiLz48cGF0aCBkPSJNNTAgMjVDNTguMjg0MyAyNSA2NSAzMS43MTU3IDY1IDQwQzY1IDQ4LjI4NDMgNTguMjg0MyA1NSA1MCA1NUM0MS43MTU3IDU1IDM1IDQ4LjI4NDMgMzUgNDBDMzUgMzEuNzE1NyA0MS43MTU3IDI1IDUwIDI1Wk0yNSA4NUMyNSA3MS4xOTI5IDM2LjE5MjkgNjAgNTAgNjBDNjMuODA3MSA2MCA3NSA3MS4xOTI5IDc1IDg1SDI1WiIgZmlsbD0iIzlDQTNBRiIvPjwvc3ZnPg==" alt="avatar" class="w-full h-full rounded-xl" />
             </div>
             <div>
               <p class="text-xs text-gray-400 font-medium tracking-wide">HELLO, CHEF</p>
               <h3 class="text-sm font-bold text-gray-800">Cai Xiao Xin</h3>
             </div>
           </div>
           <!-- Date Capsule: Slightly Squared (rounded-xl) -->
           <div class="bg-white/60 backdrop-blur-md border border-white/50 px-3 py-1.5 rounded-xl shadow-sm">
             <span class="text-xs font-bold text-gray-600 font-mono">{{ new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric' }) }}</span>
           </div>
        </div>

        <!-- Title & Action Area -->
        <div class="flex justify-between items-end mb-8 relative">
          <div>
            <h1 class="text-4xl font-black text-gray-900 tracking-tight leading-none">
              My<br/>
              <span class="text-emerald-500">Fridge</span>
            </h1>
            <div class="flex items-center gap-2 mt-3">
               <span class="inline-block w-1.5 h-1.5 rounded bg-gray-300"></span>
               <p class="text-xs text-gray-400 font-bold uppercase tracking-wider">{{ store.totalCount }} ITEMS INSIDE</p>
            </div>
          </div>
          
          <!-- Add Button - Squircle (rounded-2xl) -->
          <button 
            class="group absolute right-0 bottom-1 w-14 h-14 rounded-2xl bg-emerald-500 text-white flex items-center justify-center shadow-lg shadow-emerald-200 active:scale-90 transition-all duration-300 hover:bg-emerald-600"
            @click="onAddClick"
          >
             <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTIgNHYxNm04LThINCIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIzIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz48L3N2Zz4=" class="w-7 h-7" />
          </button>
        </div>

        <!-- Stats Cards (Grid Layout) -->
        <div class="grid grid-cols-2 gap-4 mb-2">
           <!-- Fresh Card -->
           <div class="bg-white p-5 rounded-3xl shadow-[0_10px_30px_rgba(0,0,0,0.02)] border border-gray-50 flex flex-col justify-between h-28 relative overflow-hidden group hover:shadow-[0_10px_30px_rgba(16,185,129,0.05)] transition-shadow">
             <div class="flex justify-between items-start z-10">
               <!-- Icon Base: rounded-xl -->
               <div class="w-8 h-8 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-500">
                 <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNOSAxMmwyIDIgNC00bTYgMmE5IDkgMCAxMS0xOCAwIDkgOSAwIDAxMTggMHoiIHN0cm9rZT0iIzEwQjk4MSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz48L3N2Zz4=" class="w-4 h-4" />
               </div>
               <span class="text-2xl font-black text-gray-900">{{ store.freshItems.length }}</span>
             </div>
             <p class="text-xs text-gray-400 font-bold uppercase tracking-wider relative z-10">Fresh Items</p>
             <div class="absolute -bottom-6 -right-6 w-24 h-24 bg-emerald-50/50 rounded-full"></div>
           </div>

           <!-- Warning Card -->
           <div class="bg-white p-5 rounded-3xl shadow-[0_10px_30px_rgba(0,0,0,0.02)] border border-gray-50 flex flex-col justify-between h-28 relative overflow-hidden group hover:shadow-[0_10px_30px_rgba(245,158,11,0.05)] transition-shadow">
             <div class="flex justify-between items-start z-10">
               <!-- Icon Base: rounded-xl -->
               <div class="w-8 h-8 rounded-xl bg-amber-50 flex items-center justify-center text-amber-500">
                 <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTIgOHY0bDMgM202LTNhOSA5IDAgMTEtMTggMCA5IDkgMCAwMTE4IDB6IiBzdHJva2U9IiNGNTlFMEIiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+PC9zdmc+" class="w-4 h-4" />
               </div>
               <span class="text-2xl font-black text-gray-900">{{ store.warningItems.length }}</span>
             </div>
             <p class="text-xs text-gray-400 font-bold uppercase tracking-wider relative z-10">Expiring Soon</p>
             <div class="absolute -bottom-6 -right-6 w-24 h-24 bg-amber-50/50 rounded-full"></div>
           </div>
        </div>
      </div>

      <!-- Modern Tabs - Squircle Style (rounded-2xl) -->
      <div class="sticky top-[100px] z-20 mb-6">
        <div class="flex items-center justify-center gap-3 w-full max-w-[320px] mx-auto">
          <button 
            v-for="tab in tabs" 
            :key="tab.key"
            class="flex-1 py-2.5 text-xs font-bold rounded-2xl transition-all duration-300 text-center shadow-sm border border-gray-100"
            :class="activeTab === tab.key ? 'bg-gray-900 text-white shadow-md ring-2 ring-gray-900 ring-offset-1' : 'bg-white text-gray-500 hover:bg-gray-50'"
            @click="activeTab = tab.key"
          >
            {{ tab.label }}
          </button>
        </div>
      </div>

      <!-- List Content -->
      <div v-if="filteredList.length > 0" class="space-y-4 min-h-[300px]">
        <FoodCard 
          v-for="item in filteredList" 
          :key="item.id" 
          :item="item"
          @click="onCardClick"
        />
      </div>

      <!-- Empty State -->
      <div v-else class="flex flex-col items-center justify-center py-24 opacity-60">
         <!-- Icon Base: rounded-3xl -->
         <div class="w-24 h-24 bg-white rounded-3xl shadow-sm flex items-center justify-center mb-4 text-4xl grayscale opacity-30 border border-gray-50">
           🥬
         </div>
         <p class="text-gray-400 text-sm font-medium">冰箱空空如也</p>
         <button 
           class="mt-6 text-emerald-600 font-bold text-sm flex items-center gap-1 hover:underline" 
           @click="onAddClick"
         >
           去进货 <span class="text-lg">→</span>
         </button>
      </div>
    </div>

    <!-- Custom TabBar -->
    <CustomTabBar currentPath="pages/index/index" />
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useInventoryStore } from '../../store/inventory';
import { FoodItem } from '../../store/types';
import FoodCard from '../../components/FoodCard.vue';
import CustomTabBar from '../../components/CustomTabBar.vue';

const store = useInventoryStore();
const activeTab = ref('ALL');

const tabs = [
  { key: 'ALL', label: 'All' },
  { key: 'WARNING', label: 'Expiring' },
  { key: 'EXPIRED', label: 'Expired' },
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
.no-scrollbar::-webkit-scrollbar {
  display: none;
}
.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

@keyframes blob {
  0% { transform: translate(0px, 0px) scale(1); }
  33% { transform: translate(30px, -50px) scale(1.1); }
  66% { transform: translate(-20px, 20px) scale(0.9); }
  100% { transform: translate(0px, 0px) scale(1); }
}
.animate-blob {
  animation: blob 7s infinite;
}
.animation-delay-2000 {
  animation-delay: 2s;
}
</style>
