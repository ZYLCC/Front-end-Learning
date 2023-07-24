<template>
  <div class="temp">
    <h2>Temp Message: {{ message }}</h2>
  </div>
</template>

<script>
  import eventBus from './utils/event-bus'

  export default {
    data() {
      return {
        message: 'Hello Temp'
      }
    },
    methods: {
      btnClickHandler() {
        console.log('btnClick 事件在 temp 中被监听')
        this.message = 'btnClick 事件在 temp 中被监听'
      }
    },
    created() {
      eventBus.on('btnClick', this.btnClickHandler)
    },
    unmounted() { // 当组件被移除会触发
      console.log('temp unmounted')
      // 组件被移除时，移除这个方法
      eventBus.off('btnClick', this.btnClickHandler)
    }
  }
</script>

<style scoped>

</style>