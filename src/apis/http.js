/*
 * @Author       : zhuxiaodong
 * @Date         : 2020-06-02 13:54:24
 * @LastEditTime : 2020-06-02 17:19:32
 * @LastEditors  : zhuxiaodong
 * @Description  : axios封装
 * @FilePath     : /ylz-admin-template/src/apis/http.js
 */
import axios from "axios"
import { getToken } from "@/utils/token"
import { Message } from 'element-ui';
import router from "@/router/index"

const BASE_URL = process.env.BASE_URL ? process.env.BASE_URL : '';
const TOKEN_KEY = process.env.TOKEN ? process.env.TOKEN : 'accessToken';
const TIMEOUT = process.env.TIMEOUT ? process.env.TIMEOUT : 5000

const GLOBAL_ERROR_CODE = {
 '1001': '接口认证失败',
 '1002': '授权过期',
 '1003': '缺失参数',
 '600002': 'token格式不对',
 '600003': 'token失效',
 '600004': '刷新token失效',
}

let service = axios.create({
 baseURL: BASE_URL,
 timeout: TIMEOUT,
 headers: {
  "Content-Type": 'application/json;multipart/form-data',
  [TOKEN_KEY]: getToken() ? getToken() : '',
 }
})

// 添加请求拦截器
service.interceptors.request.use(config => {
 let data = {
  data: config.data
 }
 config.data = data
 return config;
}, function (error) {
 return Promise.reject(error);
});

// 添加响应拦截器
service.interceptors.response.use(response => {
 let code = response.data.code + ''
 if (GLOBAL_ERROR_CODE[code]) {
  Message.error({ message: GLOBAL_ERROR_CODE[code] });
  if (response.data.code > 600001) {
   router.push({ path: '/login' })
  }
 } else {
  Message({
   type: code === '0' ? 'success' : 'error',
   message: response.data.message
  })
 }
 return response;
}, function (err) {
 if (err.response.status == 504 || err.response.status == 404) {
  Message.error({ message: '服务器错误！' });
 } else if (err.response.status == 403) {
  Message.error({ message: '权限不足,请联系管理员!' });
 } else if (err.response.status == 401) {
  Message.error({ message: '未授权' });
 } else {
  if (err.response.data.message) {
   Message.error({ message: err.response.data.message });
  } else {
   Message.error({ message: '未知错误!' });
  }
 }
 return Promise.reject(err);
});

export default service