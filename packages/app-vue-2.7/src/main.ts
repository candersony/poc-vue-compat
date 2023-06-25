import Vue from "vue";
import "./style.css";
import { App } from "component-library";

Vue.component("App", App);
const app = new Vue({ el: "#mfe1", template: "<App />" });
