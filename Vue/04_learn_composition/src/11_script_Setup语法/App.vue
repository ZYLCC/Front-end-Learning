<template>
  <div>
    <h2>AppContent: {{ message }}</h2>
    <button @click="changeMessage">修改</button>
    <hr>
    <show-info 
      name="cc" 
      :age="25"
      @show-info-btn-click="showInfoBtnClick"
      ref="showInfoRef">
    </show-info>
    <show-info></show-info>
  </div>
</template>

<script setup>
// 1. 所有编写在顶层中的代码，都是默认暴露给 template 可以使用的
  import { onMounted, ref } from 'vue'
  import ShowInfo from './ShwoInfo.vue'

  const message = ref("Hello World!")

  function changeMessage() {
    // 这层作用域的代码，不暴露给 template
    const name = "Lcc"
    message.value = "Hello " + name + "!" 
  }

  function showInfoBtnClick(payload) {
    console.log("监听到showinfo内部的点击", payload)
  }

  // 获取组件实例
  const showInfoRef = ref()
  onMounted(() => {
    
    showInfoRef.value.foo()
  })
</script>

<style scoped>

</style>