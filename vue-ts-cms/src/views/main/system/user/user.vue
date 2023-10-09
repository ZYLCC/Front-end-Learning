<template>
  <div class="user">
    <user-search @query-click="handleQueryClick" @reset-click="handleResetClick"></user-search>
    <user-content ref="contentRef" @new-click="handleNewBtnClick" @edit-click="handleEditBtnClick"></user-content>

    <user-modal ref="modalRef"></user-modal>
  </div>
</template>

<script setup lang="ts">
  import UserSearch from './c-cpns/user-search.vue'
  import userContent from './c-cpns/user-content.vue'
  import userModal from './c-cpns/user-modal.vue'
  import { ref } from 'vue'

  // 对 content 组件的操作
  const contentRef = ref<InstanceType<typeof userContent>>()
  function handleQueryClick(formData: any) {
    // console.log(formData)
    contentRef.value?.fetchUsersListData(formData)
  }
  function handleResetClick() {
    contentRef.value?.fetchUsersListData()
  }

  // 对 modal 组件的操作
  const modalRef = ref<InstanceType<typeof userModal>>()
  function handleNewBtnClick() {
    modalRef.value?.setModalVisible()
  }
  function handleEditBtnClick(itemData: any) {
    modalRef.value?.setModalVisible(false, itemData)
  }
</script>

<style scoped lang="less">
  .user {
    border-radius: 8px;
    overflow: hidden;
  }
</style>
