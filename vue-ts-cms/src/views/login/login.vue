<template>
  <div class="login">
    <login-panel></login-panel>
  </div>
</template>

<script setup lang="ts">
  import LoginPanel from './children-cpns/login-panel.vue'

</script>

<style scoped lang="less">
  .login {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;
    height: 100%;

    background: url(../../assets/img/login-bg.svg);
  }
</style>
