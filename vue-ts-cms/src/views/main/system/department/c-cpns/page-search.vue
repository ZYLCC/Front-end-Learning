<template>
  <div class="search">
    <el-form label-width="80px" size="large" :model="searchForm">
      <el-row :gutter="80">
        <el-col :span="8">
          <el-form-item label="部门名称" prop="name">
            <el-input placeholder="请输入查询的部门名称" v-model="searchForm.name"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="部门领导" prop="leader">
            <el-input placeholder="请输入查询的部门领导" v-model="searchForm.leader"></el-input>
          </el-form-item>
        </el-col>

        <el-col :span="8">
          <el-form-item label="创建时间" prop="createAt">
            <el-date-picker
              v-model="searchForm.createAt"
              type="daterange"
              range-separator=" - "
              start-placeholder="开始时间"
              end-placeholder="结束时间"
            />
          </el-form-item>
        </el-col>
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

  // 定义自定义事件
  const emit = defineEmits(['queryClick', 'resetClick'])


  // 定义 form 的数据
  const searchForm = reactive<any>({
    name: '',
    leader: '',
    createAt: ''
  })

  // 重置操作
  // const fromRef = ref<InstanceType<typeof ElForm>>()
  function handleResetClick() {
    searchForm.name = ''
    searchForm.leader = ''
    searchForm.createAt = ''

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
