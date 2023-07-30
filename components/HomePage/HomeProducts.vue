<template>
  <section class="homeProducts" >
    <div>
      <h1
        class="homeProducts__title"
        v-if="getInits.translation.productTitle"
        :data-end="getInits.translation.productTitle.split(' ').pop()"
      >
        {{ getInits.translation.productTitle }}
      </h1>

      <h2 class="homeProducts__title" v-else :data-end="''.split(' ').pop()">
        {{ getInits.translation.productTitle }}
      </h2>

      <p class="homeProducts__subTitle">
        {{ getInits.translation.productDesc }}
      </p>
    </div>
    <div class="homeProducts__flex homeProducts__none">
      <div
        class="homeProducts__box"
        v-for="(HomeProduct, i) in getInits.data.products"
        :key="i"
      >
        <div class="homeProducts__box-img">
          <nuxt-img format="webp"  sizes="sm:100vw md:50vw lg:400px"  loading="lazy" :src="HomeProduct.image" :alt="HomeProduct.name" />
          <span
            :class="
              HomeProduct.discount
                ? 'homeProducts__box-discount'
                : 'homeProducts__box-none'
            "
            >{{ HomeProduct.discount ? "ENDIRIM" : "" }}</span
          >
        </div>

        <h2 class="homeProducts__box-title">{{ HomeProduct.name }}</h2>

        <span class="homeProducts__box-price">
          <span
            :class="
              HomeProduct.discount
                ? 'homeProducts__box-priceDiscount'
                : 'homeProducts__box-none'
            "
            >{{ HomeProduct.price }} AZN</span
          >
          {{ HomeProduct.discount_price }} AZN</span
        >

        <p class="homeProducts__box-desc hide-text">
          {{ HomeProduct.description }}
        </p>
      </div>
    </div>
    <div class="homeProducts__slider">
      <VueSlickCarousel v-bind="settings">
        <div
          class="homeProducts__box homeProductsSlider__box"
          v-for="(HomeProduct, i) in getInits.data.products"
          :key="i"
        >
          <div class="homeProducts__box-img">
            <nuxt-img format="webp"  sizes="sm:100vw md:50vw lg:400px"  loading="lazy" :src="HomeProduct.image" :alt="HomeProduct.name" />
            <span
              :class="
                HomeProduct.discount
                  ? 'homeProducts__box-discount'
                  : 'homeProducts__box-none'
              "
              >{{ HomeProduct.discount ? "ENDIRIM" : "" }}</span
            >
          </div>

          <h2 class="homeProducts__box-title">{{ HomeProduct.name }}</h2>

          <span class="homeProducts__box-price">
            <span
              :class="
                HomeProduct.discount
                  ? 'homeProducts__box-priceDiscount'
                  : 'homeProducts__box-none'
              "
              >{{ HomeProduct.price }} AZN</span
            >
            {{ HomeProduct.discount_price }} AZN</span
          >

          <p class="homeProducts__box-desc hide-text">
            {{ HomeProduct.description }}
          </p>
        </div>
      </VueSlickCarousel>
    </div>
    <a href="/products">
      <div class="homeProducts__buttonBox">
        <div class="homeProducts__button">
          <span>
            Məhsulları almaq üçün bura klik edin</span
          >
        </div>
      </div>
    </a>
  </section>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
//import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";

export default {
  components: { VueSlickCarousel },
  data() {
    return {
      settings: {
        centerPadding: "20px",
 infinite: true,


        slidesToShow: 1,
        slidesToScroll: 1,
        arrow: false,
        variableWidth: true,
      },
    };
  },

  props: {
    getInits: Object,
  },
};
</script>