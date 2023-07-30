<template>
  <div class="app">
    <!-- template 中的 ref 对象会自动解包 -->
    <h2>计数：{{ counter }}</h2>
    <button @click="add">+1</button>
    <button @click="sub">-1</button>
  </div>
</template>

<script>
import { ref } from 'vue'
import useCounter from './hooks/useCounter'

  export default {
    setup() {
      // // 1. 直接在 setup 实现
      // // 默认定义的数据都不是响应式数据
      // let counter = ref(0)
      // const add = () => {
      //   counter.value++
      // }
      // const sub = () => {
      //   counter.value--
      // }

      // // 2. 导入，解构语法
      // const { counter, add, sub } = useCounter()

      return {
        // counter,
        // add,
        // sub,

        ...useCounter()
      }
    }
  }
</script>

<style scoped>

</style>