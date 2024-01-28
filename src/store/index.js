import Vue from "vue";
import Vuex from "vuex";
import user from "./user";
import contacts from "./contacts";

Vue.use(Vuex);

let store = new Vuex.Store({
  modules: {
    user,
    contacts,
  },
});
export default store;
