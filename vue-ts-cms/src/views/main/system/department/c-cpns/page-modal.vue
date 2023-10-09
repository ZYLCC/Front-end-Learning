<template>
  <div class="modal">
    <el-dialog v-model="dialogVisible" :title="isNewRef ? '新建部门' : '编辑部门'" width="30%" center>
      <div class="form" >
        <el-form v-model="formData" label-width="100px">
          <el-form-item label="部门名称" prop="name">
            <el-input v-model="formData.name" size="large" placeholder="请输入部门名称"></el-input>
          </el-form-item>
          <el-form-item label="部门领导" prop="leader">
            <el-input v-model="formData.leader" size="large" placeholder="请输入部门领导"></el-input>
          </el-form-item>
          <el-form-item label="选择上级部门" prop="parentId">
            <el-select v-model="formData.parentId" placeholder="请选择部门" size="large" style="width: 100%">
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
    leader: '',
    parentId: ''
  })

  const isNewRef = ref(true)
  const editData = ref()

  // 获取 departments 的数据
  const mainStore = useMainStore()
  const systemStore = useSystemStore()
  const { entireDepartments } = storeToRefs(mainStore)

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

  // 点击新建框的确定按钮逻辑
  function handleConfirmClick() {
    dialogVisible.value = false
    if (!isNewRef.value && editData.value) { // 编辑新用户
      systemStore.editPageDataAction('department', editData.value.id, formData)
    } else {  // 新建
      systemStore.newPageDataAction('department', formData)
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
