<template>
  <div>
    <h2>About计数：{{ counter }}</h2>
    <button @click="plus1">+1</button>
    <button @click="minus1">-1</button>
  </div>
</template>

<script>
  import useCounter from '../hooks/useCounter'
  import useTitle from '../hooks/useTitle';

  export default {
    setup() {
      useTitle('about')

      return {
        ...useCounter()
      }
    }
  }
</script>

<style scoped>

</style>