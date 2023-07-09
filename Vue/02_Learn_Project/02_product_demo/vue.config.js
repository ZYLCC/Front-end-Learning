const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    resolve:{
      // 配置路径别名
      alias: {
        // @ 对应的是 src 的路径，提前默认配置好的
        'utils': '@/utils'
      }
    }
  }
})
