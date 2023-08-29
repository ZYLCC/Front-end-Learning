<template>
  <div class="app">
    <router-view></router-view>

  </div>
</template>

<script setup lang="ts">
  interface IKun {
    name: string
  }

  const ikun: IKun = { name: 'ikun' }
  console.log(ikun)
</script>

<style scoped>
  .app {
    width: 100vw;
    height: 100vh;
    /* background-color: skyblue; */
  }
</style>
