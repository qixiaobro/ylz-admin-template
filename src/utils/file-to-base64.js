/*
 * @Author       : zhuxiaodong
 * @Date         : 2020-06-01 17:46:52
 * @LastEditTime : 2020-06-01 17:48:37
 * @LastEditors  : zhuxiaodong
 * @Description  : 文件转为base64编码
 * @FilePath     : /ylz-admin-template/src/utils/file-to-base64.js
 */ 
export function turnToBase64(file) {
 return new Promise(function(resolve, reject) {
   let reader = new FileReader()
   reader.readAsDataURL(file)
   reader.onload = function() {
     resolve(reader.result)
   }
   reader.onerror = function(error) {
     reject(error)
   }
 })
}

