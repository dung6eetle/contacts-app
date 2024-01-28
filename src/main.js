import Vue from "vue";
import App from "./App.vue";
import store from "./store/index.js";
import router from "./router.js";
import VueClipboard from "vue-clipboard2";

Vue.config.productionTip = false;
Vue.prototype.$store = store;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");

Vue.use(VueClipboard);
