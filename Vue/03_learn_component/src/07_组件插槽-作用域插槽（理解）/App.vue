<template>
  <div class="app">
    <tab-control :titles="['衣服', '鞋子', '裤子']"
                 @tab-item-click="tabItemClick">
    </tab-control>
    <hr>

    <!-- 独占默认插槽-插槽作用域 -->
    <!-- 多个插槽的写法 v-slot:name="" -->
    <tab-control :titles="['衣服', '鞋子', '裤子']"
                 @tab-item-click="tabItemClick">
      <template #="props">
        <button>{{ props.item }}</button>
      </template>
    </tab-control><hr>
    
    <!-- 只有一个默认插槽可以不用写 template，v-slot 写在子组件标签内 -->
    <tab-control :titles="['衣服', '鞋子', '裤子']"
                 @tab-item-click="tabItemClick"
                 v-slot="props">
      <a href="#">{{ props.item }}</a>
    </tab-control>
   


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