<template>
  <div>
    <h2>message: {{ message }}</h2>
    <button @click="changeMessage">点击修改</button>
    <template v-if="show">
      <button @click="changeName">修改名字</button>
    </template>
    <hr>

    <!-- template 中的 ref 对象会自动解包 -->
    <h2>counter：{{ counter }}</h2>
    <button @click="counter++">+1(无.value)</button>
    <hr>

    <!-- 数据在深层时，使用时会自动解包（不用.value） -->
    <h2>cnt.counter：{{ cnt.counter }}</h2>
    <!-- 修改时不会自动解包（需要.value） -->
    <button @click="cnt.counter.value++">+1(有.value)</button>
    <button @click="cnt.counter++">+1(无.value)</button>
    
  </div>
</template>

<script>
import { ref } from 'vue'
import { reactive } from 'vue'

  export default {
    setup() {
      // 定义响应式数据
      // 1. 使用 ref：定义基本数据类型, 也可以定义复杂类型数据
      let message = ref('Hello World!')
      let show = ref(false)
      let counter = ref(0)
      const cnt = {
        counter
      }

      // 2. reactive函数：定义复杂类型的数据
      const fullName = reactive({
        firstName: 'L',
        lastName: 'cc'
      })


      function changeMessage() {
        message.value = 'Hello ' + fullName.firstName + fullName.lastName
        show.value = true
      }

      function changeName() {
        fullName.firstName = 'z'
        fullName.lastName = 'y'
        changeMessage()
      }

      return {
        message,
        fullName,
        changeMessage,
        changeName,
        show,
        counter,
        cnt
      }
    }

    
  }
</script>

<style scoped>

</style>