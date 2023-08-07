<template>
  <div>
    <button @click="add">+1</button>
    <button @click="changeName('Lcc')">修改name</button>
    <button @click="changeInfo({name: 'zy', level: 100})">修改info</button>
    <h2>Store name: {{ $store.state.name }}</h2>
    <h2>Store level: {{ $store.state.level }}</h2>
  </div>
</template>

<script>
  import { mapGetters, mapMutations } from "vuex"
  import { CHANGE_INFO, CHANGE_NAME } from '../store/mutation_type'

  export default {
    methods: {
      ...mapMutations(["add", "changeName", CHANGE_INFO])
    }
  }
</script>

<script setup>
  
</script>

<style scoped>

</style>