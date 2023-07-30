<template>
  <div class="wrapper" >
    <Header  v-if="$nuxt.$route.name" />
    <Nuxt />
    <Footer v-if="$nuxt.$route.name" />
  </div>
</template>

<script>
import Header from "~/components/Header.vue";
import Footer from "~/components/Footer.vue";

export default {
  components: {
    Header,
    Footer,
  },

};
</script>