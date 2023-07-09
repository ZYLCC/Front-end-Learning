<template>
  <h2 class="title">我是 vue.app 中的 h2 标题 (类名是 title)</h2>
  <hr>
  <app-header></app-header>
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

<style>
  /* 这里设置的样式，是全局的 */
  .title {
    color: red;
  }
</style>

<style scoped>
  /* 这里设置的样式，是仅限当前作用域的 */
  .title {
    background-color: skyblue;
  }
</style>
