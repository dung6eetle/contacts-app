export default {
  namespaced: true,
  state: {
    role: localStorage.getItem("role"),
    isGrid: localStorage.getItem("isGrid"),
  },
  mutations: {
    setRole(state, payload) {
      localStorage.setItem("role", payload);
      state.role = payload;
    },
    setVision(state) {
      if (!localStorage.getItem("isGrid")) {
        localStorage.setItem("isGrid", "1");
        state.isGrid = "1";
      } else {
        state.isGrid = "";
        localStorage.removeItem("isGrid");
      }
    },
  },
  actions: {},
  getters: {
    role(state) {
      return state.role;
    },
    isGrid(state) {
      return state.isGrid;
    },
  },
};
