import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

let store = new Vuex.Store({
  state: {
    contacts: [],
  },
  mutations: {
    SET_CONTACTS(state, payload) {
      console.log("state", state, payload);
      state.contacts = payload;
    },
    SORT_BY_NAME_TO_TOP(state) {
      state.contacts.sort((a, b) => a.name.first.localeCompare(b.name.first));
    },
    SORT_BY_NAME_TO_BOTTOM(state) {
      state.contacts.sort((a, b) => b.name.first.localeCompare(a.name.first));
    },
    // должна быть кнопка скидывающая сортировку или можно просто заного коллекцию просить но это как то не оч подход
  },
  actions: {
    GET_CONTACTS({ commit }) {
      axios
        .get("https://randomuser.me/api/?results=200")
        .then((contacts) => {
          commit("SET_CONTACTS", contacts.data.results);
        })
        .catch((e) => {
          console.log("error get", e);
        });
    },
  },
  getters: {
    CONTACTS(state) {
      return state.contacts;
    },
  },
});

export default store;
