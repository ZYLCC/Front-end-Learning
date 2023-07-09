<template>
  <h2>{{title}}</h2>
  <hr>

  <product-item></product-item>
</template>



<script>
  import ProductItem from './ProductItem.vue'

  export default {
    // 局部注册
    components: {
      ProductItem
    },
    data() {
      return {
        title: '我也是标题'
      }
    },
  }
</script>

<style>
  h2 {
    color: red;
  }
</style>