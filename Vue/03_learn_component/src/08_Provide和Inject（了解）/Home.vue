<template>
  <div>Home: {{ lover }} - {{ loverAge }}</div>
  <home-banner></home-banner>
  
</template>

<script>
  import HomeBanner from './HomeBanner.vue';

  export default {
    components: {
      HomeBanner
    },
    inject: ['lover', 'age', 'loverAge']
  }
</script>

<style scoped>

</style> 