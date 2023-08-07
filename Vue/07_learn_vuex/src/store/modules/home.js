export default {
  state: () => ({
    banners: [],
    recommends: []
  }),

  mutations: {
    changeBanners(state, banners) {
      state.banners = banners
    },
    changeRecommends(state, recommends) {
      state.recommends = recommends
    }
  },
  
  actions: {
    addAction(context, payload) {
      context.commit("add", payload)
    },

    async fetchHomeMultidataAction(context) {
      // 1. 返回 promise， 给 promise 设置 then
      // fetch("http://123.207.32.32:8000/home/multidata").then(res => {
      //   return res.json().then(data => {
      //     console.log(data)
      //   })
      // })

      // 2. promise 的链式调用
      // fetch("http://123.207.32.32:8000/home/multidata").then(res => {
      //   return res.json()
      // }).then(data => {
      //   console.log(data)
      // })

      // 3. await/async
      const res = await fetch("http://123.207.32.32:8000/home/multidata")
      const data = await res.json()
      console.log(data)
      // 修改 state 数据
      context.commit("changeBanners", data.data.banner.list)
      context.commit("changeRecommends", data.data.recommend.list)
    }
  }

}