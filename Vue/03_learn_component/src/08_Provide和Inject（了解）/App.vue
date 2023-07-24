<template>
  <div>app</div>
  <home></home>
</template>

<script>
  import Home from './Home.vue';

  export default {
    components: {
      Home
    },
    data() {
      return {
        loverAge: 26
      }
    },
    // provide: {
    //   name: 'cc',
    //   age: 25,
    //   lover: 'zy'
    // },

    // 当 provide 需要使用 data 中的数据，用这种方式
    provide() {
      return {
        name: 'cc',
        age: 25,
        lover: 'zy',
        loverAge: this.loverAge
      } 
    }
  }
</script>

<style scoped>

</style> 