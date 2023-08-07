<template>
  <div class="home">
    <h2>Home page</h2>
    <h2>Home Count: {{ counterStore.count }}</h2>
    <h2>Home Count(解构后的): {{ count }}</h2>
    <button @click="plusOne">Count +1</button>
  </div>
</template>

import { toRefs } from 'vue';
<script setup>
  import useCounter from '@/stores/counter'
  import { toRefs } from 'vue'
  import { storeToRefs } from 'pinia'

  const counterStore = useCounter()
  // 解构后会失去响应式(除非 toRefs，pinia 里也有，storeToRefs)
  // const { count } = toRefs(counterStore)
  // const { count } = storeToRefs(counterStore)
  const { count } = counterStore

  function plusOne() {
    counterStore.count++
  }

</script>

<style scoped>

</style>