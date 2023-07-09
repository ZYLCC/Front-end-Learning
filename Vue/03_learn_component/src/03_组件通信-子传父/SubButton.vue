<template>
  <div class="sub">
    <button @click="BtnClick(1)">-1</button>
    <button @click="BtnClick(5)">-5</button>
    <button @click="BtnClick(10)">-10</button>
  </div>
</template>

<script>
  export default {
    // 1. emits 数组语法
    emits: ['sub'],  // 根据代码规范，注册一下传出的方法

    // 2. emits 对象语法   (用来验证)  如果未验证会报警告
    // emits: {
    //   sub: function(count) {
    //     if (count <= 10) {
    //       return true
    //     } else {
    //       return false
    //     }
    //   }
    // },  
    methods: {
      BtnClick(count) {
        this.$emit('sub', count) 
      }
    }
  }
</script>

<style scoped>

</style>