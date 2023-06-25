import Vue from "vue";

declare module "vue/types/vue" {
  interface Vue extends Vue {
    $t(key: string): string;
  }
}
