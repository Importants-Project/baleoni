<template>
  <div>
    <div class="conteniar">
      <Hero :getInits="getInits" />

      <BeeKeep :getInits="getInits" />
          <div class="beeSecond">
      <lottie
        :width="100"
        :height="100"
        :options="lottieOptions"
        :autoplay="true"
        :loop="true"
        v-on:animCreated="handleAnimation"
      />
    </div>
    </div>


    <div class="conteniar">
      <Farm :getInits="getInits" />

      <HomeProducts :getInits="getInits" />

      <Testeminiol :getInits="getInits" />

      <Video />
      <Info :getInits="getInits" />
    </div>
  </div>
</template>

<script>
import Hero from "./Hero.vue";
import BeeKeep from "./BeeKeep.vue";
import Farm from "./Farm.vue";
import HomeProducts from "./HomeProducts.vue";
import Testeminiol from "./Testeminiol.vue";
import Video from "./Video.vue";
import Info from "./Info.vue";
import { mapGetters } from "vuex";
import lottie from "vue-lottie/src/lottie.vue";
import * as animationData from "../../assets/image/jsonGif/second.json";
export default {
  data() {
    return {
      anim: null, // for saving the reference to the animation
      lottieOptions: { animationData: animationData.default },
    };
  },
  components: {
    Hero,
    BeeKeep,
    Farm,
    HomeProducts,
    Testeminiol,
    Video,
    Info,
    lottie,
  },
  methods: {
    handleAnimation: function (anim) {
      this.anim = anim;
    },
  },
  computed: {
    ...mapGetters({
      getInits: "init/getInits",
    }),
  },
};
</script>
