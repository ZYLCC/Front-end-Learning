<template>
  <div>
    <h2>登录页面：</h2>
    <button @click="loginBtnClick">点击登录</button>
  </div>
</template>

<script setup>
  import { useRouter } from 'vue-router'
  const router = useRouter()

  function loginBtnClick() {
    console.log("点击了登录按钮")
    // 模拟从服务器拿到了 token
    localStorage.setItem("token", "codercc")

    // 跳转到 order 页面
    
    router.push("/order")
  }
</script>

<style scoped>

</style>