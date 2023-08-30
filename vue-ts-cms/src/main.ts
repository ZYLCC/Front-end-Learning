import { createApp } from 'vue'
import 'normalize.css'
import './assets/css/index.css'
import App from './App.vue'
import router from './router/index'
import pinia from './store'
import registerIcons from './global/register-icons'

// 0. 针对ElMessage和ElLoading等组件引入样式
import 'element-plus/theme-chalk/el-message.css'

// 1. 全局注册，方便和简洁，但打包很大
// import ElementPlus from 'element-plus'
// import 'element-plus/dist/index.css'



// 2. 按需引入：用到哪个组件再引入
// import { ElButton } from 'element-plus'
// app.component(ElButton.name, ElButton)


const app = createApp(App)
app.use(registerIcons)
// app.use(ElementPlus)
app.use(router)
app.use(pinia)
app.mount('#app')
