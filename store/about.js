export const state = () => ({
    about: [],
  })
  
  export const actions = {
    fetchAllAbout({ commit }) {
      return this.$axios
        .$get("/about")
        .then((data) => {
          commit("SETABOUT", data);
        })
        .catch((err) => console.error(err));
    },
  }
  
  export const mutations = {
    SETABOUT(state, data) {
      state.about = data;
    },
  }
  
  export const getters = {
    aboutData: c => c.about,

    getAbout({ about }) {
      return about;
    },
  }
  