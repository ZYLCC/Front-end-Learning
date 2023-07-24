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
      <!-- 第一种做法：通过 v-if 进行判断 -->
      <!-- <template v-if="currentIndex === 0">
        <home></home>
      </template>
      <template v-else-if="currentIndex === 1">
        <about></about>
      </template>
      <template v-else="currentIndex === 3">
        <category></category>
      </template> -->

      <!-- 第二种做法：通过 动态组件 实现 -->
      <!-- is 中的组件需要来自两个地方：1. 全局注册的组件 2. 局部注册的组件 -->
      <component 
        name="cc" 
        :age="25"   
        :is="currentTab"
        @homeClick="homeClick">
      </component>
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