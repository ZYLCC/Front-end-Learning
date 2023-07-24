<template>
  <div>
    <!-- cc绑定 -->
    <h2>cc: {{ cc }}</h2>
    <button @click="changeCc">修改</button>
  </div>
</template>

<script>
  export default {
    props: {
      cc: {
        type: String,
        default: ''
      }
    },
    emits: ['update:cc'],
    methods: {
      changeCc() {
        this.$emit('update:cc', 'I am Lcc')
      }
    }
  }
</script>

<style scoped>

</style>