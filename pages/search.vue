<template>
  <Index />
</template>

<script>
import Index from "../components/searchPage/Index.vue";
export default {
  components: {
    Index, 
  },

  async asyncData({ store, query, route }) {
    if (Object.keys(query).length !== 0) {
      let path = route.fullPath.split("?");
      await store.dispatch("products/getSearchResults", path[path.length - 1]);
    } else {
      await store.dispatch("products/getSearchResults");
    }
  },
};
</script>
