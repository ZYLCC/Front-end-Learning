<template>
  <div>
    <h1 class="title">我是 App 中的标题（红色背景）</h1>
    <app-header></app-header>
  </div>
</template>

<script>
  import AppHeader from './components/AppHeader.vue'

  export default {
    name: 'App',
    components: {
      AppHeader
    }
  }
</script>

<style scoped>
  h1 {
    background-color: red;
  }
</style>