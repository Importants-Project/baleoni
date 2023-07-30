export const state = () => ({
  filter: [],
  pagFilter: [],
  
});

export const actions = {
  fetchAllFilter({ commit }) {
    return this.$axios
      .$get("/tags")
      .then((data) => {
        commit("SETFILTER", data.data);
      })
      .catch((err) => console.error(err));
  },

};

export const mutations = {
  SETFILTER(state, data) {
    state.filter = data;
  },

  setPagination(state, data) {
    state.pagFilter = data;
  },

};

export const getters = {
  getFilter({ filter }) {
    return filter;
  },


  getFilterPag({ pagFilter }) {
    return pagFilter;
  },
};





//   slugFilter: [],

//   fetchFilterSlug({ commit }, query) {
//     return this.$axios
//       .$get(`/tag/${query}`)
//       .then((data) => {
//         commit("SET_FILTER_SLUG", data.data);
//         commit("setPagination", {
//           firstPage: data.links.first,
//           currentPage: data.meta.current_page,
//           path: data.meta.path + "?page=",
//           fromPage: data.meta.from,
//           toPage: data.meta.to,
//           nextPage: data.links.next,
//           prevPage: data.links.prev,
//           lastPage: data.meta.last_page,
//           totalItem: data.meta.total,
//           Perpage: data.meta.per_page,
//           url: data.links.url,
//         });
//       })

//       .catch((err) => console.error(err));
//   },



//   SET_FILTER_SLUG(state, data) {
//     state.slugFilter = data;
//   },


//   getFilterSlug({ slugFilter }) {
//     return slugFilter;
//   },