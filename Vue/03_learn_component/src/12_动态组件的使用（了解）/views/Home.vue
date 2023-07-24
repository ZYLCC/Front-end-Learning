<template>
  <div class="home">
    <h2>home组件 - {{ name }} - {{ age }}</h2>
    <button @click="homeBtnClick">HomeBtn</button>
  </div>
</template>

<script>
  export default {
    props: {
      name: {
        type: String,
        default: 'name'
      },
      age: {
        type: Number,
        default: 0
      }
    },
    emits: ['homeClick'],
    methods: {
      homeBtnClick() {
        this.$emit('homeClick', 'home')
      }
    }
  }
</script>

<style scoped>

</style>