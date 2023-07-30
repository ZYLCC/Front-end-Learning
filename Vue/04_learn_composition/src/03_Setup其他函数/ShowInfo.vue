<template>
  <h2>ShowInfo: {{ info }}</h2>
  <!-- 修改父组件传过来的 info 数据 
       可行，但不规范，不符合单项数据流（父组件给的数据能用，最好别改）
       如果要修改，应该将事件传出去，由父组件来修改 -->
       <!-- <button @click="info.name = 'lcc'">ShowInfo按钮</button> -->

  <!-- 正确的做法 -->
  <button @click="showInfoClick">ShowInfo按钮(传给父组件修改)</button>
  <hr>

  <!-- 使用 readonly 数据 -->
  <h2>ShowInfo(readonly): {{ readonlyInfo }}</h2>
  <!-- 修改不了，会报警告  -->
  <button @click="readonlyInfo.name = 'lcc'">ShowInfo(readonly)按钮</button>
</template>

<script>
  export default {
    props: {
      info: {
        type: Object,
        default: () => ({})
      },
      // 只读的数据
      readonlyInfo: {
        type: Object,
        default: () => ({})
      }
    },
    emits: ['showInfoClick'],
    setup(props, context) {
      function showInfoClick() {
        // setup 中不能写 this
        // this.$emit('showInfoClick', 'lcc')
        context.emit('showInfoClick', 'lcc')
      }

      return {
        showInfoClick
      }
    }


  }
</script>

<style scoped>

</style>