<template>
  <Index/>
</template>

<script>
import Index from '../components/Contact/Index.vue'
export default {
components:{
    Index
},

async asyncData({ store }) {
    await store.dispatch("init/fetchAllInit");
  },
}
</script>