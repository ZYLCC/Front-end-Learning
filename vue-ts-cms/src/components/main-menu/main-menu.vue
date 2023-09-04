<template>
  <div class="main-menu">
    <div class="logo">
      <img class="img" src="@/assets/img/logo.svg" alt="" />
      <h2 v-show="!isFold" class="title">后台管理系统</h2>
    </div>

    <!-- menu -->
    <div class="menu">
      <!-- 遍历菜单 -->
      <el-menu
        :collapse="isFold"
        :default-active="activeDefault"
        text-color="#b7bdc3"
        active-text-color="#fff"
        background-color="#001529">
        <template v-for="item in userMenus" :key="item.id">
          <el-sub-menu :index="item.id + ''">
          <template #title>
            <!-- 动态组件 -->
            <el-icon>
              <component :is="item.icon.split('-icon-')[1]"></component>
            </el-icon>
            <span>{{item.name}}</span>
          </template>
          <!-- 遍历子菜单 -->
          <template v-for="subitem in item.children" :key="subitem.id">
              <el-menu-item :index="subitem.id + ''" @click="handleItemClick(subitem)">{{subitem.name}}</el-menu-item>
            </template>
        </el-sub-menu>
        </template>
      </el-menu>

    </div>
  </div>
</template>

<script setup lang="ts">
  import router from '@/router'
  import useLoginStore from '@/store/login/login'
  import { ref, computed } from 'vue'
  import { useRoute } from 'vue-router'
  import { mapPathToMenu } from '@/utils/map-menus'

  defineProps({
    isFold: {
      type: Boolean,
      default: false
    }
  })

  // 1. 获取动态菜单
  const loginStore = useLoginStore()
  const userMenus = loginStore.userMenus
  // console.log(userMenus)

  // 2. 监听item点击
  function handleItemClick(item: any) {
    // console.log(item)
    router.push(item.url)
  }

  // 3. Elmenu 默认选中页面对应菜单
  const route = useRoute()

  const activeDefault = computed(() => {
    const pathMenu = mapPathToMenu(route.path, userMenus)
    return pathMenu.id + ''
  })
</script>

<style scoped lang="less">
  .main-menu {
    height: 100%;
    background-color: #001529;
    .logo {
      display: flex;
      height: 28px;
      padding: 12px 10px 8px 10px;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;
      overflow: hidden;

      .img {
        height: 100%;
        margin: 0 8px;
      }

      .title {
        flex: 1;
        padding-left: 20px;
        font-size: 16px;
        font-weight: 700;
        color: white;
        white-space: nowrap;
        // text-align: center;
      }
    }
  }

  .el-menu {
    border-right: none;
    user-select: none;
    &::-webkit-scrollbar {
      display: none;
    }
  }

  .el-sub-menu {
    .el-menu-item {
      padding-left: 50px !important;
      background-color: #0c2135;
    }

    .el-menu-item:hover {
      color: #fff;
      background-color: #0a60bd;
    }

    .el-menu-item.is-active {
      background-color: #0a60bd;
    }
  }
</style>
