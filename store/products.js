export const state = () => ({
  products: [],
  pag: {},
  pagSearch:[],
  searchProducts: [],
  peoductDropFilter:[],
  slug: ''
});

export const actions = {
  fetchAllProducts({ commit }, query="") {
    return this.$axios
      .$get(`/products?${query}`)
      .then((data) => {
        commit("SETPRODUCTS", data.data);
        commit("setPagination", {
          firstPage: data.links.first,
          currentPage: data.meta.current_page,
          path: data.meta.path + "?" + query,
          fromPage: data.meta.from,
          toPage: data.meta.to,
          nextPage: data.links.next,
          prevPage: data.links.prev,
          lastPage: data.meta.last_page,
          totalItem: data.meta.total,
          Perpage: data.meta.per_page,
          url: data.links.url,
        });
      })
      .catch((err) => console.error(err));
  },

  fetchFilteredDropProducts({ commit, state }, query) {
    return this.$axios
      .$get(`/products?${state.slug}&${query}`)
      .then((data) => {
        commit("SET_FILTERED_DROP_PRODUCTS", data.data);
        commit("setPagination", {
          firstPage: data.links.first,
          currentPage: data.meta.current_page,
          path: data.meta.path + "?" + query,
          fromPage: data.meta.from,
          toPage: data.meta.to,
          nextPage: data.links.next,
          prevPage: data.links.prev,
          lastPage: data.meta.last_page,
          totalItem: data.meta.total,
          Perpage: data.meta.per_page,
          url: data.links.url,
        });
      })
      .catch((err) => console.error(err));
  },

  fetchFilteredProducts({ commit }, query) {
    commit("SET_SLUG", query);
    return this.$axios
      .$get(`products?${query}`)
      .then((data) => {
        commit("SET_FILTERED_PRODUCTS", data.data);
        commit("setPagination", {
          firstPage: data.links.first,
          currentPage: data.meta.current_page,
          path: data.meta.path + "?" + query,
          fromPage: data.meta.from,
          toPage: data.meta.to,
          nextPage: data.links.next,
          prevPage: data.links.prev,
          lastPage: data.meta.last_page,
          totalItem: data.meta.total,
          Perpage: data.meta.per_page,
          url: data.links.url,
        });
      })
      .catch((err) => console.error(err));
  },



  getSearchResults({ commit }, query = "") {
    return this.$axios
      .$get(`/search?${query}`)
      .then((data) => {
        commit("returnResults", data.data);
        commit("setPaginationSearch", {
          firstPage: data.links.first,
          currentPage: data.meta.current_page,
          path: data.meta.path + "?" + query,
          fromPage: data.meta.from,
          toPage: data.meta.to,
          nextPage: data.links.next,
          prevPage: data.links.prev,
          lastPage: data.meta.last_page,
          totalItem: data.meta.total,
          Perpage: data.meta.per_page,
        });
      })
      .catch((err) => console.error(err));
  },
};

export const mutations = {
    SET_SLUG(state, data) {
        state.slug = data;
      },

  SETPRODUCTS(state, data) {
    state.products = data;
    state.searchProducts = data;
  },

  SET_FILTERED_DROP_PRODUCTS(state, data){
    state.products = data;
  },

  SET_FILTERED_PRODUCTS(state, data) {
    state.products = data;
  },

  returnResults(state, results) {
   state.searchProducts=results;
  },

  setPagination(state, pag) {
    state.pag = pag;
  },

  setPaginationSearch(state, pag) {
    state.pagSearch = pag;
  },
};

export const getters = {
  getProducts({ products }) {
    return products;
  },

  getSlug({ slug }) {
    return slug;
  },

  getPagination({ pag }) {
    return pag;
  },

  getProductDropFilter({products}){
   return products
  },

  getPaginationSearch({ pagSearch }) {
    return pagSearch;
  },
  
  getSearch({ searchProducts }) {
    return searchProducts;
  },

  
};
