<template>
  <div class="home">
    <h2>Home page</h2>
    <h2>userInfo: {{ name }} - {{ age }} - {{ level }}</h2>
    <button @click="changeInfo">修改info</button>
    <button @click="changeState">修改state</button>
    <button @click="resetState">重置state</button>
  </div>
</template>


<script setup>
  import useUser from '@/stores/user'
  import { toRefs } from 'vue'  

  const userStore = useUser()

  const { name, age, level } = toRefs(userStore)

  function changeInfo() {
    // 1. 单个修改状态
    // userStore.name = "zy"
    // userStore.age = 26
    // userStore.level = 100

    // 2. 一次性修改多个状态
    // userStore.$patch({
    //   name: "Lcc",
    //   level: "101"
    // })
  }

  function changeState() {
    // 3. 替换 state 为新的对象
    userStore.$state = {
      name: "Zy",
      level: 200,
      height: 158
    }
  }

  function resetState() {
    userStore.$reset()
  }

</script>

<style scoped>

</style>