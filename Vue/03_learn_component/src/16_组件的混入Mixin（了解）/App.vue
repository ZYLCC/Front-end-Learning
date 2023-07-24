<template>
  <div class="app">
    <home></home>
    <about></about>
    <category></category>
  </div>
</template>

<script>
  import About from './views/About.vue';
  import Category from './views/Category.vue';
  import Home from './views/Home.vue';

  export default {
    components: {
      About,
      Home,
      Category
    }
  }
</script>

<style scoped>

</style>