import { defineStore } from 'pinia'
import useUser from './user'

const useCounter = defineStore("counter", {
  state: () => ({
    count: 99,
  }),
  getters: {
    // 1. 基本使用
    doubleCount(state) {
      return state.count * 2
    },
    // 2. 一个 getters 引入另一个 getters
    doubleCountPlusOne() {
      // this 是 store 实例
      return this.doubleCount + 1
    },
    // 3. 也可返回一个函数

    // 4. 用到别的 store 中的数据
    showInfo(state) {
      const userStore = useUser()

      return `name: ${userStore.name} - count: ${state.count}`
    }
  },

  actions: {
    changeCountByNum(num) {
      this.count += num
    }
  }
})

export default useCounter