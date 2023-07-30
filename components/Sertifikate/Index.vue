<template>
  <div >
    <Headline :getCertificate="getCertificate" />
    <div class="conteniar">
      <Document :getCertificate="getCertificate" />
      <Test :getCertificate="getCertificate" />
    </div>
  </div>
</template>

<script>
import Headline from "./Headline.vue";
import Document from "./Document.vue";
import Test from "./Test.vue";
import { mapGetters } from "vuex";

export default {
  components: {
    Headline,
    Document,
    Test,
  },
 

    computed: {
    ...mapGetters({
      getCertificate: "certificate/getCertificate",

    }),
  },
 
};
</script>
