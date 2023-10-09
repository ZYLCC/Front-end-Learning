import { getEntireDepartments, getEntireMenus, getEntireRoles } from "@/service/main/main"
import { defineStore } from "pinia"

interface IMainState {
  entireRoles: any[]
  entireDepartments: any[]
  entireMenus: any[]
}

const useMainStore = defineStore('main', {
  state: (): IMainState => ({
    entireRoles: [],
    entireDepartments: [],
    entireMenus: []
  }),

  actions: {
    async fetchEntireDataAction() {
      const rolesRes = await getEntireRoles()
      const departmentsRes = await getEntireDepartments()
      const menusRes = await getEntireMenus()
      // console.log(rolesRes, departmentsRes)

      // 保存数据
      this.entireRoles = rolesRes.data.list
      this.entireDepartments = departmentsRes.data.list
      this.entireMenus = menusRes.data.list
    }
  }
})

export default useMainStore
