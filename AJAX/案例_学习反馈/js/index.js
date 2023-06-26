/**
 * 目标1：完成省市区下拉列表切换
 *  1.1 设置省份下拉菜单数据
 *  1.2 切换省份，设置城市下拉菜单数据，清空地区下拉菜单
 *  1.3 切换城市，设置地区下拉菜单数据
 */

const province_select = document.querySelector('.province')
const city_select = document.querySelector('.city')
const area_select = document.querySelector('.area')

//  1.1 设置省份下拉菜单数据
axios({
  url: 'http://hmajax.itheima.net/api/province'
}).then(res => {
  // console.log(res)
  const province_str = '<option value="">省份</option>' + res.data.list.map(pname => {
    return `<option value="${pname}">${pname}</option>`
  }).join('')
  province_select.innerHTML = province_str
})

// 1.2 切换省份，设置城市下拉菜单数据，清空地区下拉菜单
province_select.addEventListener('change', function(){
  axios({
    url: 'http://hmajax.itheima.net/api/city',
    params: { pname: this.value }
  }).then(res => {
    // console.log(res)
    const city_str = '<option value="">城市</option>' + res.data.list.map(cname => {
      return `<option value="${cname}">${cname}</option>`
    }).join('')
    city_select.innerHTML = city_str

    // 清空地区下拉菜单
    area_select.innerHTML = '<option value="">地区</option>'
  })
})

// 1.3 切换城市，设置地区下拉菜单数据
city_select.addEventListener('change', function() {
  axios({
    url: 'http://hmajax.itheima.net/api/area',
    params: { pname: province_select.value, cname: this.value }
  }).then(res => {
    // console.log(res)
    const area_str = '<option value="">地区</option>' + res.data.list.map(aname => {
      return `<option value="${aname}">${aname}</option>`
    }).join('')
    area_select.innerHTML = area_str
  })
})

/**
 * 目标2：收集数据提交保存
 *  2.1 监听提交的点击事件
 *  2.2 依靠插件收集表单数据
 *  2.3 基于axios提交保存，显示结果
 */

// 2.1 监听提交的点击事件
document.querySelector('.submit').addEventListener('click', async () => {
  const form = document.querySelector('.info-form')
  // 2.2 依靠插件收集表单数据
  const data = serialize(form, { hash: true, empty: true })
  // console.log(data)
  try {
    const res = await axios({
      url: 'http://hmajax.itheima.net/api/feedback',
      method: 'POST',
      data
    })
    // console.log(res)
    alert(res.data.message)
  } catch (err) {
    // console.log(err)
    alert(err.response.data.message)
  }
  
})