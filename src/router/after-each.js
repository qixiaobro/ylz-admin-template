/*
 * @Author       : zhuxiaodong
 * @Date         : 2020-06-01 17:02:29
 * @LastEditTime : 2020-06-01 18:10:20
 * @LastEditors  : zhuxiaodong
 * @Description  : 路由全局后置守卫
 * @FilePath     : /ylz-admin-template/src/router/after-each.js
 */
import setTitle from "@/utils/set-title"

/**
 * @description: 获取meta.title,设置浏览器title
 * @param {type} 
 * @return: 
 * @Author: zhuxiaodong
 */
export const afterEachSetTitle = (to) => {
 let { title } = to.meta
 title || (title = to.name)
 if (title) {
  setTitle(title)
 }
}