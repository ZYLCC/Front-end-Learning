<template>
 <h2>Home</h2>
</template>

<script>
  import messageMixin from '../mixins/message-mixin'

  export default {
    // 混入 Mixin
    mixins: [messageMixin]
    // 自身的 data：默认情况会进行合并；如果发生命名冲突，则保留组件自身的数据
    // 生命周期的钩子函数“都”会被调用
    
  }
</script>

<style scoped>

</style>