/**
 * 目标1：设置频道下拉菜单
 *  1.1 获取频道列表数据
 *  1.2 展示到下拉菜单中
 */
// 1.1 获取频道列表数据
async function setChannelList() {
  const res = await axios({
    url: 'v1_0/channels'
  })
  const channels_list_str = '<option value="" selected="">请选择文章频道</option>' + res.data.channels.map(item => {
    return `<option value="${item.id}">${item.name}</option>`
  }).join('')
  // 1.2 展示到下拉菜单中
  document.querySelector('.form-select').innerHTML = channels_list_str
}
// 网页运行后，默认调用一次
setChannelList()




/**
 * 目标2：文章封面设置
 *  2.1 准备标签结构和样式
 *  2.2 选择文件并保存在 FormData
 *  2.3 单独上传图片并得到图片 URL 网址
 *  2.4 回显并切换 img 标签展示（隐藏 + 号上传标签）
 */
// 2.2 选择文件并保存在 FormData
document.querySelector('.img-file').addEventListener('change', async e => {
  const file = e.target.files[0]
  const fd = new FormData()
  fd.append('image', file)
  // 2.3 单独上传图片并得到图片 URL 网址
  const res = await axios({
    url: 'v1_0/upload',
    method: 'POST',
    data: fd
  })
  // 2.4 回显并切换 img 标签展示（隐藏 + 号上传标签）
  const img_url = res.data.url
  document.querySelector('.rounded').src = img_url
  document.querySelector('.rounded').classList.add('show')
  document.querySelector('.place').classList.add('hide')
})
// 点击 img 标签，可以重新切换封面
document.querySelector('.rounded').addEventListener('click', () => {
  document.querySelector('.img-file').click()
})

/**
 * 目标3：发布文章保存
 *  3.1 基于 form-serialize 插件收集表单数据对象
 *  3.2 基于 axios 提交到服务器保存
 *  3.3 调用 Alert 警告框反馈结果给用户
 *  3.4 重置表单并跳转到列表页
 */
// 3.1 基于 form-serialize 插件收集表单数据对象
document.querySelector('.send').addEventListener('click', async e => {
  if (e.target.innerHTML !== '发布') return
  const form = document.querySelector('.art-form')
  const data = serialize(form, { hash: true, empty: true })
  // 发布文章时不需要 id 属性
  delete data.id
  // 自己收集封面图片地址并保存到 data 对象中
  data.cover = {
    type: 1, // 封面类型
    images: [document.querySelector('.rounded').src] // 封面图片 url
  }

  try {
    // 3.2 基于 axios 提交到服务器保存
    const res = await axios({
      url: 'v1_0/mp/articles',
      method: 'POST',
      data
    })
  // 3.3 调用 Alert 警告框反馈结果给用户
  myAlert(true, '成功发布')
  // 3.4 重置表单并跳转到列表页
  form.reset()
  // 封面选取部分需要手动重置
  document.querySelector('.rounded').src = ''
  document.querySelector('.rounded').classList.remove('show')
  document.querySelector('.place').classList.remove('hide')
  // 富文本编辑器手动重置
  editor.setHtml('')

  setTimeout(() => {
    location.href = '../content/index.html'
  }, 1000)
  } catch (err) {
    myAlert(false, err.response.data.message)
  }
})


/**
 * 目标4：编辑-回显文章
 *  4.1 页面跳转传参（URL 查询参数方式）
 *  4.2 发布文章页面接收参数判断（共用同一套表单）
 *  4.3 修改标题和按钮文字
 *  4.4 获取文章详情数据并回显表单
 */
// 4.2 发布文章页面接收参数判断（共用同一套表单）
;(function(){
  const params_str = location.search
  const params = new URLSearchParams(params_str)
  params.forEach(async (value, key) => {
    if (key === 'id') {
      document.querySelector('.title span').innerHTML = '修改文章'
      document.querySelector('.send').innerHTML = '修改'
      // 4.4 获取文章详情数据并回显表单
      const res = await axios({
        url: `v1_0/mp/articles/${value}`
      })
      // 自己组织页面回显需要用到的数据对象
      const data_obj = {
        channel_id: res.data.channel_id,
        content: res.data.content,
        title: res.data.title,
        rounded: res.data.cover.images[0],
        id: res.data.id
      }
      // 遍历数据对象属性，映射到页面元素上，快速赋值
      Object.keys(data_obj).forEach(key => {
        if (key === 'rounded') {
          if (data_obj[key]){
            // 有封面
            document.querySelector('.rounded').src = data_obj[key]
            document.querySelector('.rounded').classList.add('show')
            document.querySelector('.place').classList.add('hide')
          }
        } else if (key === 'content') {
          // 富文本内容
          editor.setHtml(data_obj[key])
        } else {
          document.querySelector(`[name=${key}]`).value = data_obj[key]
        }
      })
    }
  })
})();

/**
 * 目标5：编辑-保存文章
 *  5.1 判断按钮文字，区分业务（因为共用一套表单）
 *  5.2 调用编辑文章接口，保存信息到服务器
 *  5.3 基于 Alert 反馈结果消息给用户
 */
// 5.1 判断按钮文字，区分业务（因为共用一套表单）
document.querySelector('.send').addEventListener('click', async e => {
  if (e.target.innerHTML !== '修改') return
  // 修改文章
  const form = document.querySelector('.art-form')
  const data = serialize(form, { hash: true, empty: true })
  // console.log(data)
  // 5.2 调用编辑文章接口，保存信息到服务器
  try {
    const res = await axios({
      url: `/v1_0/mp/articles/${data.id}`,
      method: 'PUT',
      data: {
        ...data,
        cover: {
          type: document.querySelector('.rounded').src ? 1 : 0,
          images: [document.querySelector('.rounded').src]
        }
      }
    })
    myAlert(true, '修改文章成功')
  } catch(err) {
    myAlert(false, err.response.data.message)
  }
  
})