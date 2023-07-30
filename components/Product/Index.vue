<template>
  <div >
    <Headline :getInits="getInits" />

    <div class="conteniar">
      <FilterItem />
      <ProductItem :getProducts="getProducts" />
    </div>
  </div>
</template>

<script>
import ProductItem from "./ProductItem.vue";
import FilterItem from "./Filter.vue";
import { mapGetters } from "vuex";
import Headline from "./Headline.vue";

export default {
  components: {
    ProductItem,
    Headline,
    FilterItem,
  },

  computed: {
    ...mapGetters({
      getProducts: "products/getProducts",
      getInits: "init/getInits",
    }),
  },
};
</script>