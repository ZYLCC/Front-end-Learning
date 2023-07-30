<template>
  <div>
    <h2>ShowInfo: {{ props.name }} - {{ props.age }}</h2>
    <h2>ShowInfo: {{ name }} - {{ age }}</h2>
    <h2>props: {{ props }}</h2>
    <button @click="showInfoClick">ShowInfo按钮</button>
  </div>
</template>

<script setup>
  // 定义 props
  const props = defineProps({
    name: {
      type: String,
      default: "default"
    },
    age: {
      type: Number,
      default: 0
    }
  })

  // 绑定函数，并且发出事件
  const emits = defineEmits(["showInfoBtnClick"]) // 传出去的名字
  function showInfoClick() { 
    emits("showInfoBtnClick", "ShowInfo内部发生了点击")
  }

  
  function foo() {
    console.log("ShowInfo foo function")
  }
  // 暴露给父组件
  defineExpose({
    foo,
  })
</script>

<style scoped>

</style>