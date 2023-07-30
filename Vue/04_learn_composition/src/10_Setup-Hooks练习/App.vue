<template>
  <div>
    <h2>AppContent</h2>
    <button @click="changeTitle()">修改title</button>
    <button @click="currentPage = 'home'">切换到Home</button>
    <button @click="currentPage = 'about'">切换到About</button>
    <!-- <hr>
    <home></home>
    <hr>
    <about></about> -->
    <keep-alive include="home,about">
      <component :is="currentPage"></component>
    </keep-alive>

    
  </div>
</template>

<script>
  import { ref } from 'vue'
  import Home from './views/Home.vue'
  import About from './views/About.vue'
  import useTitle from './hooks/useTitle'

  export default {
    components: {
      Home,
      About,
    },

    setup() {
      const currentPage = ref('home')

      function changeTitle() {
        useTitle('App Title')
      }

      return {
        changeTitle,
        currentPage
      }
    }
  }
</script>

<style scoped>
  
</style>