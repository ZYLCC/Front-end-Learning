<template>
  <div class="content">
    <div class="header">
      <h2 class="title">用户列表</h2>
      <el-button type="primary" @click="handleNewPageClick">新建部门</el-button>
    </div>

    <div class="table">
      <el-table :data="pageList" border style="width: 100%">
        <el-table-column align="center" type="selection" width="42px" />
        <el-table-column align="center" type="index" label="序号" width="60px" />
        <el-table-column align="center" prop="name" label="部门名称" width="200px" />
        <el-table-column align="center" prop="leader" label="部门领导" width="200px" />
        <el-table-column align="center" prop="parentId" label="上级部门" width="200px" />
        <el-table-column align="center" prop="createAt" label="创建时间">
          <template #default="scope">
            {{ formatUTC(scope.row.createAt) }}
          </template>
        </el-table-column>
        <el-table-column align="center" prop="updateAt" label="更新时间">
          <template #default="scope">
            {{ formatUTC(scope.row.updateAt) }}
          </template>
        </el-table-column>
        <el-table-column align="center"  width="160px">
          <!-- 作用域插槽 -->
          <template #default="scope">
            <el-button
              type="primary"
              text icon="Edit"
              @click="handleEditBtnClick(scope.row)"
            >编辑</el-button>
            <el-popconfirm
              title="确定删除?"
              @confirm="handleDelBtnClick(scope.row.id)"
            >
              <template #reference>
                <el-button
                  type="danger"
                  text icon="Delete"
                >删除</el-button>
              </template>
            </el-popconfirm>
          </template>
        </el-table-column>
      </el-table>
    </div>

    <div class="pagination">
      <el-pagination
      v-model:current-page="currentPage"
      v-model:page-size="pageSize"
      :page-sizes="[10, 20, 30]"
      layout="total, sizes, prev, pager, next, jumper"
      :total="pageTotalCount"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    />
    </div>
  </div>
</template>

<script setup lang="ts">
  import { storeToRefs } from 'pinia'
  import useSystemStore from '@/store/main/system/system'
  import { formatUTC } from '@/utils/format'
  import { ref } from 'vue'

  // 定义事件
  const emit = defineEmits(['newClick', 'editClick'])

  const currentPage = ref(1)
  const pageSize = ref(10)

  // 发起 action， 请求 usersList 的数据
  const systemStore = useSystemStore()
  fetchPageListData()


  // 获取 pageList 数据， 进行展示
  const { pageList, pageTotalCount } = storeToRefs(systemStore)


  // 页码相关的逻辑
  function handleSizeChange() {
    fetchPageListData()
  }
  function handleCurrentChange() {
    fetchPageListData()
  }

  // 获取page列表
  function fetchPageListData(formData: any = {}) {
    // 1. 获取 offset / size
    const size = pageSize.value
    const offset = (currentPage.value - 1) * size
    const pageInfo = { size, offset }

    // 发起网络请求
    const queryInfo = { ...pageInfo, ...formData }
    systemStore.postPageListAction('department', queryInfo)
  }

  // 删除 编辑 新建操作
  function handleDelBtnClick(id: number) {
    console.log(id);

    systemStore.delPageByIdAction('department', id)
  }
  function handleEditBtnClick(itemData: any) {
    emit('editClick', itemData)
  }
  function handleNewPageClick() {
    emit('newClick')
  }

  defineExpose({ fetchPageListData })

</script>

<style scoped lang="less">
  .content {
    background-color: #fff;
    margin-top: 20px;
    padding: 20px;

    .table{

      :deep(.el-table__cell) {
        padding: 12px 0;
      }
      .el-button{
        margin: 0;
        padding: 6px;
      }
    }

    .pagination {
       display: flex;
       justify-content: end;
       margin-top: 20px;
    }
  }

  .header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
    .title {
      font-size: 22pxh2;
    }
  }
</style>
