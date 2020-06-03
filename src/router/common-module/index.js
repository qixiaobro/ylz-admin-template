/*
 * @Author       : zhuxiaodong
 * @Date         : 2020-06-01 17:28:32
 * @LastEditTime : 2020-06-02 17:38:41
 * @LastEditors  : zhuxiaodong
 * @Description  : 公共页面路由
 * @FilePath     : /ylz-admin-template/src/router/common-module/index.js
 */

export default [{
 path: '/',
 name: 'index',
 component: () => import("@/views/login-module/login.vue"),
 meta: {
  title: '首页'
 }
}]