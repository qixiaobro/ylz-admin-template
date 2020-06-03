/*
 * @Author       : zhuxiaodong
 * @Date         : 2020-06-01 17:02:42
 * @LastEditTime : 2020-06-02 18:02:40
 * @LastEditors  : zhuxiaodong
 * @Description  : 路由全局前置守卫
 * @FilePath     : /ylz-admin-template/src/router/before-each.js
 */
import { getToken } from "@/utils/token"
// 设置白名单
const whiteList = [
  '/login',
]
// 路由token拦截
export const beforeEachCheckToken = async (to, from, next) => {
  if (whiteList.toString().toLowerCase().indexOf(to.path.toString().toLowerCase()) > -1) {
    next()
  } else {
    const hasToken = getToken()
    if (!hasToken) {
      next({
        path: '/login'
      })
    }else{
      next()
    }
  }
}