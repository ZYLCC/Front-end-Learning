<template>
  <div>
    <h2>info: {{ name }} - {{ age }} - {{ height }}</h2>
    <button @click="changeInfo">换人</button>
  </div>
</template>

<script>
  import { reactive, ref, toRef, toRefs } from 'vue';

  export default {
    setup() {
      const info = reactive({
        name: 'cc',
        age: 25,
        height: 180
      })

      // reactive 被解构后会变成普通的值，失去响应式
      // const { name, age } = info
      // 解决办法：
      const { name, age } = toRefs(info)
      const height = toRef(info, 'height')

      function changeInfo() {
        info.name = 'zy'
        info.age++
        info.height = 158
      }

      return {
        info,
        name, 
        age,
        height,
        changeInfo
      }
    }
  }
</script>

<style scoped>

</style>