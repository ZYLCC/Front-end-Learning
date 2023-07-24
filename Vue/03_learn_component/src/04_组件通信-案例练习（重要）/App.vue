<template>
  <div class="app">
    <tab-control :titles="['衣服', '鞋子', '裤子']"
                 @tab-item-click="tabItemClick"></tab-control>
    <!-- <tab-control :titles="['流行', '推荐', '最新']"></tab-control> -->
    <h2>{{ pageContents[currentIndex] }}</h2>
  </div>
</template>

<script>
  import TabControl from './TabControl.vue';

  export default {
    components: {
      TabControl
    },
    data() {
      return {
        pageContents: ['衣服列表', '鞋子列表', '裤子列表'],
        currentIndex: 0
      }
    },
    methods: {
      tabItemClick(index) {
        // console.log('app', index)
        this.currentIndex = index
      }
    }
  }
</script>

<style scoped>
  h2 {
    text-align: center;
  }
</style>