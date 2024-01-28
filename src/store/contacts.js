import axios from "axios";
import { getFullName } from "@/helpers/getFullName";

export default {
  namespaced: true,
  state: {
    //data
    contacts: [],

    //sorting
    currentSort: "",
    currentGender: "",

    //filters
    name: "",
  },
  mutations: {
    setCurrentSort(state, payload) {
      state.currentSort = payload;
    },
    setCurrentGender(state, payload) {
      state.currentGender = payload;
    },
    setContacts(state, payload) {
      state.contacts = payload;
    },
    setProcessedResults(state, payload) {
      state.processedResults = payload;
    },
    setFilteredName(state, payload) {
      state.name = payload;
    },
    // задаю пол
    sortByMale(state) {
      state.currentGender = "male";
    },
    sortByFemale(state) {
      state.currentGender = "female";
    },
    //задаю сортировку
    sortByNameToTop(state) {
      state.currentSort = "top";
    },
    sortByNameToBottom(state) {
      state.currentSort = "bottom";
    },
    // ресеты
    reset(state) {
      state.currentSort = "";
    },
    resetCurrentGender(state) {
      state.currentGender = "";
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
          console.log("error", e);
        });
    },
  },
  getters: {
    nameFilter(state) {
      return state.name;
    },
    sortedResult(state) {
      if (state.currentSort === "top") {
        return state.contacts.toSorted((a, b) =>
          a.name.first.localeCompare(b.name.first)
        );
      }
      if (state.currentSort === "bottom") {
        return state.contacts.toSorted((a, b) =>
          b.name.first.localeCompare(a.name.first)
        );
      }
      return state.contacts;
    },
    currentGender(state) {
      return state.currentGender;
    },
    currentSort(state) {
      return state.currentSort;
    },
    contacts(state) {
      return state.contacts;
    },
    // геттер отфильтрованной коллекции
    processedResults(state, getters) {
      let results = getters.sortedResult;
      // если есть фильтр то фильтрую результат и перезаписываю
      if (state.currentGender) {
        results = results.filter((contact) => {
          return contact.gender === state.currentGender;
        });
      }
      if (state.name) {
        results = results.filter((contact) => {
          const fullName = getFullName({
            first: contact.name.first,
            last: contact.name.last,
          });
          return fullName.toLowerCase().includes(getters.nameFilter);
        });
      }
      return results;
    },
  },
};
