<template>
  <section class="hero">
    <div>
      <div class="hero__flex">
        <div class="hero__leftSide">
          <div class="hero__beeHive26"></div>

          <span class="hero__subTitle"
            >Bal haqqında hərşeyi sizdə biləcəksiniz</span
          >
          <h1 class="hero__title">
            {{ getInits.data.section1.title }}
          </h1>
          <p class="hero__desc">
            {{ getInits.data.section1.description }}
          </p>

          <div class="hero__buttonBox">
                <div class="hero__button ">
                  <a href="/products">Bütün məhsullara nəzər yetir</a>
                </div>
          </div>
        </div>

        <div class="hero__rightSide">
          <div class="hero__beeHive32"></div>
          <div class="hero__beeHive80"></div>

          <nuxt-img loading="lazy" :src="getInits.data.section1.images.image" :alt="getInits.data.section1.title" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    getInits: Object,
  },
};
</script>
