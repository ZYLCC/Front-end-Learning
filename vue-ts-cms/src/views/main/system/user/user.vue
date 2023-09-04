<template>
  <div class="user">
    <user-search></user-search>
    <user-content></user-content>
  </div>
</template>

<script setup lang="ts">
  import UserSearch from './c-cpns/user-search.vue'
  import userContent from './c-cpns/user-content.vue'

</script>

<style scoped lang="less">
  .user {
    border-radius: 8px;
    overflow: hidden;
  }
</style>
