<template>
  <div class="role">
    <page-search
      :search-config="searchConfig"
      @reset-click="handleResetClick"
      @query-click="handleQueryClick" />
    <page-content
      ref="contentRef"
      :content-config="contentConfig"
      @edit-click="handleEditClick"
      @new-click="handleNewClick"
       />
    <page-modal :modal-config="modalConfig" :other-info="otherInfo" ref="modalRef">
      <template #menulist>
        <el-tree
          ref="treeRef"
          :data="entireMenus"
          show-checkbox
          node-key="id"
          highlight-current
          :props="{ children: 'children', label: 'name' }"
          @check="handleElTreeCheck"
        />
      </template>
    </page-modal>
  </div>
</template>

<script setup lang="ts">
  import { storeToRefs } from 'pinia'
  import { ref, nextTick } from 'vue'
  import type { ElTree } from 'element-plus'

  import PageSearch from '@/components/page-search/page-search.vue'
  import searchConfig from './config/search.config'

  import pageContent from '@/components/page-content/page-content.vue'
  import contentConfig from './config/content.config'

  import pageModal from '@/components/page-modal/page-modal.vue'
  import modalConfig from './config/modal.config'

  import usePageContent from '@/hooks/usePageContent'
  import usePageModal from '@/hooks/usePageModal'
  import useMainStore from '@/store/main/main'
  import { mapMenuListToIds } from '@/utils/map-menus'



  // 逻辑关系
  const { contentRef, handleQueryClick, handleResetClick } = usePageContent()
  const { modalRef, handleNewClick, handleEditClick } = usePageModal(editCallback)

  // 获取完整的菜单
  const mainStore = useMainStore()
  const { entireMenus } = storeToRefs(mainStore)
  const otherInfo = ref({})
  function handleElTreeCheck(data1: any, data2: any) {
    const menuList = [...data2.checkedKeys, ...data2.halfCheckedKeys]
    otherInfo.value = { menuList }
  }

  const treeRef = ref<InstanceType<typeof ElTree>>()
  function editCallback(itemData: any) {
    nextTick(() => {
      const menuIds = mapMenuListToIds(itemData.menuList)
      treeRef.value?.setCheckedKeys(menuIds)
    })
  }

</script>

<style scoped lang="less">
  .role {

  }
</style>
