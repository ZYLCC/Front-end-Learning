// 创建其他实例发送网络请求
// 可以创建多个适配不同基础公共配置的网络请求
const instance1 = axios.create({
  baseURL: "http://hmajax.itheima.net/api",
  timeout: 5000,
  headers: {}
})

// 使用实例
instance1.get("/city", {
  params: {
    pname: "河南省"
  }
}).then(res => {
  console.log(res.data)
})