<template>
  <div class="modal">
    <el-dialog v-model="dialogVisible" :title="isNewRef ? modalConfig.header.newTitle : modalConfig.header.editTitle" width="30%" center>
      <div class="form" >
        <el-form v-model="formData" label-width="100px">
          <template v-for="item in modalConfig.formItems" :key="item.prop" >
            <el-form-item :="item" size="large">
              <template v-if="item.type === 'input'">
                <el-input
                  :size="item.size"
                  v-model="formData[item.prop]"
                  :placeholder="item.placeholder"
                  />
              </template>
              <template v-if="item.type === 'select'">
                <el-select
                  v-model="formData[item.prop]"
                  :placeholder="item.placeholder"
                  style="width: 100%"
                  size="large"
                >
                  <template v-for="option in item.options" :key="option.value">
                    <!-- <el-option :label="option.label" :value="option.value" /> -->
                    <el-option :label="option.label" :value="option.value" />
                  </template>
                </el-select>
              </template>
              <template v-if="item.type === 'custom'">
                <slot :name="item.slotName"></slot>
              </template>
            </el-form-item>
          </template>
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
  // import useMainStore from '@/store/main/main'
  import useSystemStore from '@/store/main/system/system'
  // import { storeToRefs } from 'pinia'

  // 定义 props
  interface IProps {
    modalConfig: {
      pageName: string
      header: {
        newTitle: string
        editTitle: string
      }
      formItems: any[]
    }
    otherInfo?: any
  }

  const props = defineProps<IProps>()

  // 定义内部的属性
  const dialogVisible = ref(false)
  const initialData: any = {}

  for (const item of props.modalConfig.formItems) {
    initialData[item.prop] = ''
  }

  const formData = reactive<any>(initialData)

  const isNewRef = ref(true)
  const editData = ref()

  // 获取 departments 的数据
  // const mainStore = useMainStore()
  const systemStore = useSystemStore()
  // const { entireDepartments } = storeToRefs(mainStore)

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

    let infoData = { ...formData }
    if (props.otherInfo) {
      infoData = { ...infoData, ...props.otherInfo }
    }

    if (!isNewRef.value && editData.value) { // 编辑用户
      systemStore.editPageDataAction(props.modalConfig.pageName, editData.value.id, infoData)
    } else {  // 新建
      systemStore.newPageDataAction(props.modalConfig.pageName, infoData)
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
