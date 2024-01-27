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
      console.log("state", state);
      state.contacts = payload;
    },
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
