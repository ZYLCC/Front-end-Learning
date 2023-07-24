<template>
  <!-- 加冒号是让后面的数据变为 Number 类型 -->

  <!-- 如果当前属性为 非 prop 的 attribute， 那么该属性将自动添加到根节点的 attribute 中 (只有单个根节点) -->
  <show-info name="lcc" :age="25" :height="180" address="cdc" class="active"></show-info>
  <hr>
  <show-info name="xyz" :age="20" :height="111"></show-info>
  <hr>
  <h1>无数据：</h1>
  <show-info name="zy"></show-info>
</template>

<script>
  import ShowInfo from './ShowInfo.vue';

  export default {
    components: {
      ShowInfo
    }
  }
</script>

<style scoped>

</style>