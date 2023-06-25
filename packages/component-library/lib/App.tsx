import { defineComponent } from "vue-demi";

export default defineComponent({
  name: "App",
  render() {
    return (
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="https://vitejs.dev/logo.svg" class="logo" alt="Vite logo" />
        </a>
        <a href="https://vuejs.org/" target="_blank">
          <img src="https://avatars.githubusercontent.com/u/6128107?s=200&v=4" class="logo vue" alt="Vue logo" />
        </a>
      </div>
    );
  },
});
