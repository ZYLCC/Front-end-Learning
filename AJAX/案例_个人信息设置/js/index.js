/**
 * 目标1：信息渲染
 *  1.1 获取用户的数据
 *  1.2 回显数据到标签上
 * */
const creator = 'cc'

axios({
  url: 'http://hmajax.itheima.net/api/settings',
  params: {
    creator
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
      document.querySelector(`.${key}`).value = user_obj[key]
    }
  })
})

/* 
目标2：更换头像
2.1 获取头像文件
2.2 提交服务器并更新头像
*/
document.querySelector('.upload').addEventListener('change', e => {
  // 获取头像文件
  console.log(e.target.files[0])
  const fd = new FormData()
  fd.append('avater', e.target.files[0])
  fd.append('creator', creator)

  // 提交服务器并更新头像
  axios({
    url: 'http://hmajax.itheima.net/api/avatar',
    method: 'PUT',
    data: fd
  }).then(res => {
    console.log(res)
    const img_url = res.data.data.avatar

    document.querySelector('.prew').src = img_url
  })
})

/* 
目标3：信息修改
3.1 收集表单信息
3.2 提交到服务器保存
*/

document.querySelector('.submit').addEventListener('click', () => {
  // 收集表单信息
  const uesr_form = document.querySelector('.user-form')
  const user_obj = serialize(uesr_form, { hash: true, empty: true })
  user_obj.creator = creator
  user_obj.gender = +user_obj.gender

  // 提交到服务器保存
  axios({
    url: 'http://hmajax.itheima.net/api/settings',
    method: 'PUT',
    data: user_obj
  }).then(res => {
    const toast_dom = document.querySelector('.my-toast')
    const toast = new bootstrap.Toast(toast_dom)
    
    const msg = res.data.message
    document.querySelector('.info-box').innerText = msg
    toast.show()
  })
})