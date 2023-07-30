<template>
  <section class="beekeep" v-if="getInits.data.section2.length !== null" >
      <div class="beekeep__flex">
        <div class="beekeep__leftSide">
          <div class="flex beekeepSecondPart">
            <div
              class="beekeep__bihave mask"
              v-for="(BeeHavie, i) in getInits.data.section2.images.slice(0, 3)"
              :key="i"
            >
              <img  loading="lazy" :src="BeeHavie.image" :alt="getInits.data.section2.title" class="mask" />
            </div>
          </div>
          <div class="flex beekeepSecondPart">
            <div
              class="beekeep__bihave mask"
              v-for="(BeeHavie, i) in getInits.data.section2.images.slice(3, 5)"
              :key="i"
            >
              <img loading="lazy" :src="BeeHavie.image" :alt="getInits.data.section2.title" class="mask"  />
            </div>
          </div>
          <div class="beekeepTherdPart">
            <div
              class="beekeep__bihave mask"
              :key="i"
              v-for="(BeeHavie, i) in getInits.data.section2.images.slice(5, 6)"
            >
              <img loading="lazy" :src="BeeHavie.image" :alt="getInits.data.section2.title" class="mask"  />
            </div>
          </div>
        </div>
   


        <div class="beekeep__rightSide">
          <div class="beekeep__beeHive"></div>

          <h1 :data-end='getInits.data.section2.title.split(" ").pop()' class="beekeep__title">
                        {{ getInits.data.section2.title }}
   
            <!-- Düzgün Arıçılıq <span class="beekeep__span">Nədir? </span> -->
          </h1>
          <p class="beekeep__desc">
            {{ getInits.data.section2.description }}
          </p>

          <div
            v-for="(BeeHavieContent, i) in BeeHavieContents"
            :key="i"
            class="beekeep__item"
          >
            <div class="beekeep__item-img">
              <img loading="lazy"
                :src="require(`@/assets/image/beekeep/${BeeHavieContent.img}`)"
                :alt="BeeHavieContent.text"
              />
            </div>
            <span class="beekeep__item-text">{{ BeeHavieContent.text }}</span>
          </div>
        </div>
      </div>

      
  </section>
</template>

<script>


export default {
   
  data() {
    return {
       
      BeeHavieContents: [
        { img: "beekeep1.svg", text: "Təbiət Dostu Metod" },
        { img: "beekeep2.svg", text: "100% Təbii, orqanik bal çeşidləri" },
        { img: "beekeep3.svg", text: "Sağlam Arı Təsərrüfatı" },
      ],
    };
  },

 

props:{
    getInits: Object,
}

};
</script>

