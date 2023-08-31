<template>
  <div class="pane-phone">
    <el-form
      label-width="60px" size="large"
      status-icon
      ref="formRef"
    >
      <el-form-item label="手机号">
        <el-input/>
      </el-form-item>
      <el-form-item label="验证码">
        <div class="verity-code">
          <el-input/>
          <el-button class="get-code-btn el-button el-button--primary el-button--large">获取验证码</el-button>
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="less">
  .verity-code {
    display: flex;

    .get-code-btn {
      margin-left: 8px;
    }
  }
</style>
