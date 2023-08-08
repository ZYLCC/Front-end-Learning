<template>
  <div class="home">
    <h2>Home page</h2>
    <h2>Home Count: {{ counterStore.count }}</h2>
    <button @click="changeCount(-99)">修改count</button>
  </div>
</template>


<script setup>
  import useCounter from '@/stores/counter'

  const counterStore = useCounter()

  function changeCount(num) {
    counterStore.changeCountByNum(num)
  }
</script>

<style scoped>

</style>