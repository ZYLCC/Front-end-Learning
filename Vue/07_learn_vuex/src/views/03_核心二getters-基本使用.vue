<template>
  <div>
    <h2>info => {{ $store.getters.message }}</h2>
    <hr>
    <h2>doubleCounter: {{ $store.getters.doubleCounter }}</h2>
    <!-- <button @click="plusLevel">按钮</button> -->
    <hr>
    <h2>users: {{ $store.state.users }}</h2>
    <h2>users' totalAge: {{ $store.getters.totalAge }}</h2>
    <hr>
    <h2>id-1的书籍信息：{{ $store.getters.getBookById(1) }}</h2>
    <h2>id-3的书籍信息：{{ $store.getters.getBookById(3) }}</h2>
  </div>
</template>

<script setup>

</script>

<style scoped>

</style>