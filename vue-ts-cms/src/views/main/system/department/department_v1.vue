<template>
  <div class="department">
    <page-search @query-click="handleQueryClick" @reset-click="handleResetClick"></page-search>
    <page-content @new-click="handleNewClick" @edit-click="handleEditClick" ref="contentRef"></page-content>
    <page-modal ref="modalRef"></page-modal>
  </div>
</template>

<script setup lang="ts" name="department">
  import PageSearch from './c-cpns/page-search.vue'
  import PageContent from './c-cpns/page-content.vue'
  import PageModal from './c-cpns/page-modal.vue'
  import { ref } from 'vue'

  const contentRef = ref<InstanceType<typeof PageContent>>()
  function handleQueryClick(queryInfo: any) {
    contentRef.value?.fetchPageListData(queryInfo)
  }
  function handleResetClick() {
    contentRef.value?.fetchPageListData()
  }

  const modalRef = ref<InstanceType<typeof PageModal>>()
  function handleNewClick() {
    modalRef.value?.setModalVisible()
  }
  function handleEditClick(itemData: any) {
    modalRef.value?.setModalVisible(false, itemData)
  }
</script>

<style scoped>
.department {
}
</style>
