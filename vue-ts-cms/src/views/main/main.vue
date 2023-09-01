<template>
  <div class="main">
    <el-container>
      <el-aside :width="isFold ? '60px' : '210px'">
        <main-menu :is-fold="isFold"></main-menu>
      </el-aside>
      <el-container>
        <el-header height="50px">
          <main-header @fold-change="handleFoldChange"></main-header>
        </el-header>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts">
  import mainMenu from '@/components/main-menu/main-menu.vue'
  import mainHeader from '@/components/main-header/main-header.vue'
  import { ref } from 'vue';
  // import router from '@/router'
  // import {localCache} from '../../utils/cache'
  // import { LOGIN_TOKEN } from '@/global/constants';

  // function handleExitClick() {
  //   // 1. 删除token
  //   localCache.removeCache(LOGIN_TOKEN)
  //   // 2. 回到 login 页面
  //   router.push('/login')
  // }

  const isFold = ref(false)
  function handleFoldChange(flag: boolean) {
    isFold.value = flag
  }
</script>

<style scoped lang="less">
  .main {
    height: 100%;
    .el-container {
        height: 100%;
      }


    .el-aside {
      overflow-x: hidden;
      overflow-y: hidden;
      line-height: 200px;
      text-align: left;
      cursor: pointer;
      background-color: #001529;
      scrollbar-width: none; /* firefox */
      -ms-overflow-style: none; /* IE 10+ */

      transition: width 0.5s linear;

      &::-webkit-scrollbar {
        display: none;
      }
    }

  .el-main {
    background-color: #f0f2f5;
  }
}
</style>
