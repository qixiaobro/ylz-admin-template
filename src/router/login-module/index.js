/*
 * @Author       : zhuxiaodong
 * @Date         : 2020-06-02 17:28:39
 * @LastEditTime : 2020-06-02 17:51:47
 * @LastEditors  : zhuxiaodong
 * @Description  : 登录路由
 * @FilePath     : /ylz-admin-template/src/router/login-module/index.js
 */ 
export default [{
 path: '/login',
 name: 'login',
 component: () => import("@/views/login-module/login.vue"),
 meta:{
  title:'登录'
 }
}]