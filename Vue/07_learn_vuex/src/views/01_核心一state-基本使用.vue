<template>
  <div>
    <h2>Home: {{ $store.state.counter }}</h2>
    <h2>option API 中 computed: {{ storeCounter }}</h2>
    <h2>setup 中的 counter: {{ counter }}</h2>
    <button @click="pulsone">+1</button>
  </div>
</template>

<!-- 支持 option API 和 Composition API 可以同时存在，不过不建议 -->
<script>
  export default {
    computed: {
      storeCounter() {
        return this.$store.state.counter
      }
    }
  }
</script>

<script setup>
  import { toRefs } from 'vue'
  import { useStore } from 'vuex'

  const store = useStore()
  const { counter} = toRefs(store.state)
  function pulsone() {
    // 不能直接修改 store 中的状态
    // store.state.counter++
    store.commit("add")
  }
</script>

<style scoped>

</style>