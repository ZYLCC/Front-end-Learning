<template>
  <div class="app">
    <h2>App Message: {{ message }}</h2>
    <home></home><hr>
    <button @click="isShowTemp = !isShowTemp">是否显示temp</button>
    <temp v-if="isShowTemp"></temp>
  </div>
</template>

<script>
  import eventBus from './utils/event-bus'
  import Home from './Home.vue'
  import Temp from './Temp.vue'

  export default {
    components: {
      Home,
      Temp
    },
    data() {
      return {
        message: 'Hello App',
        isShowTemp: true
      }
    }, 
    created() {
      // 事件监听
      eventBus.on('btnClick', (name, age, height) => {
        // console.log('btnClick 事件在 app 中被监听', name, age, height)
        this.message = `${name} - ${age} - ${height}`
      })
    }
  }
</script>

<style scoped>

</style> 