<template>
  <div class="add">
    <button @click="btnClick(1)">+1</button>
    <button @click="btnClick(5)">+5</button>
    <button @click="btnClick(10)">+10</button>
  </div>
</template>

<script>
  export default {
    // 1. emits 数组语法
    emits: ['add'],  // 根据代码规范，注册一下传出的方法

    // 2. emits 对象语法   (用来验证)  如果未验证会报警告
    // emits: {
    //   add: function(count) {
    //     if (count <= 10) {
    //       return true
    //     } else {
    //       return false
    //     }
    //   }
    // },  
    methods: {
      btnClick(count) {
        /* 
          让子组件发出去一个自定义事件
          > 第一个参数：自定义事件的名称
          > 第二个参数：传递的参数
        */
        this.$emit('add', count)
      }
    }
  }
</script>

<style scoped>

</style>