<template>
  <!-- 1. 区域 header -->
  <area-header :title="highScore.title"
               :subtitle="highScore.subtitle"/>

    <!-- 2. 房间列表 -->
  <div class="room-list">
    <template v-for="item in highScore.list" :key="item.id">
      <room-item :item="item"/>
    </template>
  </div>
</template>

<script setup>
  import AreaHeader from "./AreaHeader.vue"
  import RoomItem from "./RoomItem.vue"

  defineProps({
    highScore: {
      type: Object,
      default: () => ({})
    }
  })
</script>

<style scoped>
  .room-list {
    display: flex;
    flex-wrap: wrap;
  }
</style>