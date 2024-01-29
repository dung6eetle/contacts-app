import axios from "axios";
import { getFullName } from "@/helpers/getFullName";

export default {
  namespaced: true,
  state: {
    //data
    contacts: [],
    countries: [],

    //sorting
    currentSort: "",

    //filters
    name: "",
    currentGender: "",
    nationality: "",
  },
  mutations: {
    setCurrentSort(state, payload) {
      state.currentSort = payload;
    },
    setCurrentGender(state, payload) {
      if (state.currentGender === payload) {
        state.currentGender = "";
        return;
      }
      state.currentGender = payload;
    },
    setNat(state, payload) {
      state.nationality = payload;
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

    sortByNameToTop(state) {
      state.currentSort = "top";
    },
    sortByNameToBottom(state) {
      state.currentSort = "bottom";
    },
    reset(state) {
      state.currentSort = "";
    },
  },
  actions: {
    getContacts({ commit, state }) {
      axios
        .get("https://randomuser.me/api/?results=200")
        .then((contacts) => {
          commit("setContacts", contacts.data.results);
          state.countries = contacts.data.results.reduce((acc, contact) => {
            contact.nat;
            if (!acc.includes(contact.nat)) {
              acc.push(contact.nat);
            }
            return acc;
          }, []);
        })
        .catch((e) => {
          console.error("error", e);
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

    nationality(state) {
      return state.nationality;
    },
    countries(state) {
      return state.countries;
    },

    contacts(state) {
      return state.contacts;
    },
    // геттер отфильтрованной коллекции
    processedResults(state, getters) {
      let results = getters.sortedResult;
      // если есть фильтр то фильтрую результат и перезаписываю
      if (state.nationality) {
        results = results.filter((contacts) => {
          return contacts.nat === state.nationality;
        });
      }
      if (state.currentGender) {
        results = results.filter((contact) => {
          return contact.gender === state.currentGender;
        });
      }
      if (state.name) {
        results = results.filter((contact) => {
          // исключил mr/misis из поиска тк поиск по гендеру присутствует
          const fullName = getFullName({
            first: contact.name.first,
            last: contact.name.last,
          });
          return fullName
            .toLowerCase()
            .includes(getters.nameFilter.toLowerCase());
        });
      }
      return results;
    },
    // геттер статистики
    statistics(state) {
      const collectionSize = state.contacts.length;
      const maleCount = state.contacts.filter(
        (contact) => contact.gender === "male"
      ).length;
      const femaleCount = state.contacts.filter(
        (contact) => contact.gender === "female"
      ).length;
      const undecidedCount = state.contacts.filter(
        (contact) => !contact.gender
      ).length;
      const moreCommonGender =
        maleCount > femaleCount
          ? "males"
          : maleCount < femaleCount
          ? "females"
          : "equally";
      const nationalityCounts = state.contacts.reduce((counts, contact) => {
        const nationality = contact.nat;
        counts[nationality] = (counts[nationality] || 0) + 1;
        return counts;
      }, {});
      return {
        collectionSize,
        maleCount,
        femaleCount,
        undecidedCount,
        moreCommonGender,
        nationalityCounts,
      };
    },
  },
};
