<template>
  <div class="search" v-if="isQuery">
    <el-form label-width="80px" size="large" :model="searchForm">
      <el-row :gutter="80">
        <template v-for="item in searchConfig.formItems" :key="item.prop">
          <el-col :span="8">
            <el-form-item :label="item.label" :prop="item.prop">
              <template v-if="item.type === 'input'">
                <el-input
                  :size="item.size"
                  v-model="searchForm[item.prop]"
                  :placeholder="item.placeholder"
                  />
              </template>
              <template v-if="item.type === 'date-picker'">
                <el-date-picker
                  :size="item.size"
                  v-model="searchForm[item.prop]"
                  type="daterange"
                  range-separator=" - "
                  start-placeholder="开始时间"
                  end-placeholder="结束时间"
                />
              </template>
            </el-form-item>
          </el-col>
        </template>
      </el-row>
    </el-form>

    <!-- 按钮 -->
    <div class="btns">
      <el-button icon="Refresh" @click="handleResetClick">重置</el-button>
      <el-button type="primary" icon="Search" @click="handleQueryClick">查询</el-button>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ElForm } from 'element-plus'
  import { reactive } from 'vue'
  import usePermissions from '@/hooks/usePermissions'

  // 定义自定义事件/接受的属性
  interface IProps {
    searchConfig: {
      pageName: string
      formItems: any[]
    }
  }
  const emit = defineEmits(['queryClick', 'resetClick'])
  const props = defineProps<IProps>()

  // 是否有查询权限
  const isQuery = usePermissions(`${props.searchConfig.pageName}:query`)

  // 定义 form 的数据
  const initialForm: any = {}
  for (const item of props.searchConfig.formItems) {
    initialForm[item.prop] = ''
  }
  const searchForm = reactive<any>(initialForm)

  // 重置操作
  // const fromRef = ref<InstanceType<typeof ElForm>>()
  function handleResetClick() {
    // 1.form中的数据全部重置
    // fromRef.value?.resetFields()
    for (const key of Object.keys(searchForm)) {
      searchForm[key] = ''
    }

    // 将事件传递出去， content 内部重新发送网络请求
    emit('resetClick')
  }

  // 查询操作
  function handleQueryClick() {
    emit('queryClick', searchForm)
  }

</script>

<style scoped lang="less">
  .search{
    background-color: #fff;
    padding: 20px;

  }

  .el-form-item {
    padding: 20px 30px;
    margin-bottom: 0;
  }

  .btns {
    text-align: right;
    padding: 0 50px 10px 0;

    .el-button {
      height: 36px;
    }
  }
</style>
