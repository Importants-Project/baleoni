<template>
  <section class="headline sertifikatHeadline">
     <div class="headline__color headline__desktop"></div>

<div class="headline__mob">
    <div class="headline__color"></div>

    <img  src="../../assets/image/headline/sertifikatHeadline.jpg" alt="sertifikatHeadline.jpg">
</div>

    <div class="conteniar">
      <div class="headline__box">
        <h1 class="headline__box-title">
          {{ getCertificate.translation.certificate }}
        </h1>

        <p class="headline__box-subtitle">
          {{ getCertificate.translation.certificateDesc }}
        </p>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  props: {
    getCertificate: Object,
  },
};
</script>