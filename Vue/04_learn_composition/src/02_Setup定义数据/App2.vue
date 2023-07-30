<template>
  <div>
    <form>
      账号：<input type="text" v-model="account.username">
      密码：<input type="text" v-model="account.password">
    </form>
  </div>
</template>

<script>
import { reactive, ref } from 'vue'

  export default {
    setup() {
      // 定义响应式数据： reactive/ref
      // ref 也可以定义复杂类型数据
      const info = ref({})
      console.log(info.value)

      // 1.reactive 应用场景
      // 1.1 应用于本地数据
      // 1.2 多个数据之间是有关系的
      const account = reactive({
        username: 'cccccc',
        password: '123456'
      })

      return {
        account,
      }
    }
  }
</script>

<style scoped>

</style>