<template>
  <div class="login-panel">
    <h1 class="title">后台管理系统</h1>
    <div class="tabs">
      <el-tabs type="border-card" stretch v-model="activeName">
        <!-- 账号登录 -->
        <el-tab-pane name="account">
          <template #label>
            <div class="label">
              <el-icon><UserFilled /></el-icon>
              <span class="text">账号登录</span>
            </div>
          </template>
          <pane-account ref="accountRef"></pane-account>
        </el-tab-pane>
        <!-- 手机登录 -->
        <el-tab-pane name="phone">
          <template #label>
            <div class="label">
              <el-icon><Cellphone /></el-icon>
              <span class="text">手机登录</span>
            </div>
          </template>
          <pane-phone></pane-phone>
        </el-tab-pane>
      </el-tabs>
    </div>

    <!-- 底部区域 -->
    <div class="controls">
      <el-checkbox v-model="isRememberPwd" label="记住密码" size="large" />
      <el-link type="primary">忘记密码</el-link>
    </div>
    <el-button
      class="login-btn"
      type="primary"
      size="large"
      @click="handleLoginAction">立即登录
    </el-button>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import PaneAccount from './pane-account.vue'
  import PanePhone from './pane-phone.vue'

  const isRememberPwd = ref(false)
  const activeName = ref('account')
  const accountRef = ref<InstanceType<typeof PaneAccount>>()

  function handleLoginAction() {
    if (activeName.value === 'account') {
      accountRef.value?.loginAction()
    } else {
      console.log('手机登录')

    }
  }
</script>

<style scoped lang="less">
  .login-panel {
    width: 330px;
    margin-bottom: 150px;
  }
  .title {
    text-align: center;
    margin-bottom: 15px;
  }

  .label {
    display: flex;
    align-items: center;
    justify-content: center;

    .text {
      margin-left: 5px;
    }
  }

  .controls {
    margin-top: 12px;
    display: flex;

    justify-content: space-between;
  }

  .login-btn {
    margin-top: 10px;
    width: 100%;
    // 这里设置优先级较高
    --el-button-size: 40px !important;
  }
</style>
