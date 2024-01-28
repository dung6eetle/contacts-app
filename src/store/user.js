export default {
  namespaced: true,
  state: {
    role: localStorage.getItem("role"),
  },
  mutations: {
    setRole(state, payload) {
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
