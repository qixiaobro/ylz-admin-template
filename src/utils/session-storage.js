/*
 * @Author       : zhuxiaodong
 * @Date         : 2020-06-01 17:52:57
 * @LastEditTime : 2020-06-01 17:54:28
 * @LastEditors  : zhuxiaodong
 * @Description  : 操作sessionStorage方法
 * @FilePath     : /ylz-admin-template/src/utils/session-storage.js
 */
const ls = window.sessionStorage
export default {
 getItem(key) {
  try {
   return JSON.parse(ls.getItem(key))
  } catch (err) {
   return err
  }
 },
 setItem(key, val) {
  try {
   ls.setItem(key, JSON.stringify(val))
  } catch (err) {
   return err
  }
 },
 clear() {
  ls.clear()
 },
 keys() {
  return ls.keys()
 },
 removeItem(key) {
  ls.removeItem(key)
 }
}

