<template>
  <div class="app">
    <room-area :high-score="highScore"></room-area>
  </div>
</template>

<script setup>
  import highScore from "./data/high_score.json"
  import RoomArea from "./components/RoomArea.vue"

  console.log(highScore);

</script>

<style lang="less" scoped>
  .app {
    width: 1032px;
    margin: 0 auto;
    padding: 30px;

    
  }

</style>