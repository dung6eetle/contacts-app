import Vue from "vue";
import App from "./App.vue";
import store from "./store.js";
import axios from "axios";
import router from "./router.js";
import moment from "moment";
import VueClipboard from "vue-clipboard2";

Vue.config.productionTip = false;
Vue.prototype.axios = axios;
Vue.prototype.$store = store;
Vue.prototype.moment = moment;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");

Vue.use(VueClipboard);
