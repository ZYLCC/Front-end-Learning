// 对实例配置拦截器(自己创建的实例也可以配置拦截器)
// 请求拦截
axios.interceptors.request.use((config) => {
  // 更改对应的配置
  console.log("请求成功的拦截", config)
  config.params = { pname: "河南省" }
  return config
}, (err) => {
  console.log("请求失败的拦截")
  return err
})

// 响应拦截
axios.interceptors.response.use((res) => {
  console.log("响应成功的拦截")
  return res.data
}, (err) => {
  console.log("响应失败的拦截")
  return err
})

axios.get("http://hmajax.itheima.net/api/city", {
  params: {
    pname: "山东省"
  }
}).then(res => {
  console.log(res)
})