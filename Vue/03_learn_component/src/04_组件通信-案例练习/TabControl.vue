<template>
  <div class="tab-control">
    <div class="tab-control-item" v-for="item in titles">{{ item }}</div>
  </div>
</template>

<script>
  export default {
    props: {
      titles: {
        type: Array,
        default: []
      }
    }
  }
</script>

<style scoped>
  .tab-control {
    display: flex;
    
  }

  .tab-control-item {
    flex: 1;
  }
</style>