import { defineComponent, ref } from "vue-demi";

export default defineComponent({
  name: "App",
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    increment() {
      this.counter++;
    },
    decrement() {
      this.counter--;
    },
  },
  render() {
    const list = Array.from(Array(this.counter).keys()).map((i) => (
      <li key={i}>
        <a href="https://vuejs.org/" target="_blank">
          <img
            src="https://avatars.githubusercontent.com/u/6128107?s=200&v=4"
            class="logo vue"
            alt="Vue logo"
          />
          {i}
        </a>
      </li>
    ));

    return (
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="https://vitejs.dev/logo.svg" class="logo" alt="Vite logo" />
        </a>
        <button type="button" onClick={this.increment}>
          Increment
        </button>
        <button type="button" onClick={this.decrement}>
          Decrement
        </button>
        <p>{this.counter}</p>

        <ul>{list}</ul>
      </div>
    );
  },
});
