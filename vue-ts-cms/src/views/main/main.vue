<template>
  <div class="main">
    <el-container>
      <el-aside width="210px">
        <main-menu></main-menu>
      </el-aside>
      <el-container>
        <el-header height="50px">
          <main-header></main-header>
        </el-header>
        <el-main>
          <main-container></main-container>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts">
  import mainMenu from '@/components/main-menu/main-menu.vue'
  import mainHeader from '@/components/main-header/main-header.vue'
  import mainContainer from '@/components/main-container/main-container.vue';
  // import router from '@/router'
  // import {localCache} from '../../utils/cache'
  // import { LOGIN_TOKEN } from '@/global/constants';

  // function handleExitClick() {
  //   // 1. 删除token
  //   localCache.removeCache(LOGIN_TOKEN)
  //   // 2. 回到 login 页面
  //   router.push('/login')
  // }
</script>

<style scoped lang="less">
  .main {
    color: red;
    height: 100%;

    .el-container {
      height: 100%;
    }

    .el-header {
      background-color: orange;
    }
    .el-main {
      background-color: skyblue;
    }
  }
</style>
