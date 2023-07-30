<template>
  <a @click="scrollToTop">
    <div class="pagination" v-if="getPagination.lastPage > 1">
      <div
        :class="[
          'pagination__prev',
          getPagination.currentPage > 1 ? '' : 'pagination__end',
        ]"
        @click="gotoPage(getPagination.currentPage - 1)"
      >
        <img
        loading="lazy"
          style="margin: 0 5px 0 0"
          src="../../assets/image/icon/arrow.svg"
          alt="baleoni arrow "
        />
      </div>
      <div class="pagination__num">
        <div
          v-for="(pageNumber, i) in getPagination.lastPage"
          @click="gotoPage(pageNumber)"
          :class="[
            'pagination__num-pag',
            { active: getPagination.currentPage === pageNumber },
          ]"
          :key="i"
        >
          <span>{{ pageNumber }}</span>
        </div>
      </div>

      <div
        :class="[
          'pagination__next',
          getPagination.lastPage > getPagination.currentPage
            ? ''
            : 'pagination__end',
        ]"
        @click="gotoPage(getPagination.currentPage + 1)"
      >
        <img
        loading="lazy"
          style="margin: 0 3px 0 0"
          src="../../assets/image/icon/arrow.svg"
          alt="baleoni arrow"
        />
      </div>
    </div>
  </a>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  methods: {
     scrollToTop() {
      window.scrollTo({ top: 200 });
    },
    async gotoPage(page) {
      let url = new URL(window.location);
      let params = new URLSearchParams(url);

      if (this.$route.query?.page) {
        params.set("page", this.getPagination.currentPage);
      }

      await this.$store.dispatch("products/fetchAllProducts", page);
      this.$router.push({
        path: "products",
        query: { ...this.$route.query, page: page },
      });


    },
  },

  computed: {
    ...mapGetters({
      getPagination: "products/getPagination",
    }),
  },
};
</script>
