<template>
  <div class="app">
    <!-- 访问 store 中的 counter -->
    <h2>当前计数：{{ $store.state.counter }}</h2>
    <hr>
    <home></home>
  </div>
</template>

<script setup>
  import Home from './views/Home.vue'


</script>

<style scoped>

</style>

