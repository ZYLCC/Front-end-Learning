import { defineStore } from "pinia"
import { postUsersListData, delUserById, newUserData, editUserData, postPageListData, delPageById, newPageData, editPageData } from "@/service/main/system/system"

interface ISystemState {
  usersList: any[]
  usersTotalCount: number

  departmentList: any[]

  pageList: any[]
  pageTotalCount: number
}

function showMessage(messageInfo: any) {
  const { code, data } = messageInfo
  ElMessage({
    message: data,
    type: code === 0 ? 'success' : 'error',
  })
}

const useSystemStore = defineStore('system', {
  state: (): ISystemState => ({
    usersList: [],
    usersTotalCount: 0,

    departmentList: [],

    pageList: [],
    pageTotalCount:0
  }),
  actions: {
    getDepartmentListAction() {
      const parentId2Name = {}
      this.pageList.forEach((item) => {
        parentId2Name[`${item.id}`] = item.name
      })
      this.pageList.forEach((item) => {
        const temp = {}
        for (const key in item) {
          if (key === 'parentId') {
            temp['parent'] = parentId2Name[+item[key]]
          } else {
            temp[key] = item[key]
          }
        }
        this.departmentList.push(temp)
      })
    },

    async postUsersListAction(queryInfo: any) {
      const usersListRes = await postUsersListData(queryInfo)
      // console.log(usersListRes)
      const { totalCount, list } = usersListRes.data
      this.usersList = list
      this.usersTotalCount = totalCount
    },

    async delUserByIdAction(id: number) {
      const deleteRes = await delUserById(id)

      // 删除后重新请求新的数据
      this.postUsersListAction({ offset: 0, size: 10})
      showMessage(deleteRes)
    },

    async newUserDataAction(userInfo: any) {
      // 1. 创建新的用户
      const newResult = await newUserData(userInfo)

      // 2. 重新请求新的数据
      this.postUsersListAction({ offset: 0, size: 10})
      showMessage(newResult)
    },

    async editUserDataAction(id: number, userInfo: any) {
      // 更新用户数据
      const editRes = await editUserData(id, userInfo)

      // 2. 重新请求新的数据
      this.postUsersListAction({ offset: 0, size: 10})
      showMessage(editRes)
    },

    // 针对页面数据：增删改查
    async postPageListAction(pageName: string, queryInfo: any) {
      const pageListRes = await postPageListData(pageName, queryInfo)
      const { totalCount, list } = pageListRes.data

      this.pageList = list
      this.pageTotalCount = totalCount
    },

    async delPageByIdAction(pageName: string, id: number) {
      const deleteRes = await delPageById(pageName, id)
      this.postPageListAction(pageName, { offset: 0, size: 10})
      showMessage(deleteRes)
    },

    async newPageDataAction(pageName: string, userInfo: any) {
      // 1. 创建新数据
      const newRes = await newPageData(pageName, userInfo)

      // 2. 重新请求新的数据
      this.postPageListAction(pageName, { offset: 0, size: 10})
      showMessage(newRes)
    },

    async editPageDataAction(pageName: string, id: number, userInfo: any) {
      // 更新数据
      const editRes = await editPageData(pageName, id, userInfo)

      // 2. 重新请求新的数据
      this.postPageListAction(pageName, { offset: 0, size: 10})
      showMessage(editRes)
    },
  }
})


export default useSystemStore
