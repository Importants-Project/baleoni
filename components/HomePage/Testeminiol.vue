<template>
  <div class="testiminiol">
    <h1
      v-if="getInits.translation.testimonialTitle"
      class="testiminiol__title"
      :data-end="getInits.translation.testimonialTitle.split(' ').pop()"
    >
      {{ getInits.translation.testimonialTitle }}
    </h1>

    <h2 class="testiminiol__title" v-else :data-end="''.split(' ').pop()">
      {{ getInits.translation.testimonialTitle }}
    </h2>

    <div class="testiminiol_beekeep__beeHive"></div>

    <VueSlickCarousel ref="carousel" v-bind="settings">
      <div
        class="testiminiol__box"
        v-for="(testiminiol, i) in getInits.data.testimonials"
        :key="i"
      >
        <div class="testiminiol__box-img">
          <div class="beekeep__bihave mask">
            <!-- <img :src="testiminiol.image" :alt="testiminiol.full_name" class="mask" /> -->
            <img
              loading="lazy"
              :src="testiminiol.image"
              :alt="testiminiol.full_name"
              class="mask"
            />
          </div>
          <h2 class="testiminiol__box-name">{{ testiminiol.full_name }}</h2>
        </div>

        <div class="testiminiol__info">
          <img
            loading="lazy"
            class="testiminiol__info-quoteTop"
            src="../../assets/image/testiminiol/quoteTop.svg"
            :alt="getInits.translation.testimonialTitle"
          />
          <p class="testiminiol__box-desc">
            {{ testiminiol.comment }}
          </p>
          <img
            loading="lazy"
            class="testiminiol__info-quoteBottom"
            src="../../assets/image/testiminiol/quoteBottom.svg"
            :alt="getInits.translation.testimonialTitle"
          />
        </div>
      </div>
    </VueSlickCarousel>
    <div class="testiminiol__arrow">
      <span
        onselectstart="return false;"
        @click="showPrev"
        class="testiminiol__arrow-prev"
        ><img
          loading="lazy"
          onselectstart="return false;"
          src="../../assets/image/icon/beeHaveArrow.svg"
          :alt="getInits.translation.testimonialTitle"
      /></span>
      <span @click="showNext" class="testiminiol__arrow-next"
        ><img
          loading="lazy"
          onselectstart="return false;"
          src="../../assets/image/icon/beeHaveArrow.svg"
          :alt="getInits.translation.testimonialTitle"
      /></span>
    </div>
  </div>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
// import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
export default {
  components: {
    VueSlickCarousel,
  },
  data() {
    return {
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        speed: 500,
        dotsClass: "slick-dots testiminiol__arrow-dots",
        dots: true,
        arrows:false,
        infinite: true,

        responsive: [
          {
            breakpoint: 1250,
            settings: {
              slidesToShow: 1,
            },
          },
        ],
      },
    };
  },

  methods: {
    showNext() {
      this.$refs.carousel.next();
    },
    showPrev() {
      this.$refs.carousel.prev();
    },
  },

  props: {
    getInits: Object,
  },
};
</script>