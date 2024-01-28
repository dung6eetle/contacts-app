export default {
  namespaced: true,
  state: {
    role: "",
  },
  mutations: {
    setRole(state, payload) {
      console.log("localStorage", localStorage, payload);
      localStorage.setItem("role", payload);
      state.role = payload;
    },
  },
  actions: {},
  getters: {
    role(state) {
      return state.role;
    },
  },
};
