<template>
  <div>
    <!-- 1. 在模板中获取 id -->
    <h2>User: {{ $route.params.id }}</h2>
  </div>
</template>

<script setup>
  import { useRoute, onBeforeRouteUpdate } from 'vue-router'
    // 2. 获取 route 跳转 id
    const route = useRoute()
    console.log(route.params.id)
    
    // 获取 route 跳转 id
    onBeforeRouteUpdate((to, from) => {
      console.log("from: user", from.params.id)
      console.log("to: user", to.params.id)
    })
</script>

<style scoped>

</style>