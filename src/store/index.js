/*
 * @Author       : zhuxiaodong
 * @Date         : 2020-06-01 16:08:10
 * @LastEditTime : 2020-06-02 18:11:13
 * @LastEditors  : zhuxiaodong
 * @Description  : 组装模块并导出store
 * @FilePath     : /ylz-admin-template/src/store/index.js
 */ 
import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
import common from './modules/common'


Vue.use(Vuex)

const store = new Vuex.Store({
  modules:{
   user,
   common
  }
})

export default store