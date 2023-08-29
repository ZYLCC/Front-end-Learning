<template>
  <div class="pane-account">
    <el-form :model="account" label-width="60px" size="large" :rules="rules">
      <el-form-item label="账号" prop="name">
        <el-input v-model="account.name"/>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="account.password" show-password/>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">
  import { reactive } from 'vue'
  import type { FormRules } from 'element-plus'

  const account = reactive({
    name: '',
    password: ''
  })

  const rules: FormRules = {
    name: [
      {required: true, message: '请输入账号~', trigger: 'blur'},
      {min: 6, max: 20, message: '用户名必须是6~20位', trigger: 'blur'}
    ],
    password: [
      {required: true, message: '请输入密码~', trigger: 'blur'},
      {pattern: /^[a-z0-9]{6,20}$/, message: '密码必须是6~20位的数字或字母~', trigger: 'blur'}
    ]
  }

  // 执行账号的登录逻辑
  function loginAction() {
    console.log('pane-account login')

  }

  defineExpose({
    loginAction
  })
</script>

<style scoped lang="less">
  .pane-account {

  }
</style>
