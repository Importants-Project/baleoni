<template>
  <section class="farm">
    <div>
      <h1
        v-if="getInits.translation.economic !== null"
        :data-end="getInits.translation.economic.split(' ').pop()"
        class="farm__title"
      >
        {{ getInits.translation.economic }}
      </h1>
      <h2 v-else :data-end="''.split(' ').pop()" class="farm__title">
        {{ getInits.translation.economic }}
      </h2>
      <div class="farm_beekeep__beeHive"></div>
      <div class="farm__flex">
        <div
          class="farm__box"
          v-for="(farm, i) in getInits.data.economics"
          :key="i"
        >
          <div class="farm__box-img">
            <nuxt-img
              format="webp"
              sizes="sm:100vw md:50vw lg:400px"
              loading="lazy"
              class="farm__box-img-logo"
              :src="farm.image"
              :alt="farm.name"
            />
            <nuxt-img
              format="webp"
              sizes="sm:100vw md:50vw lg:400px"
              loading="lazy"
              :src="farm.icon"
              :alt="farm.name"
              class="farm__box-icon"
            />
          </div>

          <h2 class="farm__box-title">{{ farm.name }}</h2>
          <p class="farm__box-desc">
            {{ farm.description }}
          </p>
        </div>
      </div>

      <div class="farm__slider">
        <VueSlickCarousel v-bind="settingsFarm">
          <div
            class="farm__box"
            v-for="(farm, i) in getInits.data.economics"
            :key="i"
          >
            <div class="farm__box-img">
              <nuxt-img
                format="webp"
                sizes="sm:100vw md:50vw lg:400px"
                loading="lazy"
                class="farm__box-img-logo"
                :src="farm.image"
                :alt="farm.name"
              />
              <nuxt-img
                format="webp"
                sizes="sm:100vw md:50vw lg:400px"
                loading="lazy"
                :src="farm.icon"
                :alt="farm.name"
                class="farm__box-icon"
              />
            </div>

            <h2 class="farm__box-title">{{ farm.name }}</h2>
            <p class="farm__box-desc">
              {{ farm.description }}
            </p>
          </div>
        </VueSlickCarousel>
      </div>
    </div>
  </section>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
 import "vue-slick-carousel/dist/vue-slick-carousel.css";
// optional style for arrows & dots
//import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";

export default {
  components: { VueSlickCarousel },

  data() {
    return {
      settingsFarm: {
         centerPadding: "20px",

        slidesToShow: 1,
        slidesToScroll: 1,
              infinite: true,


         variableWidth: true,
      },
    };
  },

  props: {
    getInits: Object,
  },
};
</script>
