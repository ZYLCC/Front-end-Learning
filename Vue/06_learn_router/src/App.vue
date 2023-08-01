<template>
  <div>
    <h2>App Content</h2>
    <div class="nav">
      <!-- 加入 replace 属性，不会加入历史，变成了替换（较少用） -->
      <!-- 相当于：调用 router.replace(), 而不是 router.push() -->
      <h3>router-link 跳转:</h3>
      <router-link to="/home" replace active-class="link-acitve">首页</router-link> 
      &nbsp;
      <router-link to="/about">关于</router-link>
      &nbsp;
      <router-link to="/user/111">用户111</router-link>
      &nbsp;
      <router-link to="/user/222">用户222</router-link>
      &nbsp;
      <router-link to="/order">订单</router-link>
      <!-- 其他元素跳转 -->
      <h3>其他元素跳转：</h3>
      <span @click="homeSpanClick">首页</span>
      &nbsp; 
      <button @click="aboutBtnClick">关于</button>
    </div>
    <hr>

    <h3>router-view:</h3>
    <router-view></router-view>
  </div>
</template>

<script setup>
  import { useRouter } from 'vue-router'

  const router = useRouter()

  function homeSpanClick() {
    router.push("/home")
  }

  function aboutBtnClick() {
    router.push("/about")
  }

</script>

<style scoped>
  span {
    cursor: pointer;
  } 
  .link-acitve {
    color: pink;
    font-size: 20px;
  }
 
  
  .router-link-active {  /* 默认的 class 名 */
    color: red;
    font-size: 20px;
  }
</style>