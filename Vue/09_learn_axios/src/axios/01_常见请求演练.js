axios({
  url: "http://123.207.32.32:8000/home/multidata",
  method: "get"
}).then(res => {
  console.log(res.data)
})


