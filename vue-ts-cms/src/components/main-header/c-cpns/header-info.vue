<template>
  <div class="header-info">
    <div class="operation">
      <span><el-icon><Message /></el-icon></span>
      <span>
        <span class="dot"></span>
        <el-icon><ChatDotSquare /></el-icon>
      </span>
      <span><el-icon><Search /></el-icon></span>
    </div>

    <div class="info">
      <el-dropdown>
        <span class="user-info">
          <el-avatar :size="30" src="https://assets.leetcode.cn/aliyun-lc-upload/users/lovecc-e/avatar_1635323770.png" />
          <span class="name">{{ username }}</span>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item @click="handleExitClick">
              <el-icon><CircleClose /></el-icon>
              <span>退出登录</span>
            </el-dropdown-item>
            <el-dropdown-item divided>
              <el-icon><User /></el-icon>
              <span>个人信息</span>
            </el-dropdown-item>
            <el-dropdown-item disabled>
              <el-icon><Setting /></el-icon>
              <span>修改密码</span>
            </el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { localCache } from '@/utils/cache'
  import router from '@/router'
  import { LOGIN_TOKEN } from '@/global/constants'

  const username = localCache.getCache('username')

  function handleExitClick() {
    // 1. 删除token
    localCache.removeCache(LOGIN_TOKEN)
    localCache.removeCache('username')

    ElMessage({
      message: '退出登录成功~',
      type: 'success',
    })

    // 2. 回到 login 页面
    router.push('/login')
  }
</script>

<style scoped lang="less">
  .header-info {
    display: flex;
    align-items: center;
  }

  .operation {
    display: inline-flex;
    margin-right: 20px;

    span {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 40px;
      height: 35px;

      &:hover {
        background: #f2f2f2;
      }

      i {
        font-size: 20px;
      }

      .dot {
        position: absolute;
        top: 3px;
        right: 3px;
        z-index: 10;
        width: 6px;
        height: 6px;
        background: red;
        border-radius: 100%;
      }
    }
  }

  .info {
    .user-info {
      display: flex;
      align-items: center;
      cursor: pointer;
      border: none;


      .name {
        margin-left: 5px;
      }
    }
  }

  .info {
    :global(.el-dropdown-menu__item) {
      line-height: 36px !important;
      padding: 6px 22px;
    }
  }
</style>
