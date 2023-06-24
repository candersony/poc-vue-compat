import Vue from "vue";
import VueCompositionAPI from "@vue/composition-api";
import "./style.css";

Vue.use(VueCompositionAPI);
const app = new Vue({ el: "#vue2.6", template: "<div></div>" });
