<template>
  <section class="sertifikat">
    <div class="sertifikat__box">
      <div class="sertifikat__leftSide">
        <div class="sertifikat__beeHive1"></div>

        <div class="sertifikat__heroBox">
          <img 
            loading="lazy"
            class="sertifikat__heroBox-bg"
            src="../../assets/image/sertifikat/sertifikat.png"
            :alt="getCertificate.data.section1.title"
          />

          <VueSlickCarousel ref="carousel" v-bind="settings">
            <div
              class="sertifikat__heroBox-slider"
              v-for="(testiminiol, i) in getCertificate.data.section1.files"
              :key="i"
            >
              <img
                loading="lazy"
                :src="testiminiol.image"
                :alt="testiminiol.title"
                class="sertifikat__heroBox-slider-img"
              />

              <!-- <div class="testiminiol__info">
                <img
                  loading="lazy"
                  class="testiminiol__info-quoteTop"
                  src="../../assets/image/testiminiol/quoteTop.svg"
                  :alt="getInits.translation.testimonialTitle"
                />

                <img
                  loading="lazy"
                  class="testiminiol__info-quoteBottom"
                  src="../../assets/image/testiminiol/quoteBottom.svg"
                  :alt="getInits.translation.testimonialTitle"
                />
              </div> -->
            </div>
          </VueSlickCarousel>
      
        </div>
      </div>

      <div class="sertifikat__rightSide">
        <h1
          class="sertifikat__title"
          v-if="getCertificate.data.section1.title !== null"
          :data-end="getCertificate.data.section1.title.split(' ').pop()"
        >
          {{ getCertificate.data.section1.title }}
        </h1>

        <h2 class="sertifikat__title" v-else :data-end="''.split(' ').pop()">
          {{ getCertificate.data.section1.title }}
        </h2>
        <p class="sertifikat__desc">
          {{ getCertificate.data.section1.description }}
        </p>
        <div class="sertifikat__beeHive3"></div>
      </div>
    </div>
  </section>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
export default {
  components: {
    VueSlickCarousel,
  },
  data() {
    return {
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        dotsClass: "slick-dots sertifikat__arrow-dots",
        dots: true,
        arrows: false,

        autoplay: true,
        autoplaySpeed: 5000,
        pauseOnDotsHover: true,
        pauseOnFocus: true,
        pauseOnHover: true,
        responsive: [
          {
            breakpoint: 1250,
            settings: {
              slidesToShow: 2,
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
    getCertificate: Object,
  },
};
</script>