<template>
  <div >
    <Headline :getInits="getInits" />
    <div class="conteniar">
      <Hero />
      <From />
    </div> 
  </div>
</template>

<script>

import Headline from "./Headline.vue";
import Hero from "./Hero.vue";
import From from "./Form.vue";
import { mapGetters } from "vuex";

export default {
  components: {
    Headline,
    Hero,
    From,
  },

   computed: {
    ...mapGetters({
       getInits: "init/getInits",
    }),
  },

};
</script>
