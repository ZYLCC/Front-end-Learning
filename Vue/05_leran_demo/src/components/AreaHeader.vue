<template>
  <div class="area-header">
    <div class="title">
      <h3>{{ title }}</h3>
    </div>
    <div class="desc">{{ subtitle }}</div>
  </div>
</template>

<script setup>
  defineProps({
    title: {
      type: String,
      default: "默认标题"
    },
    subtitle: {
      type: String,
      default: "默认标题"
    }
  })
</script>

<style lang="less" scoped>
  .area-header {
      height: 84px;

      .title {
        font-style: 22px;
      }

      .desc {
        margin-top: 12px;
        font-style: 16px;
      }
    }
</style>