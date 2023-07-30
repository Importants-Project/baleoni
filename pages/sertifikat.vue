<template>
<Sertifikate/>
</template>

<script>
import Sertifikate from '~/components/Sertifikate/Index.vue';

export default {
  name: 'SertifikatePage',
  components:{
    Sertifikate
  },
     async asyncData({ store }) {

    await store.dispatch("certificate/fetchAllCertificate");
  },
}
</script>
