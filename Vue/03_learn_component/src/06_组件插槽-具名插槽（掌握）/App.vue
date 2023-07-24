<template>
  <nav-bar>
    <template v-slot:left>
      <button>返回</button>
    </template>
    <template v-slot:mid>
      <p>我是内容</p>
    </template>
    <template v-slot:right>
      <a href="#">登录</a>
    </template>
  </nav-bar><hr>

  <!-- 动态选择具名插槽 -->
  <nav-bar>
    <!-- v-slot: 语法糖 # -->
    <template #[position]>
      <button>我是按钮</button>
    </template>
  </nav-bar>
  <button @click="position = 'left'">左</button>
  <button @click="position = 'mid'">中</button>
  <button @click="position = 'right'">右</button><hr>
</template>

<script>
  import NavBar from './NavBar.vue';

  export default {
    components: {
      NavBar
    },
    data() {
      return {
        position: 'mid'
      }
    },

  }
</script>

<style scoped>
  p {
    margin: 0;
  }
</style>