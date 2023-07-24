<template>
  <div class="banner">
    <button @click="bannerBtnClick">banner按钮</button>
  </div>
</template>

<script>
  import eventBus from './utils/event-bus'

  export default {
    methods: {
      bannerBtnClick() {
        // console.log('bannerBtnClick')

        eventBus.emit('btnClick', 'cc', 18, 180)
      }
    }
  }
</script>

<style scoped>

</style> 