import { createStore } from "vuex"
import { CHANGE_INFO, CHANGE_NAME } from "./mutation_type";
import homeModule from "./modules/home"
import counterModule from "./modules/counter";

// 存储的状态默认都是响应式
const store = createStore({
  state: () => ({
    // 模拟数据
    // counter: 100,
    rootCounter: 100,
    name: "codercc",
    level: 99,
    avaterURL: "xxxxxxxxx",
    users: [
      { id: 111, name: "cc", age: 25},
      { id: 112, name: "zy", age: 26}
    ],
    books: [
      { id: 1, name: "vue"},
      { id: 2, name: "react"},
      { id: 3, name: "javaScript"}
    ],

    // 服务器数据
    // banners: [],
    // recommends: []
  }),

  getters: {
    // 1. getters 基本使用
    doubleCounter(state) {
      return state.counter * 2
    },
    totalAge(state) {
      return state.users.reduce((pre, item) => {
        return pre + item.age
      }, 0)
    },
    // 2. getters 属性中，获取其他 getters
    message(state, getters) {
      
      return `name: ${state.name} - level: ${state.level} - couple's totalAge: ${getters.totalAge}`
    },
    // 3. getters 是可以返回一个函数的，调用这个函数可以传入参数
    getBookById(state) {
      return function(id) {
        return state.books.find(item => item.id === id)
      }
    }
  },
  // 重要原则：mutation 中不要执行异步操作，无法追踪到数据的变化
  mutations: {
    add(state, payload) {
      if (typeof(payload) === 'number') {
        state.counter += payload
      } else {
        state.counter++
      }
    },

    changeName(state, payload) {
      state.name = payload
    },

    [CHANGE_INFO](state, newInfo) {
      state.name = newInfo.name,
      state.level = newInfo.level
    },

    // changeBanners(state, banners) {
    //   state.banners = banners
    // },
    // changeRecommends(state, recommends) {
    //   state.recommends = recommends
    // }
  },

  actions: {
    addAction(context, payload) {
      context.commit("add", payload)
    },

    // async fetchHomeMultidataAction(context) {
    //   // 1. 返回 promise， 给 promise 设置 then
    //   // fetch("http://123.207.32.32:8000/home/multidata").then(res => {
    //   //   return res.json().then(data => {
    //   //     console.log(data)
    //   //   })
    //   // })

    //   // 2. promise 的链式调用
    //   // fetch("http://123.207.32.32:8000/home/multidata").then(res => {
    //   //   return res.json()
    //   // }).then(data => {
    //   //   console.log(data)
    //   // })

    //   // 3. await/async
    //   const res = await fetch("http://123.207.32.32:8000/home/multidata")
    //   const data = await res.json()
    //   console.log(data)
    //   // 修改 state 数据
    //   context.commit("changeBanners", data.data.banner.list)
    //   context.commit("changeRecommends", data.data.recommend.list)
    // }
  },

  modules: {
    home: homeModule,
    counter: counterModule
  }
})


export default store