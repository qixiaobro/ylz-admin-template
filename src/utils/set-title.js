/*
 * @Author       : zhuxiaodong
 * @Date         : 2020-06-01 17:51:11
 * @LastEditTime : 2020-06-01 17:51:27
 * @LastEditors  : zhuxiaodong
 * @Description  : 设置浏览器title
 * @FilePath     : /ylz-admin-template/src/utils/set-title.js
 */ 
export default function setTitle(title) {
 document.title = title
 document.head.querySelector('title').innerText = title
}
