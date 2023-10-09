<template>
  <div class="modal">
    <el-dialog v-model="dialogVisible" :title="isNewRef ? '新建用户' : '编辑用户'" width="30%" center>
      <div class="form" >
        <el-form v-model="formData" label-width="80px">
          <el-form-item label="用户名" prop="name">
            <el-input v-model="formData.name" size="large" placeholder="请输入用户名"></el-input>
          </el-form-item>
          <el-form-item label="真实姓名" prop="realname">
            <el-input v-model="formData.realname" size="large" placeholder="请输入真实姓名"></el-input>
          </el-form-item>
          <el-form-item v-if="isNewRef" label="密码" prop="password">
            <el-input v-model="formData.password" size="large" placeholder="请输入密码" show-password></el-input>
          </el-form-item>
          <el-form-item label="手机号码" prop="cellphone">
            <el-input v-model="formData.cellphone" size="large" placeholder="请输入手机号码"></el-input>
          </el-form-item>
          <el-form-item label="选择角色" prop="roleId">
            <el-select v-model="formData.roleId" placeholder="请选择角色" size="large" style="width: 100%">
              <template v-for="item in entireRoles" :key="item.id">
                <el-option :label="item.name" :value="item.id"></el-option>
              </template>
            </el-select>
          </el-form-item>
          <el-form-item label="选择部门" prop="departmentId">
            <el-select v-model="formData.departmentId" placeholder="请选择部门" size="large" style="width: 100%">
              <template v-for="item in entireDepartments" :key="item.id">
                <el-option :label="item.name" :value="item.id"></el-option>
              </template>
            </el-select>
          </el-form-item>
        </el-form>
      </div>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogVisible = false" size="large">取消</el-button>
          <el-button type="primary" @click="handleConfirmClick" size="large">
            确定
          </el-button>
        </span>
      </template>
  </el-dialog>
  </div>
</template>

<script setup lang="ts">
  import { reactive, ref } from 'vue'
  import useMainStore from '@/store/main/main'
  import useSystemStore from '@/store/main/system/system'
  import { storeToRefs } from 'pinia'

  // 定义内部的属性
  const dialogVisible = ref(false)
  const formData = reactive<any>({
    name: '',
    realname: '',
    password: '',
    cellphone: '',
    roleId: '',
    departmentId: '',
  })

  const isNewRef = ref(true)
  const editData = ref()

  // 获取 roles departments 的数据
  const mainStore = useMainStore()
  const systemStore = useSystemStore()
  const { entireDepartments, entireRoles } = storeToRefs(mainStore)

  // 定义控制 dialogVisible 的方法
  function setModalVisible(isNew: boolean = true, itemData?: any) {
    dialogVisible.value = true
    isNewRef.value = isNew
    if (!isNew && itemData) { // 编辑
      for (const key in formData) {
        formData[key] = itemData[key]
      }
      editData.value = itemData
    } else { // 新建
      for (const key in formData) {
        formData[key] = ''
      }
      editData.value = null
    }
  }

  // 点击新建用户框的确定按钮逻辑
  function handleConfirmClick() {
    dialogVisible.value = false
    if (!isNewRef.value && editData.value) { // 编辑新用户
      systemStore.editUserDataAction(editData.value.id, formData)
    } else {  // 新建
      systemStore.newUserDataAction(formData)
    }
  }

  // 暴露属性和方法
  defineExpose({ setModalVisible })
</script>

<style scoped lang="less">
  .form {
    padding: 0 20px;
  }
</style>
