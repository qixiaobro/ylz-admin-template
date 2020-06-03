/*
 * @Author       : zhuxiaodong
 * @Date         : 2020-06-01 17:40:02
 * @LastEditTime : 2020-06-02 16:53:29
 * @LastEditors  : zhuxiaodong
 * @Description  : 操作cookie方法
 * @FilePath     : /ylz-admin-template/src/utils/token.js
 */
import Cookies from "js-cookie"

const TOKEN_KEY = process.env.TOKEN ? process.env.TOKEN : 'accessToken';

export function getToken() {
  return Cookies.get(TOKEN_KEY)
}

export function setToken(token) {
  return Cookies.set(TOKEN_KEY, token)
}

export function removeToken() {
  return Cookies.remove(TOKEN_KEY)
}

