<template>
  <header>
    <div class="header">
      <a href="/">
        <img
          loading="lazy"
          class="header__logo"
          src="~/assets/image/logo.svg"
          alt="baleoni logo"
      /></a>

      <ul class="header__list">
        <li
          class="header__list-item"
          v-for="headerList in header"
          :key="headerList.id"
        >
          <nuxt-link
            :class="[
              'header__list-link',
              { active: headerList.path === $route.path },
            ]"
            :to="headerList.path"
            exact
          >
            {{ headerList.name }}</nuxt-link
          >
        </li>
      </ul>

      <div class="header__box" style="align-items: flex-start">
          <CustomSearch :idIcon="'searchIcon'"  :idInput="'search'"/>

        <div class="header__order">
          <a target="__blank" href="https://wa.me/994503774433">Sifariş ver</a>
        </div>
      </div>
    </div>

    <div class="headerMob">
      <NuxtLink to="/"
        ><img
          loading="lazy"
          class="header__logo headerMob-logo"
          src="~/assets/image/logo.svg"
          alt="baleoni logo"
      /></NuxtLink>

      <div class="headerMob__box">
          <CustomSearch :idIcon="'searchIconMob'"  :idInput="'searchMob'" />
        <img
          loading="lazy"
          src="../assets/image/navbar.svg"
          @click="open"
          alt="baleoni search"
        />
      </div>
    </div>

    <div :class="mob ? 'headerOpenNav' : 'd-none'">
      <div class="headerOpenNav__box">
        <div class="headerOpenNav__box-close" @click="close">
          <img
            loading="lazy"
            src="../assets/image/close.svg"
            alt="baleoni close"
          />
        </div>

        <ul class="headerOpenNav__box-list">
          <li
            v-for="headerList in header"
            :key="headerList.id"
            @click="(activeTab = headerList.id), (mob = false)"
          >
            <a
              :class="[{ active: headerList.id === activeTab }]"
              :href="headerList.path"
              exact
            >
              {{ headerList.name }}</a
            >
          </li>
        </ul>

        <div class="headerOpenNav__box-contact">
          <h1 class="headerOpenNav__box-contact-title">
            Bizi sosial mediada izləyin:
          </h1>
          <div>
            <a href="https://www.instagram.com/baleoni.az/" target="_blank">
              <img
                loading="lazy"
                src="../assets/image/icon/mobInstagram.svg"
                alt="baleoni Instagram"
              />
            </a>
            <a href="https://www.facebook.com/baleoni.az" target="_blank">
              <img
                loading="lazy"
                src="../assets/image/icon/mobFacebook.svg"
                alt="baleoni Facebook"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import CustomSearch from "./CustomSearch.vue";
export default {
  components: { CustomSearch },
  data() {
    return {
      mob: false,
      activeTab: 1,
      header: [
        { name: "Ana səhifə", path: "/", id: 1 },
        { name: "Haqqımızda", path: "/about", id: 2 },
        { name: "Sertifikatlar", path: "/sertifikat", id: 3 },
        { name: "Məhsullar", path: "/products", id: 4 },
        { name: "Əlaqə", path: "/contact", id: 5 },
      ],
    };
  },
  methods: {
    click() {
      console.log(this.$route);
    },
    close() {
      this.mob = false;
      document.querySelector("body").classList.remove("scrollHide");
    },

    open() {
      this.mob = true;
      document.querySelector("body").classList.add("scrollHide");
    },
  },
};
</script>
