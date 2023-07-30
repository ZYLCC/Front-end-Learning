<template>
  <h2>我是 ShowInfo 组件</h2>
</template>

<script>
  export default {
    setup() {
      function showInfoFoo() {
        console.log('showInfo foo functino')
      }

      return {
        showInfoFoo
      }
    }
  }
</script>

<style scoped>

</style>