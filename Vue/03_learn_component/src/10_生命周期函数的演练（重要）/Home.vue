<template>
  <div class="home">
    <h2>我是Home</h2>
  </div>
</template>

<script>
  export default {
    // 1. 组件被创建之前
    beforeCreate() {
      console.log('Home-beforeCreate')
    },

    // 2. 组件被创建完成
    created() {
      console.log('Home-created')
      // console.log('1. 发送网络请求，请求数据')
      // console.log('2. 监听 eventBus 事件')
      // console.log('3. 监听 watch 事件')
    },

    // 3. 组件 template 准备被挂载
    beforeMount() {
      console.log('Home-beforeMount')
    },

    // 4. 组件 template 被挂载：虚拟DOM --> 真是DOM
    mounted() {
      console.log('Home-mounted')
      // console.log('1. 获取DOM')
      // console.log('2. 使用DOM')
    },

    beforeUnmount() {
      console.log('Home-beforeUnmounted')
    }, 
    unmounted() {
      console.log('Home-unmounted')
    }
  }
</script>

<style scoped>

</style>