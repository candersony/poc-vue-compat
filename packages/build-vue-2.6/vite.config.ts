import { defineConfig } from "vite";
import babel from "vite-plugin-babel";
import { resolve } from "path";

export default defineConfig({
  plugins: [
    babel({
      filter: /\.(jsx|tsx)?$/,
      babelConfig: {
        babelrc: false,
        configFile: false,
        presets: [["@vue/babel-preset-jsx", { compositionAPI: true }]],
      },
    }),
  ],
  resolve: {
    alias: {
      vue:
        process.env.NODE_ENV === "production"
          ? "vue/dist/vue.min.js"
          : "vue/dist/vue.js",
    },
  },
  optimizeDeps: {
    exclude: ["vue-demi"],
  },
  build: {
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: resolve(__dirname, "src/main.ts"),
      name: "component-library-vue-2.6",
      // the proper extensions will be added
      fileName: "component-library-vue-2.6",
      formats: ["es", "umd", "iife", "cjs"],
    },
    rollupOptions: {
      external: ["vue", "vue-demi"],
      output: {
        globals: {
          vue: "vue",
          "vue-demi": "vue-demi",
        },
      },
    },
  },
});
