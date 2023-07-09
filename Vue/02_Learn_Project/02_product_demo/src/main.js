import { createApp } from 'vue/dist/vue.esm-bundler'
import App from './App.vue'
import {sum} from 'utils/math'

createApp(App).mount('#app')

console.log(sum(20, 30))