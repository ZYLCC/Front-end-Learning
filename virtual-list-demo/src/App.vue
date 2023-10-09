<script setup>
import VirtualList from "./components/VirtualList.vue";
import { ref } from "vue";
// 所有列表的数据
let arr = ref([]);
for (let i = 0; i < 1000; i++) {
  arr.value.push({ id: i, value: i });
}
// 列表每一项的高度
let itemSize = ref(100);
</script>

<template>
  <div id="app">
    <virtual-list :listData="arr" :itemSize="itemSize"></virtual-list>
  </div>
</template>

<style>
html {
  height: 100%;
}
body {
  height: 100%;
  margin: 0;
}
#app {
  height: 100%;
}
</style>
