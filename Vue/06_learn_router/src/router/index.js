import { createRouter, createWebHashHistory, createWebHistory } from "vue-router"

// import Home from "../views/Home.vue"
// import About from "../views/About.vue"

// import 函数，会进行分包
// 路由懒加载
const Home = () => import(/* webpackChunkName: 'home' */"../views/Home.vue")
const About = () => import(/* webpackChunkName: 'about' */"../views/About.vue")
const User = () => import(/* webpackChunkName: 'user' */"../views/User.vue")

// 创建一个路由：映射关系
const router = createRouter({
  // 指定采用的模式：hash
  history: createWebHashHistory(),

  // 指定采用的模式：history
  // history: createWebHistory(),
  routes: [
    { // 重定向
      path: "/", 
      redirect: "/home" 
    }, 
    { 
      name: "home", // name 属性，值是唯一的
      path: "/home", 
      component: Home,
      meta: {
        // 自定义属性
      },
      children: [
        { 
          path: "",
          redirect: "/home/homerecommend"
        },
        {
          path: "homerecommend",
          component: () => import("../views/HomeRecommend.vue")
        },
        {
          path: "homeranking",
          component: () => import("../views/HomeRanking.vue")
        }
      ]
    },
    { 
      name: "about",
      path: "/about", 
      component: About
    },
    {
      path: "/user/:id",
      component: User
    },
    {  // 匹配到一个不存在的路径
      path: "/:pathMatch(.*)",
      component: () => import("../views/NotFound.vue")
    },
    {
      path: "/order",
      component: () => import("../views/Order.vue")
    },
    {
      path: "/login",
      component: () => import("../views/Login.vue")
    }
  ]
})

let isAdmin = true
if (isAdmin) {
  // 一级路由
  router.addRoute({
      path: "/admin",
      component: () => import("../views/Admin.vue")
  })

  // 给 Home 添加子路由
  router.addRoute("home", {
    path: "vip",
    component: () => import("../views/HomeVip.vue")
  })
}

// 获取 router 中所有的映射路由对象
console.log(router.getRoutes())

// 路由导航守卫
// 进行任何路由跳转之前，传入的 beforeEach 中的函数都会被回调
router.beforeEach((to, from) => {
  console.log("传入 beforeEach 的回调函数被回调")
  // if (to.path === "/order") {
  //   return "/login"
  // }
  const token = localStorage.getItem("token")
  if (to.path === "/order" && !token) {  // 判断是否登录
    return "/login"
  }
})

export default router