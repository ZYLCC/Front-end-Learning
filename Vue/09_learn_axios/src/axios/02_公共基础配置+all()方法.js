// 1. baseURL  http://hmajax.itheima.net/api
const baseURL = "http://hmajax.itheima.net/api"

// 给 axios 实例配置公共基础配置
axios.defaults.baseURL = baseURL
// axios.defaults.timeout = 1000
// axios.defaults.headers = {}

const axios1 = axios({
  url: "/province",
  method: "GET"
})


// axios 发送多个请求
axios.all([
  axios1,
  axios({ 
    url: "/city",
    params: { pname: "山东省" }
  })
]).then(res => {
  console.log(res)
}).catch(err => {
  console.log(err.message)
})