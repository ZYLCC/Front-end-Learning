<template>
  <div>
    <h2>App: {{ info }}</h2><hr>
  </div>
  <show-info :info="info" 
              @showInfoClick="changeInfoName"
              :readonlyInfo="readonlyInfo">
  </show-info>
</template>

<script>
  import { reactive, ref, readonly } from 'vue';
  import ShowInfo from './ShowInfo.vue'

  export default {
    components: {
      ShowInfo
    },

    setup() {
      const info = reactive({
        name: 'cc',
        age: 25,
        height: 180
      })

      const readonlyInfo = readonly(info)

      function changeInfoName(payload) {
        info.name = payload
      }

      return {
        info,
        changeInfoName,
        readonlyInfo
      }
    }
  }
</script>

<style scoped>

</style>