<template>
  <div class="content">
    <div class="header">
      <h2 class="title">{{ contentConfig?.header?.title ?? '数据列表' }}</h2>
      <el-button v-if="isCreate" type="primary" @click="handleNewPageClick">
        {{ contentConfig?.header?.btnTitle ?? '新建数据' }}
      </el-button>
    </div>

    <div class="table">
      <el-table
        :data="pageList"
        border
        style="width: 100%"
        :="contentConfig.childrenTree"
      >
        <template v-for="item in contentConfig.propsList" :key="item.prop">
          <template v-if="item.type === 'timer'">
            <el-table-column align="center" :="item" >
              <template #default="scope">
                {{ formatUTC(scope.row[item.prop]) }}
              </template>
            </el-table-column>
          </template>

          <template v-else-if="item.type === 'handler' && (isDelete || isUpdate)">
            <el-table-column align="center" :="item">
              <!-- 作用域插槽 -->
              <template #default="scope">
                <el-button
                  v-if="isUpdate"
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
                      v-if="isDelete"
                      type="danger"
                      text icon="Delete"
                    >删除</el-button>
                  </template>
                </el-popconfirm>
              </template>
            </el-table-column>
          </template>

          <template v-else>
            <el-table-column align="center" :="item" ></el-table-column>
          </template>
        </template>
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
  import usePermissions from '@/hooks/usePermissions'


  interface IProps{
    contentConfig: {
      pageName: string
      header?: {
        title?: string
        btnTitle?: string
      },
      propsList: any[],
      childrenTree?: any
    }
  }

  const props = defineProps<IProps>()

  // 定义事件
  const emit = defineEmits(['newClick', 'editClick'])

  // 获取是否有对应的增删改查权限
  const isCreate = usePermissions(`${props.contentConfig.pageName}:create`)
  const isDelete = usePermissions(`${props.contentConfig.pageName}:delete`)
  const isUpdate = usePermissions(`${props.contentConfig.pageName}:update`)
  const isQuery = usePermissions(`${props.contentConfig.pageName}:query`)


  // 发起 action， 请求 usersList 的数据
  const currentPage = ref(1)
  const pageSize = ref(10)
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
    if (!isQuery) return // 没有查询权限就不获取数据

    // 1. 获取 offset / size
    const size = pageSize.value
    const offset = (currentPage.value - 1) * size
    const pageInfo = { size, offset }

    // 发起网络请求
    const queryInfo = { ...pageInfo, ...formData }
    systemStore.postPageListAction(props.contentConfig.pageName, queryInfo)
  }

  // 删除 编辑 新建操作
  function handleDelBtnClick(id: number) {
    console.log(id);

    systemStore.delPageByIdAction(props.contentConfig.pageName, id)
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
