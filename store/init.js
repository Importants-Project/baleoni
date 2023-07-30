export const state = () => ({
    init: [],
  })
  
  export const actions = {
    fetchAllInit({ commit }) {
      return this.$axios
        .$get("/init")
        .then((data) => {
          commit("SETINITS", data);
        })
        .catch((err) => console.error(err));
    },
  }
  
  export const mutations = {
    SETINITS(state, data) {
      state.init = data;
    },
  }
  
  export const getters = {
    getInits({ init }) {
      return init;
    },
  }
  