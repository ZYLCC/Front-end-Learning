<template>
  <h2 ref="titleRef">我是标题</h2>
  <button ref="btnRef">按钮</button>
  <show-info ref="showInfoRef"></show-info>

</template>

<script>
  import { reactive, ref, onMounted } from 'vue'
  import ShowInfo from './ShowInfo.vue'
 
  export default {
    components: {
      ShowInfo
    },

    setup() {
      const titleRef = ref()
      const btnRef = ref()
      const showInfoRef = ref()

      onMounted(() => {
        console.log(titleRef.value)
        console.log(btnRef.value)
        console.log(showInfoRef.value)

        showInfoRef.value.showInfoFoo()
      })

      return {
        titleRef, 
        btnRef,
        showInfoRef,
      }
    }
  }
</script>

<style scoped>

</style>