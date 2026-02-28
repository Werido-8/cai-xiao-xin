<template>
  <div class="min-h-screen bg-[#F8FAFC] pb-32 relative overflow-hidden">
    <!-- Background Decor -->
    <div class="absolute top-0 left-0 w-full h-96 overflow-hidden z-0 pointer-events-none">
      <div class="absolute -top-20 left-1/2 w-96 h-96 bg-emerald-100/40 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob"></div>
      <div class="absolute top-20 -right-20 w-72 h-72 bg-blue-100/40 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>
    </div>

    <div class="relative z-10 px-6 pt-[var(--status-bar-height)]">
      <!-- Spacer -->
      <div class="h-12 w-full flex justify-end items-center">
        <!-- Settings Icon -->
        <button class="w-10 h-10 rounded-full bg-white/50 backdrop-blur-md flex items-center justify-center active:scale-95 transition-transform">
           <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTIuMjIgMmgtLjQ0YTIgMiAwIDAgMC0yIDJ2LjE4YTIgMiAwIDAgMS0xIDEuNzNsLS40My4yNWEyIDIgMCAwIDEtMiAwbC0uMTUtLjA5YTIgMiAwIDAgMC0yIDBMMy41IDguMmEyIDIgMCAwIDAgMCAwIDJlLjE1LjA5YTIgMiAwIDAgMSAxIDEuNzN2LjQzYTIgMiAwIDAgMS0xIDEuNzNsLS4xNS4wOWEyIDIgMCAwIDAgMCAwIDJsMi4yIDMuOGEyIDIgMCAwIDAgMCAyIDBoLjE1YTIgMiAwIDAgMSAxIDEuNzNsLjQzLjI1YTIgMiAwIDAgMSAyIDB2LjE1YTIgMiAwIDAgMCAyIDBoLjQ0YTIgMiAwIDAgMCAyLTJ2LS4xOGEyIDIgMCAwIDEgMS0xLjczbC40My0uMjVhMiIDIgMCAwIDEgMiAwbC4xNS4wOWEyIDIgMCAwIDAgMCAyIDBsMi4yLTMuOGEyIDIgMCAwIDAgMCAwLTJsLS4xNS0uMDlhMiAyIDAgMCAxLTEtMS43M3YtLjQzYTIgMiAwIDAgMSAxLTEuNzNsLjE1LS4wOWEyIDIgMCAwIDAgMCAwLTJsLTIuMi0zLjhhMiAyIDAgMCAwLTItMGgtLjE1YTIgMiAwIDAgMS0xLTEuNzNsLS40My0uMjVhMiAyIDAgMCAxLTIgMHYtLjE1YTIgMiAwIDAgMC0yLTJ6IiBzdHJva2U9IiMzNzQxNTEiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+PHBhdGggZD0iTTEyIDE1YTMgMyAwIDEgMCAwLTYgMyAzIDAgMCAwIDAgNnoiIHN0cm9rZT0iIzM3NDE1MSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz48L3N2Zz4=" class="w-5 h-5 opacity-60" />
        </button>
      </div>

      <!-- User Profile Card -->
      <div class="bg-white rounded-[32px] p-6 shadow-[0_20px_40px_rgba(0,0,0,0.06)] border border-white/50 mb-8 relative overflow-hidden">
         <!-- Premium Badge -->
         <div class="absolute top-0 right-0 bg-gradient-to-bl from-amber-200 to-amber-100 px-4 py-2 rounded-bl-3xl">
           <span class="text-[10px] font-black text-amber-600 tracking-wider">PREMIUM</span>
         </div>

         <div class="flex items-center gap-5">
           <div class="relative">
             <div class="w-20 h-20 rounded-full bg-gray-100 p-1 border-2 border-emerald-100">
               <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iNTAiIGN5PSI1MCIgcj0iNTAiIGZpbGw9IiNFNUU3RUIiLz48cGF0aCBkPSJNNTAgMjVDNTguMjg0MyAyNSA2NSAzMS43MTU3IDY1IDQwQzY1IDQ4LjI4NDMgNTguMjg0MyA1NSA1MCA1NUM0MS43MTU3IDU1IDM1IDQ4LjI4NDMgMzUgNDBDMzUgMzEuNzE1NyA0MS43MTU3IDI1IDUwIDI1Wk0yNSA4NUMyNSA3MS4xOTI5IDM2LjE5MjkgNjAgNTAgNjBDNjMuODA3MSA2MCA3NSA3MS4xOTI5IDc1IDg1SDI1WiIgZmlsbD0iIzEwQjk4MSIvPjwvc3ZnPg==" class="w-full h-full rounded-full" />
             </div>
             <!-- Level Badge -->
             <div class="absolute -bottom-1 -right-1 bg-gray-900 text-white text-[10px] font-bold px-2 py-0.5 rounded-full border-2 border-white">
               Lv.5
             </div>
           </div>
           <div>
             <h1 class="text-2xl font-black text-gray-900">Cai Xiao Xin</h1>
             <p class="text-xs text-gray-400 font-medium mt-1">厨房达人 | 加入第 128 天</p>
             <!-- Tags -->
             <div class="flex gap-2 mt-3">
               <span class="px-2 py-1 rounded-lg bg-emerald-50 text-emerald-600 text-[10px] font-bold">🥗 减脂中</span>
               <span class="px-2 py-1 rounded-lg bg-blue-50 text-blue-600 text-[10px] font-bold">🐟 鱼类爱好者</span>
             </div>
           </div>
         </div>
      </div>

      <!-- Health Score Dashboard (Aligned Grid) -->
      <div class="grid grid-cols-2 gap-4 mb-8">
        <!-- Main Score -->
        <div class="bg-gray-900 rounded-[32px] p-6 text-white relative overflow-hidden flex flex-col justify-between h-44 shadow-xl shadow-gray-200">
           <div class="absolute top-0 right-0 w-32 h-32 bg-emerald-500/20 rounded-full blur-3xl -mr-10 -mt-10"></div>
           
           <div class="flex justify-between items-start z-10">
             <div>
               <p class="text-xs text-gray-400 font-bold uppercase mb-1 tracking-wider">Health Score</p>
               <h2 class="text-5xl font-black text-emerald-400 tracking-tighter">92</h2>
             </div>
             <div class="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
               <span class="text-emerald-400 text-lg font-bold">↑</span>
             </div>
           </div>

           <div class="z-10 mt-auto">
             <div class="w-full bg-white/10 h-1.5 rounded-full mb-3 overflow-hidden">
               <div class="w-[92%] h-full bg-gradient-to-r from-emerald-500 to-teal-400 rounded-full"></div>
             </div>
             <p class="text-[10px] text-gray-400 leading-tight">击败 85% 用户，自律标杆！</p>
           </div>
        </div>

        <!-- Waste Stats (Redesigned) -->
        <div class="bg-white rounded-[32px] p-6 shadow-[0_10px_20px_rgba(0,0,0,0.04)] h-44 flex flex-col justify-between relative overflow-hidden border border-gray-50">
           <!-- Decor -->
           <div class="absolute -bottom-10 -right-10 w-32 h-32 bg-red-50 rounded-full mix-blend-multiply"></div>
           
           <div class="z-10">
              <div class="w-10 h-10 rounded-2xl bg-red-50 flex items-center justify-center text-xl mb-3">
                🗑️
              </div>
              <p class="text-xs text-gray-400 font-bold uppercase tracking-wider mb-1">浪费食材</p>
              <div class="flex items-baseline gap-1">
                 <h2 class="text-3xl font-black text-gray-900">2.4</h2>
                 <span class="text-sm text-gray-400 font-bold">kg</span>
              </div>
           </div>
           
           <div class="z-10">
              <div class="flex items-center gap-2 bg-red-50 rounded-lg px-2 py-1.5 w-fit">
                <span class="text-[10px] font-bold text-red-500">本周 +0.5kg</span>
                <span class="text-[10px] text-red-400">⚠️</span>
              </div>
           </div>
        </div>
      </div>

      <!-- Achievements Section -->
      <div class="mb-8">
        <div class="flex justify-between items-end mb-4 px-2">
          <h2 class="text-lg font-bold text-gray-900">成就勋章</h2>
          <span class="text-xs text-gray-400 font-bold flex items-center gap-1">
            查看全部 
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 18l6-6-6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </span>
        </div>

        <div class="bg-white rounded-[32px] p-5 shadow-[0_8px_20px_rgba(0,0,0,0.03)] border border-gray-50">
           <div class="flex justify-between px-2">
              <!-- Badge 1 -->
              <div class="flex flex-col items-center gap-2">
                 <div class="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-100 to-orange-50 flex items-center justify-center text-2xl shadow-sm border border-white ring-1 ring-orange-100">
                   🏆
                 </div>
                 <span class="text-[10px] font-bold text-gray-800">打卡王者</span>
              </div>
              <!-- Badge 2 -->
              <div class="flex flex-col items-center gap-2">
                 <div class="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-100 to-teal-50 flex items-center justify-center text-2xl shadow-sm border border-white ring-1 ring-emerald-100">
                   🌱
                 </div>
                 <span class="text-[10px] font-bold text-gray-800">环保先锋</span>
              </div>
              <!-- Badge 3 -->
              <div class="flex flex-col items-center gap-2 opacity-40 grayscale">
                 <div class="w-14 h-14 rounded-2xl bg-gray-100 flex items-center justify-center text-2xl border border-gray-50">
                   🍳
                 </div>
                 <span class="text-[10px] font-bold text-gray-400">中华小当家</span>
              </div>
              <!-- Badge 4 -->
              <div class="flex flex-col items-center gap-2 opacity-40 grayscale">
                 <div class="w-14 h-14 rounded-2xl bg-gray-100 flex items-center justify-center text-2xl border border-gray-50">
                   🧊
                 </div>
                 <span class="text-[10px] font-bold text-gray-400">囤货专家</span>
              </div>
           </div>
        </div>
      </div>

      <!-- Growth History (List) -->
      <div class="bg-white rounded-[32px] p-6 shadow-[0_8px_20px_rgba(0,0,0,0.03)] mb-8 border border-gray-50">
         <h2 class="text-lg font-bold text-gray-900 mb-6">成长足迹</h2>
         
         <div class="space-y-8 relative pl-2">
            <!-- Connector Line -->
            <div class="absolute left-[27px] top-3 bottom-3 w-0.5 bg-gray-100 rounded-full"></div>

            <!-- Item 1 -->
            <div class="flex gap-5 relative z-10 group">
               <div class="w-10 h-10 rounded-2xl bg-emerald-50 border-4 border-white shadow-sm flex items-center justify-center text-lg flex-shrink-0 z-10 group-hover:scale-110 transition-transform duration-300 ring-1 ring-gray-50">
                 🥗
               </div>
               <div class="py-1">
                 <div class="flex justify-between items-start w-full">
                    <h4 class="text-sm font-bold text-gray-900">吃掉 200g 菠菜</h4>
                    <span class="text-[10px] text-gray-300 font-bold bg-gray-50 px-2 py-0.5 rounded-md">12:30</span>
                 </div>
                 <p class="text-xs text-gray-400 mt-1 leading-relaxed">铁元素 +1，简直是大力水手转世！</p>
               </div>
            </div>

            <!-- Item 2 -->
            <div class="flex gap-5 relative z-10 group">
               <div class="w-10 h-10 rounded-2xl bg-orange-50 border-4 border-white shadow-sm flex items-center justify-center text-lg flex-shrink-0 z-10 group-hover:scale-110 transition-transform duration-300 ring-1 ring-gray-50">
                 🥕
               </div>
               <div class="py-1">
                 <div class="flex justify-between items-start w-full">
                    <h4 class="text-sm font-bold text-gray-900">达成 7 天低脂饮食</h4>
                    <span class="text-[10px] text-gray-300 font-bold bg-gray-50 px-2 py-0.5 rounded-md">昨天</span>
                 </div>
                 <p class="text-xs text-gray-400 mt-1 leading-relaxed">健康基石已筑牢，继续保持！</p>
               </div>
            </div>

            <!-- Item 3 -->
            <div class="flex gap-5 relative z-10 group">
               <div class="w-10 h-10 rounded-2xl bg-blue-50 border-4 border-white shadow-sm flex items-center justify-center text-lg flex-shrink-0 z-10 group-hover:scale-110 transition-transform duration-300 ring-1 ring-gray-50">
                 💧
               </div>
               <div class="py-1">
                 <div class="flex justify-between items-start w-full">
                    <h4 class="text-sm font-bold text-gray-900">补水站达标</h4>
                    <span class="text-[10px] text-gray-300 font-bold bg-gray-50 px-2 py-0.5 rounded-md">2月26日</span>
                 </div>
                 <p class="text-xs text-gray-400 mt-1 leading-relaxed">每日八杯水，皮肤水当当。</p>
               </div>
            </div>
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

<style>
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
