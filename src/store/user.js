export default {
  namespaced: true,
  state: {
    role: "",
  },
  mutations: {
    setRole(state, payload) {
      localStorage.setItem("role", payload);
      state.role = payload;
    },
  },
  actions: {},
  getters: {
    user(state) {
      return state.user;
    },
  },
};
