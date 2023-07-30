          
<template>
  <form class="header__form" id="header__form" @submit.prevent="goNews(term)">

    <Load  v-if="pendig" />

    <div v-else class="header__form--box">
      <label id="tac" for="search"></label>
      <input
        aria-label="tac"
        autocomplete="off"
        type="text"
        v-model.trim="term"
        name="search"
        :id="idInput"
        maxlength="255"
        @click.stop
        @keyup.enter="activeLongSearch"
        :placeholder="longSerch ? 'Axtarış...' : ''"
        :class="longSerch ? 'active' : ''"
        :disabled="disabled == 1"
      />

      <img
        loading="lazy"
        :id="idIcon"
        class="icon"
        @click.stop="activeLongSearch"
        src="~/assets/image/headerSearch.svg"
        alt="baleoni search"
      />
    </div>



  </form>
</template>

<script>
import { mapGetters } from "vuex";
import Load from './Loainding.vue'

export default {
  props: ["idIcon", "idInput"],
 components:{
    Load
  },
  data() {
    return {
      disabled: 0,
      term: "",
      longSerch: false,
      pendig: false,
    };
  },

  mounted() {
    window.addEventListener("click", this.closeSearch);
    document.getElementById("searchIcon").addEventListener("click", () => {
      document.getElementById("search").focus();
    });

    document.getElementById("searchIconMob").addEventListener("click", () => {
      document.getElementById("searchMob").focus();
    });
  },
  beforeDestroy() {
    window.addEventListener("click", this.closeSearch);
  },

  methods: {
    activeLongSearch() {
      this.longSerch = !this.longSerch;

      document.querySelector(".header__form--box input").value = "";

      if (this.longSerch) {
        document.querySelector(".header__list").style.display = "none";
        document.querySelector(".headerMob-logo").style.position = "absolute";
        document.querySelector(".headerMob-logo").style.transform =
          "translateX(-50%)";
        document.querySelector(".headerMob").style.justifyContent = "flex-end";
        this.term = "";
        this.disabled = 0;
      } else {
        document.querySelector(".header__list").style.display = "flex";
        document.querySelector(".headerMob-logo").style.position = "inherit";
        document.querySelector(".headerMob-logo").style.transform =
          "translateX(0%)";
        document.querySelector(".headerMob").style.justifyContent =
          "space-between";

        this.disabled = 1;
        this.term = "";
      }
    },
    closeSearch() {
      this.longSerch = false;
      document.querySelector(".header__list").style.display = "flex";
      document.querySelector(".headerMob-logo").style.position = "inherit";
      document.querySelector(".headerMob-logo").style.transform =
        "translateX(0%)";
      this.disabled = 1;
      this.term = "";
    },

    async goNews() {
      let url = new URL(window.location);
      let params = new URLSearchParams(url.search);
      this.pendig= true;

      // Add a third parameter.
      params.set("name", this.term);
      if (this.$route.query?.page) {
        params.set("page", this.getPaginationSearch.currentPage);
      }
      //   this.$store.dispatch("products/getSearchResults", "name=" + this.term);

      this.$router.push({
        path: "search",
        query: { name: this.term },
      });

      this.term = "";

      const response = await fetch(url);

      if (response.status == "200") {
        this.pendig = false;
      }

      console.log(response.status);
    },
  },

  computed: {
    ...mapGetters({
      getSearch: "products/getSearch",
      getPaginationSearch: "products/getPaginationSearch",
    }),
  },
};
</script>