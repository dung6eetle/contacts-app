import axios from "axios";
import { getFullName } from "@/helpers/getFullName";

export default {
  namespaced: true,
  state: {
    //data
    contacts: [],

    //sorting
    currentSort: "",
    //filters

    name: "",
  },
  mutations: {
    setCurrentSort(state, payload) {
      state.currentSort = payload;
    },
    setContacts(state, payload) {
      console.log("state", state, payload);
      state.contacts = payload;
    },
    setProcessedResults(state, payload) {
      state.processedResults = payload;
    },
    sortByNameToTop(state) {
      // вынести сортировку в хелпер
      state.currentSort = "top";
      // state.processedResults = state.contacts.toSorted((a, b) =>
      //   a.name.first.localeCompare(b.name.first)
      // );
    },
    sortByNameToBottom(state) {
      // вынести сортировку в хелпер
      state.currentSort = "bottom";

      // state.processedResults = state.contacts.toSorted((a, b) =>
      //   b.name.first.localeCompare(a.name.first)
      // );
    },
    setFilteredName(state, payload) {
      console.log(payload, "payload");
      // мы проверяем если пустая строка то вырубаем фильтр

      state.name = payload;
    },
    reset(state) {
      state.currentSort = "";

      // state.processedResults = state.contacts;
    },
  },
  actions: {
    // filterByName({ getters, commit }, name) {
    //   if (!name) {
    //     commit("setActiveFilter", false);
    //     return;
    //   }

    //   const filtered = getters.sortedResult.filter((contact) => {
    //     const fullName = getFullName({
    //       first: contact.name.first,
    //       last: contact.name.last,
    //     });
    //     return fullName.includes(name);
    //   });

    //   console.log("filtered", filtered);
    //   commit("setProcessedResults", filtered);
    //   commit("setActiveFilter", true);
    // },
    getContacts({ commit }) {
      axios
        .get("https://randomuser.me/api/?results=200")
        .then((contacts) => {
          // commit("setProcessedResults", contacts.data.results);
          commit("setContacts", contacts.data.results);
        })
        .catch((e) => {
          console.log("error get", e);
        });
    },
  },
  getters: {
    // isFilterActive(state) {
    //   console.log("state name", state.isFilterActive);
    //   return Boolean(state.name);
    // },
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
    currentSort(state) {
      return state.currentSort;
    },
    contacts(state) {
      return state.contacts;
    },
    processedResults(state, getters) {
      let results = getters.sortedResult;
      // если есть фильтр то фильтруем результат и перезаписываем
      if (state.name) {
        results = results.filter((contact) => {
          const fullName = getFullName({
            first: contact.name.first,
            last: contact.name.last,
          });
          return fullName.includes(getters.nameFilter);
          // && appliedGender
        });
      }
      // если добавлю еще фильтр то отфильтрую и по нему
      return results;
    },
  },
};
