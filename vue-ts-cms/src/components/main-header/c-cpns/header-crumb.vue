<template>
  <div class="curmb">
    <el-breadcrumb separator-icon="CaretRight">
      <template v-for="item in breadcrumbs" :key="item.name">
        <el-breadcrumb-item :to="item.path">{{ item.name }}</el-breadcrumb-item>
      </template>
    </el-breadcrumb>
  </div>
</template>

<script setup lang="ts">
  import useLoginStore from '@/store/login/login'
  import { mapPathToBreadcrumbs } from '@/utils/map-menus'
  import { useRoute } from 'vue-router'

  const route = useRoute()
  const userMenus = useLoginStore().userMenus
  const breadcrumbs = mapPathToBreadcrumbs(route.path, userMenus)

</script>

<style scoped lang="less">
  .curmb {

  }
</style>
