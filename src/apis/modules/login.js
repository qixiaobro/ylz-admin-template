/*
 * @Author       : zhuxiaodong
 * @Date         : 2020-06-02 16:00:54
 * @LastEditTime : 2020-06-02 18:12:24
 * @LastEditors  : zhuxiaodong
 * @Description  : 登录模块api
 * @FilePath     : /ylz-admin-template/src/apis/modules/login.js
 */
import http from "../http"
/**
 * 获取验证码
 *
 * @param {*} params
 * @param {*} options
 * @returns
 */
export const getCodeImage = (options = {}) => {
  return http.post("/api/login/codeImage", {
  }, options).then(result => {
    return result.data
  }).catch((error) => {
    return new Error(error)
  })
}
/**
 * 登录
 *
 * @param {*} params
 * @param {*} options
 * @returns
 */
export const login = (params = {}, options = {}) => {
  return http.post("/api/login/formLogin", {
    ...params
  }, options).then(result => {
    return result.data
  }).catch((error) => {
    return new Error(error)
  })
}