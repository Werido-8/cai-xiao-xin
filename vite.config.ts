import { defineConfig } from "vite";
import uni from "@dcloudio/vite-plugin-uni";
import { UnifiedViteWeappTailwindcssPlugin as uvtw } from "weapp-tailwindcss/vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    uni(),
    uvtw({
      rem2rpx: true,
      disabled: false,
      // specific configuration for weapp-tailwindcss if needed
    })
  ],
  css: {
    postcss: {
      plugins: [
        require("tailwindcss"),
        require("autoprefixer"),
      ],
    },
  },
});
