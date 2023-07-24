<template>
  <!-- 一个不起名的slot，默认 name 为 default -->
  <div class="nav-bar">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="mid">
      <slot name="mid"></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
  export default {

  }
</script>

<style scoped>
  .nav-bar {
    display: flex;
    height: 44px;
    line-height: 44px;
    text-align: center;
  }
  .left {
    width: 80px;
    background-color: pink;
  }

  .mid {
    flex: 1;
    background-color: skyblue;
  }

  .right {
    width: 80px;
    background-color: orange;
  }
</style>