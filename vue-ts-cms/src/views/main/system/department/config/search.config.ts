

const searchConfig = {
  pageName: 'department',
  formItems: [
    {
      type: 'input',
      prop: 'name',
      label: '部门名称',
      placeholder: '请输入查询的部门名称',
      size: 'large'
    },
    {
      type: 'input',
      prop: 'leader',
      label: '部门领导',
      placeholder: '请输入查询的部门领导',
      size: 'large'
    },
    {
      type: 'date-picker',
      prop: 'createAt',
      label: '创建时间',
      size: 'large'
    }
  ]
}

export default searchConfig
