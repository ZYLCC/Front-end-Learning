<template>
  <div>
    <show-info></show-info>
    <button @click="changePerson">换人(app btn)</button>
  </div>
</template>

<script>
  import { provide, ref } from 'vue'
  import ShowInfo from './ShowInfo.vue'

  export default {
    components: {
      ShowInfo
    },
    setup() {
      const name = ref('cc')
      const age = ref(25)

      provide('name', name)
      provide('age', age)

      function changePerson() {
        name.value = 'zy'
        age.value = 26
      }

      return {
        changePerson,
      }
    }
  }
</script>

<style scoped>

</style>