<template>
  <div >
    <SearchProduct :getSearch="getSearch" :getPaginationSearch="getPaginationSearch" />
    <Pagination :getPaginationSearch="getPaginationSearch"/>
  </div>
</template>

<script>
import Pagination from "./Pagination.vue";
import SearchProduct from "./SearchProduct.vue";
import { mapGetters } from "vuex";

export default {
  components: {
    SearchProduct,
    Pagination,
  },

  computed: {
    ...mapGetters({
      getSearch: "products/getSearch",
      getPaginationSearch: "products/getPaginationSearch",
    }),
  },
};
</script>
