<script setup lang="ts">
import { onLaunch, onShow, onHide } from "@dcloudio/uni-app";

onLaunch(() => {
  console.log("App Launch");
});

onShow(() => {
  console.log("App Show");
  // Hide native tabbar to show our custom one
  uni.hideTabBar();
});

onHide(() => {
  console.log("App Hide");
});
</script>

<style>
/* Global styles */
body {
  background-color: #F8FAFC;
}
</style>
