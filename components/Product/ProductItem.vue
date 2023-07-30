<template>
  <section id="product">
    <div
      v-if="getProducts.length === 0"
      class="searchNotFound__box productNotFound"
    >
      <h1 class="searchNotFound__box-title">
        Təəssüflər olsun ki,
        <span class="searchNotFound__box-span">"Hədiyyəlik dəstlər"</span>
        kateqoriyası üzrə məhsullar bitib.
      </h1>
 <nuxt-link to="/products">
      <div class="searchNotFound__box-button" style="margin-top: 20px">
       Bütün məhsullar
      </div>
      </nuxt-link>
    </div>

    <div v-else class="homeProducts__flex">
      <div
        class="homeProducts__box"
        v-for="(HomeProduct, i) in getProducts "
        :key="i"
      >
        <div class="homeProducts__box-img">
          <!-- <img :src="HomeProduct.image" :alt="HomeProduct.name" /> -->
          <img loading="lazy"     :src="HomeProduct.image" :alt="HomeProduct.name" />

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

        <div >
          <p class="homeProducts__box-desc">
            {{ HomeProduct.description }}
          </p>
        </div>

        <a target="__blank" :href="HomeProduct.link">
          <div class="homeProducts__box-order">
            <span> Sifariş ver</span>
          </div>
        </a>
      </div>
      
    </div>
    <Pagination />
  </section>
</template>

<script>
import Pagination from "./Pagination.vue";

export default {
  components: {
    Pagination,
  },
  props: {
    getProducts: Array,
    getFilterSlug: Array,
  },
};
</script>
