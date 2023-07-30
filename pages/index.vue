<template>
  <HomePage />
</template>

<script>
import HomePage from "~/components/HomePage/Index.vue";

export default {
  name: "IndexPage",
  components: {
    HomePage,
  },
  async asyncData({ store }) {
    await store.dispatch("init/fetchAllInit");
  },
};
</script>
