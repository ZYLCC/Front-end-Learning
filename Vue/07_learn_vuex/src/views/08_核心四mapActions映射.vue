<template>
  <div>
    <h2>Home 计数：{{ $store.state.counter }}</h2>
    <button @click="addAction">发起 action (+1)</button>
    <button @click="addAction(2)">发起 action (+2)</button>
  </div>
</template>

<script>
  import { mapActions } from 'vuex'

  export default {
    methods: {
      // actionBtnClick(payload) {
      //   this.$store.dispatch("addAction", payload)
      // }
      ...mapActions(["addAction"])
    }
  }
</script>

<script setup>

</script>

<style scoped>

</style>