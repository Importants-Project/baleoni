<template>
  <section class="about">
    <h1
      v-if="getAbout.data.section2.title !== null"
      class="about__titleMob"
      :data-end="getAbout.data.section2.title.split(' ').pop()"
    >
      {{ getAbout.data.section2.title }}
    </h1>

    <h2 v-else class="about__titleMob" :data-end="''.split(' ').pop()">
      {{ getAbout.data.section2.title }}
    </h2>
    <div class="imageGrid">
      <div class="imageGrid-col-2 imageGrid-row-2">
        <h2
          class="about__title"
          v-if="getAbout.data.section2.title !== null"
          :data-end="getAbout.data.section2.title.split(' ').pop()"
        >
          {{ getAbout.data.section2.title }}
        </h2>

        <h2 class="about__title" v-else :data-end="''.split(' ').pop()">
          {{ getAbout.data.section2.title }}
        </h2>

        <img
          :src="getAbout.data.section2.image"
          loading="lazy"
          class="imageGrid__firstBgAbout"
          :alt="getAbout.data.section2.title"
        />
      </div>

      <div>
        <p class="about__desc">
          {{ getAbout.data.section2.description.first }}
        </p>
        <div class="imageGrid__box">
          <div class="imageGrid__box-leftSide">
            <nuxt-img
              v-for="(file, i) in getAbout.data.section2.images.slice(0, 2)"
              :key="i"
              class="imageGrid__box-img imageGrid__secondAbout"
              :src="file.image"
              loading="lazy"
              :alt="getAbout.data.section2.title"
            />
          </div>

          <nuxt-img
            v-for="(file, i) in getAbout.data.section2.images.slice(2, 3)"
            :key="i"
            class="imageGrid__lastAbout"
            :src="file.image"
            loading="lazy"
            :alt="getAbout.data.section2.title"
          />
                  <div class="imageGrid__beehive" ></div>

        </div>
      </div>
    </div>

    <p class="about__descMob">
      {{ getAbout.data.section2.description.first }}
      {{ getAbout.data.section2.description.second }}
    </p>

    <p class="about__desc">
      {{ getAbout.data.section2.description.second }}
    </p>
  </section>
</template>

<script>
export default {
  props: {
    getAbout: Object,
  },
};
</script>