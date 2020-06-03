/*
 * @Author       : zhuxiaodong
 * @Date         : 2020-06-01 16:09:26
 * @LastEditTime : 2020-06-01 16:44:02
 * @LastEditors  : zhuxiaodong
 * @Description  : 存放公共state
 * @FilePath     : /ylz-admin-template/src/store/module/common.js
 */ 

import {CHANGE_COMM_MENU} from '../mutation-types'

const state = {
 menu:'',
}

const getters = {

}

const mutations = {
 [CHANGE_COMM_MENU](state,data){
  state.menu = data
 }
}

const actions = {
 changeCommMenu({commit},data){
  commit(CHANGE_COMM_MENU,data)
 }
}

export default{
 namespaced:true,
 state,
 getters,
 mutations,
 actions
}