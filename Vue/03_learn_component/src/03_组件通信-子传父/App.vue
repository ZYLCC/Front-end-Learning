<template>
  <div class="app">
    <h2>当前计数：{{ counter }}</h2>
    
    <add-button @add="addBtnClick"></add-button>
    <sub-button @sub="subBtnClick"></sub-button>
  </div>
</template>

<script>
  import AddButton from './AddButton.vue'
  import SubButton from './SubButton.vue'

  export default {
    
    components: {
      AddButton,
      SubButton
    },
    data() {
      return {
        counter: 0
      }
    },
    methods: {
      addBtnClick(count) {
        this.counter += count
      },
      subBtnClick(count) {
        this.counter -= count
      }
    }
  }
</script>

<style scoped>

</style> 
 