<template>
  <div class="app">
    <!-- input v-model -->
    <input type="text" v-model="message">
    <!-- 相当于 -->
    <input type="text" :value="message" @input="message = $event.target.value">

    <!-- 默认的 v-model -->
    <counter v-model="appCounter"></counter>
    <counter :modelValue="appCounter" @update:modelValue="appCounter =$event"></counter><hr>

    <!-- 自定义名称 v-model -->
    <counter2 v-model:cc="appCc"></counter2>
  </div>
</template>

<script>
  import Counter from './Counter.vue'
  import Counter2 from './Counter2.vue'

  export default {
    components: {
      Counter,
      Counter2
    },  
    data() {
      return {
        message: 'hello world',
        appCounter: 100,
        appCc: "I am cc"
      }
    }
  }
</script>

<style scoped>

</style>