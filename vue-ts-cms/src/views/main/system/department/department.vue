<template>
  <div class="department">
    <page-search
      :search-config="searchConfig"
      @query-click="handleQueryClick"
      @reset-click="handleResetClick"
    />
    <page-content
      :content-config="contentConfig"
      @new-click="handleNewClick"
      @edit-click="handleEditClick"
      ref="contentRef"
    ></page-content>
    <page-modal :modal-config="modalConfigRef" ref="modalRef" />
  </div>
</template>

<script setup lang="ts" name="department">
  import PageSearch from '@/components/page-search/page-search.vue'
  import PageContent from '@/components/page-content/page-content.vue'
  import PageModal from '@/components/page-modal/page-modal.vue'
  // import PageModal from './c-cpns/page-modal.vue'
  import { ref, computed } from 'vue'
  import useMainStore from '@/store/main/main'
  import usePageContent from '@/hooks/usePageContent'
  import usePageModal from '@/hooks/usePageModal'

  import searchConfig from './config/search.config'
  import contentConfig from './config/content.config'
  import modalConfig from './config/modal.config'

  // 对 modalConfig 进行操作
  const modalConfigRef = computed(() => {
    const mainStore = useMainStore()
    const departments = mainStore.entireDepartments.map((item) => {
      return { label: item.name, value: item.id }
    })
    modalConfig.formItems.forEach((item) => {
      if (item.prop === 'parentId') {
        item.options?.push(...departments)
      }
    })

    return modalConfig
  })

  // 点击 search, content 的操作
  const { contentRef, handleQueryClick, handleResetClick } = usePageContent()

  // 点击 content， modal 的操作
  const { modalRef, handleNewClick, handleEditClick} = usePageModal()
</script>

<style scoped>
.department {
}
</style>
