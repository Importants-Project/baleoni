<template>
  <section class="info">
    <div class="info__flex">
      <div
        class="info__box"
        v-for="(info, i) in getInits.data.services"
        :key="i"
      >
        <nuxt-img loading="lazy" :src="info.image" :alt="info.title" />
        <div>
          <h1 class="info__box-title">{{ info.title }}</h1>
          <span>{{ info.description }}</span>
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