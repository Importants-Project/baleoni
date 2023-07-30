<template>
<AboutUs/>
</template>

<script>
import AboutUs from '~/components/AboutUs/Index.vue';

export default {
  name: 'AboutUsPage',
  components:{
    AboutUs
  },
  async asyncData({  store }) {
        await store.dispatch("about/fetchAllAbout");
  },
}
</script>
