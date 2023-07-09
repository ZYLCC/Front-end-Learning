<template>
  <div class="app">
    <tab-control :titles="['衣服', '鞋子', '裤子']"></tab-control>
  </div>
</template>

<script>
  import TabControl from './TabControl.vue';

  export default {
    components: {
      TabControl
    }
  }
</script>

<style scoped>

</style>