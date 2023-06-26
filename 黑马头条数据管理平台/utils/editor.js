// 富文本编辑器
// 创建编辑器函数，创建工具栏函数

const { createEditor, createToolbar } = window.wangEditor

const editorConfig = {
	placeholder: '发布文章内容...',
	onChange(editor) {
		// 获取富文本内容
		const html = editor.getHtml()
		console.log('editor content', html)
		// 也可以同步到 <textarea>
		document.querySelector('.publish-content').value = html
	}
}

const editor = createEditor({
	// 创建位置
	selector: '#editor-container',
	// 默认内容
	html: '<p><br></p>',
	// 配置项
	config: editorConfig,
	// 配置集成模式
	mode: 'default', // or 'simple'
})

// 工具栏配置对象
const toolbarConfig = {}

// 创建工具栏
const toolbar = createToolbar({
	editor,
	selector: '#toolbar-container',
	config: toolbarConfig,
	mode: 'default', // or 'simple'
})