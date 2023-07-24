<template>
  <div class="app">
    <h2 ref="title">{{ message }}</h2>
    <button ref="btn" @click="changeTitle">修改title</button>

    <banner ref="banner"></banner>
  </div>
</template>

<script>
  import Banner from './Banner.vue';

  export default {
    components: {
      Banner
    },
    data() {
      return {
        message: 'Hello App'
      }
    },
    methods: {
      changeTitle() {
        this.message += '~~'
        this.$refs.title.style = 'color: red'

        // 1. 获取 h2/btn 元素
        console.log(this.$refs.title)
        console.log(this.$refs.btn)

        // 2. 获取 banner 组件：组件实例
        console.log(this.$refs.banner)
        console.log(this.$refs.banner.bannerMessage)
        // 2.1 在父组件中可以主动调用子组件的对象方法
        console.log(this.$refs.banner.bannerClick())
        // 2.2 获取 banner 组件的元素: 获取根节点元素
        console.log(this.$refs.banner.$el)
        // 2.3 如果 banner template 是多个根，拿到的是第一个 Node 节点
        console.log(this.$refs.banner.$el)  // #text
        
        // 组件实例 $root $parent 分别获取根组件、父组件
      }
    }
  }
</script>

<style scoped>

</style>