import { createApp } from 'vue/dist/vue.esm-bundler'

import App from './components/App.vue'
// 全局注册组件
// import ProductItem from './ProductItem.vue'

const app = createApp(App)

// 全局注册组件
// app.component('ProductItem', ProductItem)

app.mount('#app')