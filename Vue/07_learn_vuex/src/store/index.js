import { createStore } from "vuex"

// 存储的状态默认都是响应式
const store = createStore({
  state: () => ({
    counter: 100,
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
    ]
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
  mutations: {
    add(state) {
      state.counter++
    }
  }
})


export default store