<template>
  <div>
    <h2>App</h2>
    <router-link to="/main">main</router-link>
    <router-link to="/login">login</router-link>
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

<style scoped></style>
