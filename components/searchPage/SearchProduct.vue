<template>
  <section class="searchProduct" id="search">

    <div  class="conteniar">
      <div v-if="getSearch.length === 0" class="searchNotFound__box">
        <img
        loading="lazy"
          class="searchNotFound__box-img"
          src="../../assets/image/notFound.svg"
          alt="baleoni notFound"
        />
        <h1 class="searchNotFound__box-title"> 
          Sorğu üzrə
          <span class="searchNotFound__box-span"
            >“{{ $route.query.name }}”</span
          >
          heç bir nəticə tapılmadı
        </h1>
        <p class="searchNotFound__box-desc">
          Sorğunu dəyişdirmək üçün yenidən cəhd edin və ya məhsullar səhifəsinə
          keçid edin.
        </p>
        <div class="searchNotFound__box-div" >

        <a href="/products">
          <div class="searchNotFound__box-button">
            <span>Bütün məhsullar</span>
          </div>
        </a>
        </div>

        <div class="searchNotFound__beehavie1"></div>
        <div class="searchNotFound__beehavie2"></div>
      </div>
      <div v-else>
        <div class="searchProduct__box">
          <h2 class="searchProduct__box-title">
            <span class="searchProduct__box-span"
              >“{{ $route.query.name }}”</span
            >

            sorğusu üzrə {{ getPaginationSearch.totalItem }} nəticə tapılmışdır
          </h2>
          <div class="filter">
            <div class="filter__box">
              <div
                class="filter__fiterDrop filter__search"
              >
                <span @click="dropDown" class="filter__fiterDrop-span"
                  >
                  
                  <!-- {{
                    $route.query.filter === "desc"
                      ? "Bahadan Ucuza"
                      : "Ucuzdan Bahaya"
                  }} -->

                            {{ $route.query.filter === undefined ? "Sıralama" : $route.query.filter === 'asc' ? 'Ucuzdan Bahaya' : 'Bahadan Ucuza'  }}

                  <img
                  loading="lazy"
                    src="../../assets/image/icon/dropDownArrow.svg"
                    alt="filter baleoni"
                /></span>
                <div
                  :class="[
                    'filter__fiterDrop-box',
                    filterDropActive ? 'filterDropActive' : '',
                  ]"
                >
                  <ul class="filter__fiterDrop-list">
                    <li @click="featchDropDown('asc')">Ucuzdan Bahaya</li>
                    <li @click="featchDropDown('desc')">Bahadan Ucuza</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="homeProducts__flex">
          <div
            class="homeProducts__box"
            v-for="(HomeProduct, i) in getSearch"
            :key="i"
          >
            <div class="homeProducts__box-img">
              <!-- <img :src="HomeProduct.image" :alt="HomeProduct.name" /> -->

              <img loading="lazy" :src="HomeProduct.image" :alt="HomeProduct.name" />
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

            <p class="homeProducts__box-desc">
              {{ HomeProduct.description }}
            </p>
            <a :href="HomeProduct.link">
              <div class="homeProducts__box-order">
                <span>Sifariş ver</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      filterDropActive: false,
      selectItem: "Ucuzdan Bahaya",
    };
  },

 

  methods: {
    dropDown() {
      this.filterDropActive = !this.filterDropActive;
    },

    async featchDropDown(filter) {
      await this.$store.dispatch("products/fetchFilteredDropProducts", filter);

      let url = new URL(window.location);
      let params = new URLSearchParams(url);

      params.set("filter", filter);

      if (this.$route.query?.page) {
        params.set("page", this.getPagination.currentPage);
      }
      this.filterDropActive = false;
      if (filter === "desc") {
        this.selectItem = "Bahadan Ucuza";
      } else {
        this.selectItem = " Ucuzdan Bahaya";
      }
      this.$router.push({
        path: "search",
        query: {
          ...this.$route.query,
          filter: filter,
        },
      });
    },
  },

  watch: {
    $route(newValue) {
      let newValuePath = newValue.fullPath.split("?");
      if (Object.keys(newValue.query).length !== 0) {
        this.$store.dispatch(
          "products/getSearchResults",
          newValuePath[newValuePath.length - 1]
        );
        
      } else {
        this.$store.dispatch("products/getSearchResults");
      }
    },
  },

  computed: {
    ...mapGetters({
      getFilter: "filter/getFilter",
    }),
  },
  props: {
    getSearch: Array,
    getPaginationSearch: Object,
  },
};
</script>