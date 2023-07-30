<template>
  <PrItemoducts />
</template>

<script>
import PrItemoducts from "../components/Product/Index.vue";
export default {
  components: {
    PrItemoducts,
  },

  async asyncData({ store, query, route }) {
    if (Object.keys(query).length !== 0) {
      let path = route.fullPath.split("?");
      await store.dispatch("products/fetchAllProducts",  path[path.length - 1]);

      await store.dispatch(
        "filter/fetchAllFilter",
        path[path.length - 1]
      );
      await store.dispatch(
        "products/fetchFilteredProducts",
        path[path.length - 1]
      );
      await store.dispatch(
        "products/fetchFilteredDropProducts",
        path[path.length - 1]
      );
    } else {
      await store.dispatch("products/fetchAllProducts");
    }

    await store.dispatch("init/fetchAllInit");
  },
};
</script>