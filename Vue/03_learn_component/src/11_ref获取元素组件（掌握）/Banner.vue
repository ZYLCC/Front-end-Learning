<template>
  <div class="banner">
    <h2>Banner</h2>
  </div>

  <div class="banner2"></div>
</template>

<script>
  export default {
    data() {
      return {
        bannerMessage: 'banner 中的 message'
      }
    },
    methods: {
      bannerClick() {
        return 'banner 中的 方法'
      }
    }
  }
</script>

<style scoped>

</style>