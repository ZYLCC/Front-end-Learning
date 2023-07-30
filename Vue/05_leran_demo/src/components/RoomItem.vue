<template>
  <div class="room-item">
    <div class="item-inner">
      <div class="pic">
        <img :src="item.picture_url" alt="">
      </div>
      <div class="info">
        <div class="title" :style="{ color: titleInfo.color }">
          {{ titleInfo.text }}
        </div>
        <div class="name">
          {{ item.name }}
        </div>
        <div class="price">
          {{ item.price_format + "/晚" }}
        </div>
        <div class="bottom-info" :style="bottomInfo.style">
          {{ bottomInfo.content }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import {computed} from "vue"

  const props = defineProps({
    item: {
      type: Object,
      default: () => ({})
    }
  })

  // 计算属性
  // const titleText = computed(() => {
  //   return props.item.verify_info.messages.join(" ")
  // })
  // const titleColor = computed(() => {
  //   return props.item.verify_info.text_color
  // })
  const titleInfo = computed(() => {
    return {
      text: props.item.verify_info.messages.join(" "),
      color: props.item.verify_info.text_color
    }
  })

  const bottomInfo = computed(() => {
    return {
      content: props.item.bottom_info.content,
      style: {
        color: props.item.bottom_info.content_color,
        fontSize: props.item.bottom_info.font_size + 'px'
      }
    }
  })
</script>

<style lang="less" scoped>
  .room-item {
    width: 33.333333%;

    .item-inner {
      margin: 0 8px 12px;
      color: #484848;
      font-weight: 800;

      img {
        width: 100%;
        border-radius: 3px;
      }

      .info {
        .title {
          margin-top: 8px;
          font-size: 12px;
        }

        .name {
          margin-top: 3px;
          font-size: 16px;

          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
        }

        .price {
          margin: 3px 0;
          font-size: 14px;
          font-weight: 400;
        }
      }
    }
  }
</style>