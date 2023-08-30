import { accountLoginRequest } from "@/service/login/login"
import { localCache } from "@/utils/cache"
import { defineStore } from "pinia"
import router from "@/router"
import { LOGIN_TOKEN } from "@/global/constants"


const useLoginStore = defineStore('login', {
  state: () => ({
    id: '',
    token: localCache.getCache(LOGIN_TOKEN) ?? '',
    name: ''
  }),
  actions: {
    async loginAccountAction(accounts: {account: string; password: string}) {
      // 账号登录，获取 token 等信息
      const loginRes = await accountLoginRequest(accounts)
      console.log(loginRes)
      this.id = loginRes.result.id
      this.token = loginRes.result.token
      this.name = loginRes.result.account

      // 进行本地保存
      localCache.setCache(LOGIN_TOKEN, this.token)

      // 页面跳转（main页面）
      router.push('/main')
    }
  }
})

export default useLoginStore
