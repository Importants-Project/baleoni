<template>
  <section class="mission" >
    <div  class="mission__box">
      <div class="mission__leftSide">
        <div class="mission__beeHive1"></div>

        <nuxt-img loading="lazy" :src="getAbout.data.section1.image" :alt="getAbout.data.section1.title" />

        <div class="mission__beeHive2"></div>
      </div>
      <div class="mission__rightSide">
        <h1 v-if="getAbout.data.section1.title !==null" :data-end="getAbout.data.section1.title.split(' ').pop()" class="mission__title">
            {{getAbout.data.section1.title}}
        </h1>

           <h2 v-else :data-end="''.split(' ').pop()" class="mission__title">
            {{getAbout.data.section1.title}}
        </h2>
        <p class="mission__desc">
          {{getAbout.data.section1.description}}
        </p>
        <div class="mission__beeHive3"></div>
      </div>
    </div>
  </section>
</template>

<script>

export default {

    
props:{
    getAbout: Object,
}
};
</script> 
