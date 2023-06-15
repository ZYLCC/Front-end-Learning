/**
 * 目标1：信息渲染
 *  1.1 获取用户的数据
 *  1.2 回显数据到标签上
 * */
axios({
  url: 'http://hmajax.itheima.net/api/settings',
  params: {
    creator: 'cc'
  }
}).then(res => {
  // console.log(res);
  const user_obj = res.data.data
  // 遍历 进行数据回显
  Object.keys(user_obj).forEach(key => {
    if (key === 'avatar') {
      // 回显默认头像
      document.querySelector('.prew').src = user_obj[key]
    } else if (key === 'gender') {
      // 赋予默认性别
      const gender_radios = document.querySelectorAll('.gender')
      gender_radios[user_obj[key]].checked = true
    } else {
      
    }
  })
})

