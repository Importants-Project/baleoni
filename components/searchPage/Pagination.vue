<template>
  <div class="conteniar">
    <a href="#search">
      <div class="pagination" v-if="getPaginationSearch.lastPage > 1">
        <div
          :class="[
            'pagination__prev',
            getPaginationSearch.currentPage > 1 ? '' : 'pagination__end',
          ]"
          @click="gotoPage(getPaginationSearch.currentPage - 1)"
        >
          <img loading="lazy" src="../../assets/image/icon/arrow.svg" alt="baleoni arrow" />
        </div>

        <div class="pagination__num">
          <div
            v-for="(pageNumber, i) in getPaginationSearch.lastPage"
            :key="i"
            @click="gotoPage(pageNumber)"
            :class="[
              'pagination__num-pag',
              { active: getPaginationSearch.currentPage === pageNumber },
            ]"
          >
            <span>{{ pageNumber }}</span>
          </div>
        </div>
        <div
          :class="[
            'pagination__next',
            getPaginationSearch.lastPage > getPaginationSearch.currentPage
              ? ''
              : 'pagination__end',
          ]"
          @click="gotoPage(getPaginationSearch.currentPage + 1)"
        >
          <img  loading="lazy" src="../../assets/image/icon/arrow.svg" alt="baleoni arrow" />
        </div>
      </div>
    </a>

    <div class="searchNotFound__bg">
      <h1 class="searchNotFound__bg-text">
        Balınızı bizə <br />
        etibar edin!
      </h1>
    </div>
  </div>
</template>
 
<script>
export default {
  methods: {
    async gotoPage(page) {
      await this.$store.dispatch("products/getSearchResults", page);
      this.$router.push({
        path: "search",
        query: { ...this.$route.query, page: page },
      });
    },
  },
  props: {
    getPaginationSearch: Object,
  },
};
</script>
