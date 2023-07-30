<template>
  <div>
    <h2>ShowInfo: {{ name }} - {{ age }}</h2>
  </div>
</template>

<script>
  import { inject } from 'vue';

  export default {
    setup() {
      const name = inject('name')
      const age = inject('age')

      return {
        name,
        age,
      }
    }
  }
</script>

<style scoped>

</style>