import Vue, { VNode } from "vue-demi";

declare module "vue/types/vue" {
  interface Vue extends Vue {
    $t(key: string): string;
  }
}

declare global {
  namespace JSX {
    interface Element extends VNode {}
    interface ElementClass extends Vue {}
    interface IntrinsicElements {
      [elem: string]: any;
    }
  }
}
