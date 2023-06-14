bookListRender()

/* 1. 新增图书列表 */
// 创建弹框对象
const add_modal_dom = document.querySelector('.add-modal')
const add_modal = new bootstrap.Modal(add_modal_dom)

document.querySelector('.add-btn').addEventListener('click', () => {
  // 收集表单，并提交到服务器保存
  const add_form = document.querySelector('.add-form')
  const add_book_obj = serialize(add_form, { hash: true, empty: true })
  console.log(add_book_obj);
  axios({
    url: 'http://hmajax.itheima.net/api/books',
    method: 'post',
    data: {
      ...add_book_obj,  // 展开语法
      creator: 'cc'
    }
  }).then(res => {
    // console.log(res)
    bookListRender()
    // 重置表单
    add_form.reset()
    // 隐藏弹框
    add_modal.hide()
  })
})

/* 2. 删除图书列表 */
const book_tbody = document.querySelector('.list')
// 事件委托(点击删除)
book_tbody.addEventListener('click', function(e) {
  const obj = e.target
  if (obj.classList.contains('del')) {
    const book_id = obj.parentNode.dataset.id
    axios({
      url: `http://hmajax.itheima.net/api/books/${book_id}`,
      method: 'delete',
    }).then(() => {
      bookListRender()
    })
  }
})

/* 3. 编辑图书信息 */
const edit_modal_dom = document.querySelector('.edit-modal')
const edit_modal = new bootstrap.Modal(edit_modal_dom)
const edit_btn = document.querySelector('.edit-btn')
// 事件委托(点击编辑)
book_tbody.addEventListener('click', function(e) {
  const obj = e.target
  if (obj.classList.contains('edit')) {
    // 获取当前编辑的图书数据并回显
    const book_id = obj.parentNode.dataset.id
    axios({
      url: `http://hmajax.itheima.net/api/books/${book_id}`
    }).then(res => {
      // console.log(res)
      const {author, bookname, publisher} = res.data.data
      document.querySelector('.edit-form .bookname').value = bookname
      document.querySelector('.edit-form .author').value = author
      document.querySelector('.edit-form .publisher').value = publisher
    })

    edit_modal.show() // 显示弹框
  }
})
// 弹框确定修改按钮绑定点击事件
edit_btn.addEventListener('click', function(e) {
  axios({
    
  })
  edit_modal.hide() // 隐藏弹框
})

// 渲染图书列表函数
function bookListRender() {
  axios({  // 获取图书列表
    url: 'http://hmajax.itheima.net/api/books',
    params: {
      creator: 'cc'
    }
  }).then(res => {
    // console.log(res)
    const book_list = res.data.data
    const html_str = book_list.map(({ author, bookname, publisher, id }, index) => {
      return `
        <tr>
          <td>${index + 1}</td>
          <td>${bookname}</td>
          <td>${author}</td>
          <td>${publisher}</td>
          <td data-id=${id}>
            <span class="del">删除</span>
            <span class="edit">编辑</span>
          </td>
        </tr>
      `
    }).join('')
    book_tbody.innerHTML = html_str
  }).catch(err => {
    // alert('发生了错误')
    console.log(err)
  })
}
