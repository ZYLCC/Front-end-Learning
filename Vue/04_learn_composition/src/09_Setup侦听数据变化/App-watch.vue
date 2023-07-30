<template>
  <div>
    <h2>AppContent: {{ message }}</h2>
    <button @click="changeMessage">修改message</button>
  </div>
</template>

<script>
  import { watch, ref } from 'vue';

  export default {
    setup() {
      const message = ref('Hello World')

      // 侦听数据的变化
      watch(message, (newValue, oldValue) => {
        console.log('new: ' + newValue, '\nold: ' + oldValue)
      })

      function changeMessage() {
        message.value = 'Hello Lcc'
      }

      return {
        message,
        changeMessage
      }
    }
  }
</script>

<style scoped>

</style>