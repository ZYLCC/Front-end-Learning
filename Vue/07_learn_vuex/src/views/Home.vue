<template>
  <div class="home">
    <h2>Home Page</h2>
    <!-- 使用 state 时，需要 state.moduleName.xxx -->
    <h2>Counter 模块中的 counter: {{ $store.state.counter.count }}</h2>
    <!-- 使用 getters 时，直接 getters.xxx -->
    <!-- <h2>Counter 模块中的 doubleCount: {{ $store.getters.doubleCount }}</h2> -->

    <!-- 给 counter.js 加上命名空间 getters["moduleName/xxx"]-->
    <h2>Counter 模块中的 doubleCount: {{ $store.getters["counter/doubleCount"] }}</h2>

    <button @click="add">counter+1</button>
  </div>
</template>

<script>

</script>

<script setup>
  import { useStore } from "vuex"
  // 告诉 vuex 发起网络请求
  const store = useStore()
  
  function add() {
    // 提交 mutation 也不需要跟模块
    // store.dispatch("addCountAction")

    // 给 counter.js 加上命名空间后
    store.dispatch("counter/addCountAction")
  }
</script>

<style scoped>

</style>