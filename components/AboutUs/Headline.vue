<template>
  <section class="headline aboutHeadline">
    <div class="headline__color headline__desktop"></div>

<div class="headline__mob">
    <div class="headline__color"></div>

    <img  src="../../assets/image/headline/aboutHeadline.jpg" alt="aboutHeadline.jpg">
</div>

    <div class="conteniar">
      <div class="headline__box">
        <h1 class="headline__box-title">{{ getAbout.translation.about }}</h1>

        <p class="headline__box-subtitle">
          {{ getAbout.translation.aboutDesc }}
        </p>
      </div>
    </div>
  </section>
</template>





<script>
export default {
  props: {
    getAbout: Object,
  },
};
</script>