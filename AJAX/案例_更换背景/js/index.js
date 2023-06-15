/**
 * 目标：网站-更换背景
 *  1. 选择图片上传，设置body背景
 *  2. 上传成功时，"保存"图片url网址
 *  3. 网页运行后，"获取"url网址使用
 * */

document.querySelector('.bg-ipt').addEventListener('change', e => {
  // console.dir(e.target)
  const fd = new FormData()
  fd.append('img', e.target.files[0])
  axios({
    url: 'http://hmajax.itheima.net/api/uploadimg',
    method: 'POST',
    data: fd
  }).then(res => {
    // console.log(res);
    const img_url = res.data.data.url
    document.body.style.backgroundImage = `url(${img_url})`

    // 上传成功时，图片地址保存到本地
    localStorage.setItem('bgImg', img_url)
  })
})

const bg_url = localStorage.getItem('bgImg')
// 判断本地有值才更换背景
bg_url && (document.body.style.backgroundImage = `url(${bg_url})`)