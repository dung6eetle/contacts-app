// import Vue from "vue";
// import Vuex from "vuex";
// import axios from "axios";

// Vue.use(Vuex);

// let store = new Vuex.Store({
//   modules: {},
//   state: {
//     contacts: [],
//     processedResults: [],
//   },
//   mutations: {
//     setContacts(state, payload) {
//       console.log("state", state, payload);
//       state.contacts = payload;
//     },
//     setProcessedResults(state, payload) {
//       state.processedResults = payload;
//     },
//     sortByNameToTop(state) {
//       state.processedResults = state.contacts.toSorted((a, b) =>
//         a.name.first.localeCompare(b.name.first)
//       );
//     },
//     sortByNameToBottom(state) {
//       state.processedResults = state.contacts.toSorted((a, b) =>
//         b.name.first.localeCompare(a.name.first)
//       );
//     },
//     reset(state) {
//       state.processedResults = state.contacts;
//     },
//   },
//   actions: {
//     getContacts({ commit }) {
//       axios
//         .get("https://randomuser.me/api/?results=200")
//         .then((contacts) => {
//           commit("setProcessedResults", contacts.data.results);
//           commit("setContacts", contacts.data.results);
//         })
//         .catch((e) => {
//           console.log("error get", e);
//         });
//     },
//   },
//   getters: {
//     contacts(state) {
//       return state.contacts;
//     },
//     processedResults(state) {
//       return state.processedResults;
//     },
//   },
// });

// export default store;
