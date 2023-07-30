<template>
  <div>
    <h2>Info: {{ fullname }}</h2>
  </div>
</template>

<script>
  import { reactive, computed, ref } from 'vue';

  export default {
    setup() {
      const names = reactive({
        firstName: 'cc',
        lastName: 'L'
      })

      const fullname = computed(() => {
        return names.lastName + names.firstName
      })

      return {
        names, 
        fullname
      }
    }
  }
</script>

<style scoped>

</style>