<template>
  <div class="home">
    <h2>Home page</h2>
    <!-- <h2>userInfo: {{ name }} - {{ age }} - {{ level }}</h2> -->
    <h2>doubleCount: {{ counterStore.doubleCount }}</h2>
    <h2>doubleCountPlusOne: {{ counterStore.doubleCountPlusOne }}</h2>
    <h2>Info: {{ counterStore.showInfo }}</h2>
    <button @click="changeInfo">修改info</button>
    <button @click="changeState">修改state</button>
    <button @click="resetState">重置state</button>
  </div>
</template>


<script setup>
  import useCounter from '@/stores/counter'

  const counterStore = useCounter()
</script>

<style scoped>

</style>