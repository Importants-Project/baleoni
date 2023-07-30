<template>
  <section class="test" >
    <h2
      class="test__titleMob"
      v-if="getCertificate.data.section2.title"
      :data-end="getCertificate.data.section2.title.split(' ').pop()"
    >
      {{ getCertificate.data.section2.title }}
    </h2>

    <h1 class="test__titleMob" v-else :data-end="''.split(' ').pop()">
      {{ getCertificate.data.section2.title }}
    </h1>
    <div class="imageGrid">
      <div class="sertifikat__leftSideImg">
        <h2
          class="test__title"
          v-if="getCertificate.data.section2.title"
          :data-end="getCertificate.data.section2.title.split(' ').pop()"
        >
          {{ getCertificate.data.section2.title }}
        </h2>
        <h2 class="test__title" v-else :data-end="''.split(' ').pop()">
          {{ getCertificate.data.section2.title }}
        </h2>
        <img
          class="imageGrid__testImgSecond"
          loading="lazy"
          :src="getCertificate.data.section2.file.image"
          :alt="getCertificate.data.section2.title"
        />
      </div>

      <div class="sertifikat__rightSideImg">
        <p class="test__desc">
          {{ getCertificate.data.section2.description.first }}
        </p>
        <div class="imageGrid__box">
          <img
            class="imageGrid__testImgFirst"
            loading="lazy"
            :src="getCertificate.data.section2.files.image"
          :alt="getCertificate.data.section2.title"
          />
        <div class="imageGrid__beehive" ></div>

        </div>

      </div>
    </div>

    <p class="test__descMob">
      {{ getCertificate.data.section2.description.first }}
      {{ getCertificate.data.section2.description.second }}
    </p>
    <p class="test__desc">
      {{ getCertificate.data.section2.description.second }}
    </p>
  </section>
</template>

<script>
export default {
  props: {
    getCertificate: Object,
  },
};
</script>