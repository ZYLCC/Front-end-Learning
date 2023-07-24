<template>
  <div>
    <h2>Counter: {{ modelValue }}</h2>
    <button @click="changeCounter">修改</button>
  </div>
</template>

<script>
  export default {
    props: {
      modelValue: {
        type: Number, 
        default: 0
      }
    },
    emits: ['update:modelvalue'],
    methods: {
      changeCounter() {
        this.$emit('update:modelValue', 1000)
      }
    }
  }
</script>

<style scoped>

</style>