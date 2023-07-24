<template>
  <div class="app">
    <div class="tabs">
      <template v-for="(item, index) in tabs" :key="item">
        <button 
          @click="itemClick(item)"
          :class="{active: currentTab === item}">
          {{ item }}
        </button>
      </template>
    </div>
    <div class="view">
      <!-- include 需要子组件定义 name 属性，值可以是 str，reg，arr -->
      <keep-alive include="home">  
        <component  
          :is="currentTab">
        </component>
      </keep-alive>
      <h2>{{ getFromHome }}</h2>
    </div>
  </div>
</template>

<script>
  import Home from './views/Home.vue'
  import About from './views/About.vue'
  import Category from './views/Category.vue'

  export default {
    components: {
      Home, 
      About,
      Category
    },  
    data() {
      return {
        tabs: ['home', 'about', 'category'],
        currentTab: 'home',
        getFromHome: ''
      }
    },
    methods: {
      itemClick(item) {
        this.currentTab = item
      },
      homeClick(payload) {
        console.log('homeClick', payload)
        this.getFromHome = payload + 'Click'
      }
    }
  }
</script>

<style scoped>
  .active {
    color: red;
  }
</style>