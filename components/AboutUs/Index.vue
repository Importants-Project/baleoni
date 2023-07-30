<template>
  <div >
    <Headline :getAbout="getAbout"  />
    <div class="conteniar">
      <Mission :getAbout="getAbout" />
      <About  :getAbout="getAbout"/>
    </div>
  </div>
</template>

<script>
import Headline from "./Headline.vue";

import About from "./About.vue";
import Mission from "./Mission.vue";
import { mapGetters } from "vuex";

export default {
  components: {
    Mission,
    About,
    Headline,
  },

  computed: {
    ...mapGetters({
       getAbout: "about/getAbout",
    }),
  },
};
</script>
