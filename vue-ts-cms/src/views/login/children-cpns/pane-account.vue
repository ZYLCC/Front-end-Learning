<template>
  <div class="pane-account">
    <el-form
      :model="accounts"
      label-width="60px" size="large"
      :rules="rules"
      status-icon
      ref="formRef"
    >
      <el-form-item label="账号" prop="account">
        <el-input v-model="accounts.account"/>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="accounts.password" show-password/>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import { reactive } from 'vue'
  import type { FormRules, ElForm } from 'element-plus'
  // import { accountLoginRequest } from '@/service/login/login'
  import useLoginStore from '@/store/login/login'
  // import { ElMessage } from 'element-plus'
  import type { IAccount } from '@/types'

  const accounts: IAccount = reactive({
    account: '',
    password: ''
  })

  const rules: FormRules = {
    account: [
      {required: true, message: '请输入账号~', trigger: 'blur'},
      {min: 6, max: 20, message: '用户名必须是6~20位', trigger: 'blur'}
    ],
    password: [
      {required: true, message: '请输入密码~', trigger: 'blur'},
      // {pattern: /^[a-z0-9]{6,20}$/, message: '密码必须是6~20位的数字或字母~', trigger: 'blur'}
    ]
  }

  // 执行账号的登录逻辑
  const formRef = ref<InstanceType<typeof ElForm>>()
  const loginStore = useLoginStore()
  function loginAction() {
    formRef.value?.validate((valid) => {
      if (valid) {
        // 1. 获取用户名和密码
        const account = accounts.account
        const password = accounts.password
        // 2. 向服务器发送网络请求（携带用户名和密码）
        loginStore.loginAccountAction({account, password})

        ElMessage({
          message: '登录成功~',
          type: 'success',
        })



      } else {
        ElMessage.error('验证失败，请重新输入~')
      }
    })
  }

  defineExpose({
    loginAction
  })
</script>

<style scoped lang="less">
  .pane-account {

  }
</style>
