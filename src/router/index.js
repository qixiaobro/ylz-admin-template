/*
 * @Author       : zhuxiaodong
 * @Date         : 2020-06-01 17:02:13
 * @LastEditTime : 2020-06-02 17:48:08
 * @LastEditors  : zhuxiaodong
 * @Description  : 自动注册路由
 * @FilePath     : /ylz-admin-template/src/router/index.js
 */

import Vue from "vue"
import Router from "vue-router"
Vue.use(Router)
//自动引入模块路由，路由为模块下index.js文件
export let routes = []
const routerContext=require.context("./", true, /index\.js$/)
routerContext.keys().forEach(route => {
  if (route.startsWith("./index")){
    return
  }
  const routerModule=routerContext(route)
  routes=[...routes, ...(routerModule.default||routerModule)]
  console.log(routes)
})
var router = new Router({
  linkActiveClass: "active",
  routes,
  mode:"hash"
})

export default router