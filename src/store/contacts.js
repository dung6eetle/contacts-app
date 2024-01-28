import axios from "axios";
import { getFullName } from "@/helpers/getFullName";

export default {
  namespaced: true,
  state: {
    //data
    contacts: [],

    //sorting
    currentSort: "",
    // currentGender: "",

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
      console.log("state", state, payload);
      state.contacts = payload;
    },
    setProcessedResults(state, payload) {
      state.processedResults = payload;
    },

    // sortByMale(state) {
    //   state.currentGender = "male";
    // },
    // sortByFemale(state) {
    //   state.currentGender = "female";
    // },

    sortByNameToTop(state) {
      state.currentSort = "top";
    },
    sortByNameToBottom(state) {
      state.currentSort = "bottom";
    },

    setFilteredName(state, payload) {
      console.log(payload, "payload");
      // мы проверяем если пустая строка то вырубаем фильтр
      state.name = payload;
    },
    reset(state) {
      state.currentSort = "";
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
      // if (state.currentGender === "male") {
      //   console.log(
      //     "1",
      //     state.contacts.filter((contact) => {
      //       console.log("contact.gender", contact.gender);
      //       contact.gender === state.currentGender;
      //     })
      //   );
      //   return state.contacts.filter((contact) => {
      //     contact.gender === state.currentGender;
      //   });
      // }
      // if (state.currentGender === "female") {
      //   return state.contacts.filter((contact) => {
      //     contact.gender === state.currentGender;
      //   });
      // }

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
    processedResults(state, getters) {
      let results = getters.sortedResult;
      // если есть фильтр то фильтруем результат и перезаписываем
      if (state.name) {
        results = results.filter((contact) => {
          const fullName = getFullName({
            first: contact.name.first,
            last: contact.name.last,
          });
          return fullName.toLowerCase().includes(getters.nameFilter);
          // && appliedGender
        });
      }
      // если добавлю еще фильтр то отфильтрую и по нему
      return results;
    },
  },
};
