<template>
  <section class="headline contactHeadline" >    

      <div class="headline__color headline__desktop"></div>

<div class="headline__mob">
    <div class="headline__color"></div>

    <img  src="../../assets/image/headline/contactHeadline.jpg" alt="contactHeadline.jpg">
</div>

    <div class="conteniar">
      <div class="headline__box">
          <h1 class="headline__box-title">
          {{ getInits.translation.contact }}
        </h1>

        <p class="headline__box-subtitle">
          {{ getInits.translation.contactDesc }}
        </p>
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