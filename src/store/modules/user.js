/*
 * @Author       : zhuxiaodong
 * @Date         : 2020-06-01 16:09:30
 * @LastEditTime : 2020-06-01 21:23:46
 * @LastEditors  : zhuxiaodong
 * @Description  : 跟用户相关的state
 * @FilePath     : /ylz-admin-template/src/store/module/user.js
 */
import { CHANGE_USER_NAME, CHANGE_USER_TOKEN } from "../mutation-types"

const state = {
 userName: '',
 userToken:''
}

const mutations = {
 [CHANGE_USER_NAME](state, data) {
  state.userName = data
 },
 [CHANGE_USER_TOKEN](state, data) {
  state.userToken = data
 }
}

const getters = {

}

const actions = {
 changeUserName({ commit }, data) {
  commit(CHANGE_USER_NAME, data)
 },
 changeUserToken({commit},data){
  commit(CHANGE_USER_TOKEN, data)
 }

}

export default {
 namespaced: true,
 state,
 getters,
 mutations,
 actions
}