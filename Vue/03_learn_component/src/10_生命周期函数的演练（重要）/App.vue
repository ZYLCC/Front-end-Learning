<template>
  <h2>{{ message }}</h2>
  <button @click="message += '~~'">+ ~~</button><hr>

  <home v-if="isShowHome"></home>
  <button @click="toggleHomeShow">{{ btnMessage }}</button>
</template>

<script>
import { onBeforeUnmount } from 'vue'
import Home from './Home.vue'

  export default {
    data() {
      return {
        message: 'Hello App',
        isShowHome: true,
        btnMessage: '隐藏'
      }
    },
    components: {
      Home
    },  
    methods: {
      toggleHomeShow() {
        this.isShowHome = !this.isShowHome
        this.btnMessage = this.isShowHome ? '隐藏' : '显示'
      }
    },  

    // 1. 组件被创建之前
    beforeCreate() {
      console.log('App-beforeCreate')
    },

    // 2. 组件被创建完成
    created() {
      console.log('App-created')
      // console.log('1. 发送网络请求，请求数据')
      // console.log('2. 监听 eventBus 事件')
      // console.log('3. 监听 watch 事件')
    },

    // 3. 组件 template 准备被挂载
    beforeMount() {
      console.log('App-beforeMount')
    },

    // 4. 组件 template 被挂载：虚拟DOM --> 真是DOM
    mounted() {
      console.log('App-mounted')
      // console.log('1. 获取DOM')
      // console.log('2. 使用DOM')
    },

    // 5. 数据发生改变
    // 5.1 准备更新DOM
    beforeUpdate() {
      console.log('App-beforeUpdate')
    },
    // 5.2 更新DOM
    updated() {
      console.log('App-updated')
    },

    // 6. 卸载 VNode --> DOM 元素 (App组件 一般不会被卸载)
    // 6.1 卸载之前
    beforeUnmount() {
      console.log('beforeUnmount')
    },
    // 6.2 DOM 元素被卸载完成
    unmounted() {
      console.log('unmounted')
    }
  }
</script>

<style scoped>

</style>