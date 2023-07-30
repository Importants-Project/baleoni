<template>
  <section class="headline productHeadline" >    

      <div class="headline__color headline__desktop"></div>

<div class="headline__mob">
    <div class="headline__color"></div>

    <img  src="../../assets/image/headline/mehsullarHeadline.png" alt="mehsullarHeadline.png">
</div>

    <div class="conteniar"> 
      <div class="headline__box">

        <h1 class="headline__box-title">{{ getInits.translation.products }}</h1>

        <p class="headline__box-subtitle">
          {{ getInits.translation.productsDesc }}
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