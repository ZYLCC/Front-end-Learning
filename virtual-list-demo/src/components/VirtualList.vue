<script setup>
import { computed, onMounted, ref } from "vue";

// 接收父组件的参数
const props = defineProps(["listData", "itemSize"]);

// 可是区域的高度
let screenHeight = ref(0);
// 滚轮偏移量
let startOffset = ref(0);
// 起始索引
let start = ref(0);
// 结束索引
let end = ref(0);
// 获取到ref=list的元素
let list = ref(null);

onMounted(() => {
  screenHeight.value = list.value.clientHeight;
  start.value = 0;
  end.value = start.value + visibleCount.value;
});

// 不可视列表总高度，撑起list，形成滚动条
const listHeight = computed(() => {
  return props.listData.length * props.itemSize;
});

// 可显示的列表项数
const visibleCount = computed(() => {
  return Math.ceil(screenHeight.value / props.itemSize);
});

// 真实显示数据
const visibleData = computed(() => {
  return props.listData.slice(
    start.value,
    Math.min(end.value, props.listData.length)
  );
});

// 通过偏移量将可视区域往下移动
const getTransform = computed(() => {
  return `translate3d(0,${startOffset.value}px,0)`;
});

// 监听滚动事件
const scrollEvent = function () {
  // 获取list的滚动位置
  let scrollTop = list.value.scrollTop;
  // 滚动时此时的开始索引
  start.value = Math.floor(scrollTop / props.itemSize);
  // 滚动时此时的结束索引
  end.value = start.value + visibleCount.value;
  // 此时的偏移量
  // 假设 scollTop 为 180 px，计算出 startOffset 为 150 px，则需要将可视区别通过 ` translate3d(0,150px,0) ` 向下平移 150 px。
  startOffset.value = scrollTop - (scrollTop % props.itemSize);
};
</script>

<template>
  <div ref="list" class="infinite-list-container" @scroll="scrollEvent($event)">
    <div
      class="infinite-list-phantom"
      :style="{ height: listHeight + 'px' }"
    ></div>
    <div class="infinite-list" :style="{ transform: getTransform }">
      <div
        ref="items"
        class="infinite-list-item"
        v-for="item in visibleData"
        :key="item.id"
        :style="{
          height: props.itemSize + 'px',
          lineHeight: props.itemSize + 'px',
        }"
      >
        {{ item.value }}
      </div>
    </div>
  </div>
</template>

<style scoped>
.infinite-list-container {
  height: 100%;
  overflow: auto;
  position: relative;
  /* -webkit-overflow-scrolling: touch; */
}

.infinite-list-phantom {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  /* 不可使列表，撑起滚动条 */
  z-index: -1;
}

.infinite-list {
  left: 0;
  right: 0;
  top: 0;
  position: absolute;
  text-align: center;
}

.infinite-list-item {
  padding: 10px;
  color: #555;
  box-sizing: border-box;
  border-bottom: 1px solid #999;
}
</style>
