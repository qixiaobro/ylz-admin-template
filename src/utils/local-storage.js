/*
 * @Author       : zhuxiaodong
 * @Date         : 2020-06-01 17:54:40
 * @LastEditTime : 2020-06-01 17:55:04
 * @LastEditors  : zhuxiaodong
 * @Description  : 操作localStorage方法
 * @FilePath     : /ylz-admin-template/src/utils/local-storage.js
 */ 
export function setLocalStorage(key, val) {
 return window.localStorage.setItem(key, JSON.stringify(val))
}

export function getLocalStorage(key) {
 return JSON.parse(window.localStorage.getItem(key))
}