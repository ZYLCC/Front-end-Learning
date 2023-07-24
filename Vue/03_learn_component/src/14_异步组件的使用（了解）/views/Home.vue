<template>
  <div class="home">
    <h2>home组件</h2>
    <h2>当前计数：{{ counter }}</h2>
    <button @click="counter++">+1</button>
  </div>
</template>

<script>
  export default {
    name: 'home',
    data() {
      return {
        counter: 0
      }
    },
    // methods: {
    //   add() {
    //     this.counter++
    //   }
    // },  
    created() {
      console.log('home created')
    },
    unmounted() {
      console.log('home unmounted')
    },
    // 对于保持keep-alive组件，监听有没有进行切换
    activated() {
      console.log('home activated')
    },
    deactivated() {
      console.log('home deactivated')
    }
  }
</script>

<style scoped>

</style>