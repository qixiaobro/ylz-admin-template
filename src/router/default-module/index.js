/*
 * @Author       : zhuxiaodong
 * @Date         : 2020-06-02 17:37:55
 * @LastEditTime : 2020-06-02 17:39:39
 * @LastEditors  : zhuxiaodong
 * @Description  : 默认页面 如 404 401 405 等页面
 * @FilePath     : /ylz-admin-template/src/router/default-module/index.js
 */
export default [{
 path: '*',
 name: '404',
 component: () => import("@/views/default-module/default-404.vue"),
 meta: {
  title: '404'
 }
}]