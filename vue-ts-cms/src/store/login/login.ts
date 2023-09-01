import { accountLoginRequest, getUserInfoById, getUserMenusById } from "@/service/login/login"
import { localCache } from "@/utils/cache"
import { defineStore } from "pinia"
import router from "@/router"
import { LOGIN_TOKEN } from "@/global/constants"

interface ILoginState {
  token: string
  userInfo: any
  userMenus: any
}

const useLoginStore = defineStore('login', {
  // 给 state 指定类型
  state: (): ILoginState => ({
    token: localCache.getCache(LOGIN_TOKEN) ?? '',
    userInfo: localCache.getCache('userInfo') ?? {},
    userMenus: localCache.getCache('userMenus') ?? []
  }),

  actions: {
    async loginAccountAction(accounts: {name: string; password: string}) {
      // 1. 账号登录，获取 token 等信息
      const loginRes = await accountLoginRequest(accounts)

      const id = loginRes.data.id
      this.token = loginRes.data.token
      const name = loginRes.data.name
      localCache.setCache('username', name)

      // 先设置token缓存
      localCache.setCache(LOGIN_TOKEN, this.token)

      // 2. 获取登录用户的详细信息（role信息）
      const userInfoRes = await getUserInfoById(id)
      this.userInfo = userInfoRes.data

      // 3. 根据角色请求用户权限(菜单menus)
      const userMenusRes = await getUserMenusById(this.userInfo.role.id)

      this.userMenus = userMenusRes.data

      // 4. 进行本地缓存
      localCache.setCache('userInfo', this.userInfo)
      localCache.setCache('userMenus', this.userMenus)

      // 5. 页面跳转（main页面）
      router.push('/main')
    }
  }
})

export default useLoginStore
