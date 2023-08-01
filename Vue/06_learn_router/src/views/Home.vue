<template>
  <div>
    <h2>Home:</h2>

    <div class="home-nav">
      <router-link to="/home/homerecommend">首页-推荐</router-link>
      &nbsp;
      <router-link to="/home/homeranking">首页-排行</router-link>
      &nbsp;
      <template v-if="token">
        <button @click="logoutBtnClick">退出登录</button>
      </template>
    </div>

    <router-view></router-view>
  </div>
</template>

<script setup>
  import { useRouter } from 'vue-router'

  const router = useRouter()
  const token = localStorage.getItem("token")

  function logoutBtnClick() {
    console.log("退出登录了")
    localStorage.removeItem("token")
    router.push("/home")
  }
</script>

<style scoped>

</style>