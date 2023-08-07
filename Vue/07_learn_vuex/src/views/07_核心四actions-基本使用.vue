<template>
  <div>
    <h2>Home 计数：{{ $store.state.counter }}</h2>
    <button @click="actionBtnClick">发起 action (+1)</button>
    <button @click="actionBtnClick(2)">发起 action (+2)</button>
  </div>
</template>

<script>
  export default {
    methods: {
      actionBtnClick(payload) {
        this.$store.dispatch("addAction", payload)
      }
    }
  }
</script>

<script setup>

</script>

<style scoped>

</style>