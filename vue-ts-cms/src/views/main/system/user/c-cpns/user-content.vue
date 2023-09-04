<template>
  <div class="content">
    <div class="header">
      <h2 class="title">用户列表</h2>
      <el-button type="primary">新建用户</el-button>
    </div>

    <div class="table">表格</div>

    <div class="pagination">分页</div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="less">
  .content {
    background-color: #fff;
    margin-top: 20px;
    padding: 20px;
  }

  .header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
    .title {
      font-size: 22pxh2;
    }
  }
</style>
