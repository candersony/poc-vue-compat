import { defineConfig } from "vite";
import babel from "vite-plugin-babel";
import path from "path";

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
      i18n: path.resolve("./resources/js/services/i18n.ts"),
    },
  },
});
