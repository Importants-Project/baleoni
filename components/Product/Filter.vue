<template>
  <section class="filter">
    <div class="filter__box">
      <div class="filter__tab">
        <span
          @click="fetchProducts"
          :class="getFilter.slug === $route.query.tag ? 'filterActive' : ''"
        >
          Bütün məhsullar</span
        >
        <span
          :class="{ filterActive: filter.slug === $route.query.tag }"
          v-for="filter in getFilter"
          :key="filter.id"
          @click="clicikTab(filter.slug)"
        >
          {{ filter.name }}
        </span>
      </div>

      <div class="filter__fiterDrop">
        <span @click="dropDown" class="filter__fiterDrop-span">
          <!-- {{ $route.query.filter === 'desc'  ? 'Bahadan Ucuza' : 'Ucuzdan Bahaya' }} -->
          {{ $route.query.filter === undefined ? "Sıralama" : $route.query.filter === 'asc' ? 'Ucuzdan Bahaya' : 'Bahadan Ucuza'  }}

          <img
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
  </section>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  mounted() {
    console.log(this.$route.query.filter);
  },
  data() {
    return {
      filterDropActive: false,
      filterText: "",
    };
  },
  methods: {
    dropDown() {
      this.filterDropActive = !this.filterDropActive;
    },
    async fetchProducts() {
      //   this.$router.replace({ query: null });
      //   await this.$store.dispatch("products/fetchAllProducts");

      let url = new URL(window.location);
      let params = new URLSearchParams(url);

      if (this.$route.query?.page) {
        params.set("page", this.getPagination.currentPage);
      }

      this.$router.push({
        path: "products",
        // query: {
        //   ...this.$route.query,
        // },
      });
    },
    async featchDropDown(filter) {
      let url = new URL(window.location);
      let params = new URLSearchParams(url);

      params.set("filter", filter);

      this.filterDropActive = false;

      this.$router.push({
        path: "products",
        query: {
          ...this.$route.query,
          filter: filter,
        },
      });
    },
    async clicikTab(data) {
      let url = new URL(window.location);
      let params = new URLSearchParams(url.search);
      params.set("tag", data);

      if (this.$route.query?.page) {
        params.set("page", this.getPagination.currentPage);
      }

      this.$router.push({
        path: "products",
        query: { ...this.$route.query, tag: data },
      });
    },
  },

  async fetch() {
    await this.$store.dispatch("filter/fetchAllFilter");
  },

  watch: {
    $route(newValue) {
      let newValuePath = newValue.fullPath.split("?");
      if (Object.keys(newValue.query).length !== 0) {
        this.$store.dispatch(
          "products/fetchFilteredProducts",
          newValuePath[newValuePath.length - 1]
        );
      } else {
        this.$store.dispatch("products/fetchFilteredProducts");
      }
    },
  },
  computed: {
    ...mapGetters({
      getFilter: "filter/getFilter",
      getPagination: "products/getPagination",
    }),
  },
};
</script>