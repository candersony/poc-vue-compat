import Vue from "vue";
import VueCompositionAPI from "@vue/composition-api";
import { App } from "component-library";

Vue.use(VueCompositionAPI);
Vue.component("App", App);
const app = new Vue({ el: "#vue26", template: "<App />" });
