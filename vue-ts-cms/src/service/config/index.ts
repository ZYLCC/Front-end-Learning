// 1. 区分开发环境和生产环境：选择注释一个(缺点：过于依赖人为)
// export const BASE_URL = 'http://codercba.dev:8000'
// export const BASE_URL = 'http://codercba.prod:8000'

// 2. 代码逻辑判断
/**
 * import.meta.env.MODE 获取环境 => string
 * import.meta.env.DEV  是否为开发环境 => boolean
 * import.meta.env.PROD  是否为生产环境 => boolean
 * import.meta.env.SSR  是否为服务器端渲染 => boolean
 */
let BASE_URL = ''
if (import.meta.env.MODE === 'production') {
  BASE_URL = 'http://coderwhy.org/prod'
} else {
  // BASE_URL = 'http://hmajax.itheima.net/api'
  BASE_URL = 'http://pcapi-xiaotuxian-front-devtest.itheima.net'

}

// 3. 通过创建 .env 文件直接创建变量
/**
 * 只有以VITE_为前缀的变量才会暴露给经过vite处理的代码
 * import.meta.env.VITE_XX 来访问变量
 * .env[.local]   任何环境都能读取[会被 git 忽略]
 * .env.development  开发环境读取
 * .env.production  生产环境读取
 */

export const TIME_OUT = 10000

export { BASE_URL }
