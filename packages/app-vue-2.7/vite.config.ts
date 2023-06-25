import { defineConfig } from "vite";
import vueJsx from "@vitejs/plugin-vue2-jsx";

export default defineConfig({
  plugins: [vueJsx()],
  resolve: {
    alias: {
      vue:
        process.env.NODE_ENV === "production"
          ? "vue/dist/vue.min.js"
          : "vue/dist/vue.js",
    },
  },
});
