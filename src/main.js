import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import Tree from "vue2-org-tree";
import "vue2-org-tree/dist/style.css";

Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.use(Tree);

new Vue({
  el: "#app",
  router,
  render: (h) => h(App),
}).$mount("#app");
