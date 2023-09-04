<template>
  <div class="search">
    <el-form label-width="80px" size="large" :model="searchForm">
      <el-row :gutter="80">
        <el-col :span="8">
          <el-form-item label="用户名" prop="name">
            <el-input placeholder="请输入查询的用户名" v-model="searchForm.name"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="真实姓名" prop="realname">
            <el-input placeholder="请输入查询的真实姓名" v-model="searchForm.realname"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="电话号码" prop="cellphone">
            <el-input placeholder="请输入查询的电话号码" v-model="searchForm.cellphone"></el-input>
          </el-form-item>
        </el-col>

        <el-col :span="8">
          <el-form-item label="状态" prop="enable">
            <el-select placeholder="请选择查询状态" style="width: 100%" v-model="searchForm.enable">
              <el-option label="启用" :value="1" />
              <el-option label="禁用" :value="0" />
            </el-select>
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
  import type { DateModelType } from 'element-plus'

  interface searchFormType {
    name: string
    realname: string
    cellphone: string
    enable: number
    createAt: [DateModelType, DateModelType]
  }
  const searchForm = reactive<searchFormType>({
    name: '',
    realname: '',
    cellphone: '',
    enable: 1,
    createAt: ['', '']
  })

  // 重置操作
  // const fromRef = ref<InstanceType<typeof ElForm>>()
  function handleResetClick() {
    searchForm.name = ''
    searchForm.cellphone = ''
    searchForm.realname = ''
    searchForm.enable = 1
    searchForm.createAt = ['', '']
  }

  // 查询操作
  function handleQueryClick() {
    console.log('query')

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
