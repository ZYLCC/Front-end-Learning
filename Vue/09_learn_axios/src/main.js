import { createApp } from 'vue'
import axios from 'axios'
import App from './App.vue'
import ccRequest from './service'

createApp(App).mount('#app')

// 试用自己二次封装的 axios
ccRequest.hmajax.get({
  url: "/province"
}).then(res => {
  console.log("res: ", res)
})

