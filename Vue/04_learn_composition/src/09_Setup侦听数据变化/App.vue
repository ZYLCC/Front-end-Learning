<template>
  <div>
    <h2>当前计数：{{ counter }} <br> name: {{ name }}</h2>
    <button @click="counter++">+1</button><br>
    <button @click="name = 'zy'">修改name</button>
  </div>
</template>

<script>
  import { watchEffect, ref } from 'vue';

  export default {
    setup() {
      const counter = ref(0)
      const name = ref('lcc')

      // 1. 传入的函数默认会执行，
      // 2. 执行过程中，会自动收集依赖（依赖哪些响应式数据）
      const watchId = watchEffect(() => {
        console.log('----------', counter.value, name.value)

        if (counter.value >= 10) {
          console.log('stopWatch')
          watchId()
        }
      })

      return {
        counter,
        name
      }
    }
  }
</script>

<style scoped>

</style>