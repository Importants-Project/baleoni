export const state = () => ({
    certificate: [],
  })
  
  export const actions = {
    fetchAllCertificate({ commit }) {
      return this.$axios
        .$get("/certificate")
        .then((data) => {
          commit("SETCERTIFICATE", data);
        })
        .catch((err) => console.error(err));
    },
  }
  
  export const mutations = {
    SETCERTIFICATE(state, data) {
      state.certificate = data;
    },
  }
  
  export const getters = {
    certificateData: c => c.certificate,

    getCertificate({ certificate }) {
      return certificate;
    },
  }
  