import type { RouteRecordRaw } from "vue-router"

function loadLocalRoutes() {
  // 一、动态获取所有的路由对象，放到数组中
  // *路由对象都在独立的文件中
  // *从文件中将所有路由对象先读取数组中
  // 读取 router/main 中所有的 ts 文件
  const localRoutes: RouteRecordRaw[] = []
  const files: Record<string, any> = import.meta.glob('../router/main/**/*.ts', { eager: true })
  for (const key in files) {
    const module = files[key]
    localRoutes.push(module.default)
  }

  return localRoutes
}

export let firstMenu: any = null

export function mapMenusToRoutes(userMenus: any[]) {
  const localRoutes = loadLocalRoutes()

  // 二、根据菜单去匹配正确的路由,将其放进 routes 数组并返回
  const routes: RouteRecordRaw[] = []
  for (const menu of userMenus) {
    for (const submenu of menu.children) {
      const route = localRoutes.find((item) => item.path === submenu.url)
      if (route) { // 类型缩小
        // 给route的顶层菜单增加重定向功能(但是只需要添加一次即可)
        if (!routes.find(item => item.path === menu.url)) {
          routes.push({ path: menu.url, redirect: route.path })
        }

        // 二级菜单对应的路由
        routes.push(route)
      }
      // 记录第一个被匹配到的菜单
      if (!firstMenu && route) firstMenu = submenu
    }
  }
  return routes
}


/**
 * 根据路径去匹配需要显示的菜单
 * @param path  需要匹配的路径
 * @param userMenus  所有的菜单
 */
export function mapPathToMenu(path: string, userMenus: any[]) {
  for (const menu of userMenus) {
    for (const submenu of menu.children) {
      if (submenu.url === path) return submenu
    }
  }
}


/**
 * 根据路径去匹配面包屑需要显示的标题
 * @param path 需要匹配的路径
 * @param userMenus 所有的菜单
 */

interface IBreadcrumbs {
  name: string
  path: string
}

export function mapPathToBreadcrumbs(path: string, userMenus: any[]) {
  const breadCrumbs: IBreadcrumbs[] = []
  for (const menu of userMenus) {
    for (const submenu of menu.children) {
      if (submenu.url === path) {
        // 一级
        breadCrumbs.push({name: menu.name, path: menu.url})
        // 二级
        breadCrumbs.push({name: submenu.name, path: submenu.url})
      }
    }
  }

  return breadCrumbs
}

/**
 * 菜单映射到 id 列表  递归实现
 * @param menuList
 */
export function mapMenuListToIds(menuList: any[]) {
  const ids: number[] = []
  function recurseGetId(menus: any[]) {
    for (const item of menus) {
      if (item.children) {
        recurseGetId(item.children)
      } else {
        ids.push(item.id)
      }
    }
  }
  recurseGetId(menuList)

  return ids
}

/**
 * 从菜单映射到按钮的权限
 * @param menuList 菜单的列表
 * @returns 权限的数组（字符串数组）
 */
export function mapMenusListToPermissions(menuList: any[]) {
  const permissions: string[] = []

  function recurseGetPermission(menus: any[]) {
    for (const item of menus) {
      if (item.type === 3) {
        permissions.push(item.permission)
      } else {
        recurseGetPermission(item.children ?? []) // 可能没有子数据
      }
    }
  }
  recurseGetPermission(menuList)

  return permissions
}
