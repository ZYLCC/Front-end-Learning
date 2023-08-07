<template>
  <div class="home">
    <h2>Home Page</h2>
    <ul>
      <template v-for="item in $store.state.home.banners" :key="item.acm">
        <li>{{ item.title }}</li>
      </template>
    </ul>
  </div>
</template>

<script>

</script>

<script setup>
  import { useStore } from "vuex"
  // 告诉 vuex 发起网络请求
  const store = useStore()

  store.dispatch("fetchHomeMultidataAction")
</script>

<style scoped>

</style>