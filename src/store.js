import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

let store = new Vuex.Store({
  state: {
    contacts: [],
    processedResults: [],
  },
  mutations: {
    setContacts(state, payload) {
      console.log("state", state, payload);
      state.contacts = payload;
    },
    sortByNameToTop(state) {
      state.contacts.sort((a, b) => a.name.first.localeCompare(b.name.first));
    },
    sortByNameToBottom(state) {
      state.contacts.sort((a, b) => b.name.first.localeCompare(a.name.first));
    },
  },
  actions: {
    getContacts({ commit }) {
      axios
        .get("https://randomuser.me/api/?results=200")
        .then((contacts) => {
          commit("setContacts", contacts.data.results);
        })
        .catch((e) => {
          console.log("error get", e);
        });
    },
  },
  getters: {
    contacts(state) {
      return state.contacts;
    },
  },
});

export default store;
