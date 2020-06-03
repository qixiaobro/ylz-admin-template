/*
 * @Author       : zhuxiaodong
 * @Date         : 2020-06-02 15:57:21
 * @LastEditTime : 2020-06-02 17:12:12
 * @LastEditors  : zhuxiaodong
 * @Description  : user模块api
 * @FilePath     : /ylz-admin-template/src/apis/modules/user.js
 */

import http from "../http"

/**
 * 获取用户信息
 *
 * @param {*} params
 * @param {*} options
 * @returns
 */
export const getUserInfo = (params = {}, options = {}) => {
 return http.post("/api/userInfo", {
  ...params
 }, options).then(result => {
  return result.data
 }).catch((error) => {
  return new Error(error)
 })
}