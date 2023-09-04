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
  import { computed } from 'vue'
  import useLoginStore from '@/store/login/login'
  import { mapPathToBreadcrumbs } from '@/utils/map-menus'
  import { useRoute } from 'vue-router'


  const route = useRoute()
  const userMenus = useLoginStore().userMenus
  // 依赖的值发生改变后，会重新获取
  const breadcrumbs = computed(() => {
    return mapPathToBreadcrumbs(route.path, userMenus)
  })

</script>

<style scoped lang="less">
  .curmb {

  }
</style>
