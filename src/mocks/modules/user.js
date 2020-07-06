/*
 * @Author       : zhuxiaodong
 * @Date         : 2020-07-06 14:10:23
 * @LastEditTime : 2020-07-06 16:40:13
 * @LastEditors  : zhuxiaodong
 * @Description  : user mock
 * @FilePath     : /easy-mock-demo/src/mocks/modules/user.js
 */
let app = require('express').Router()
let Mock = require('mockjs')

app.post('/userInfo', (req, res) => {
 res.json(Mock.mock({
  "code": 0,
  "data": {
   createUserAccount: { crteAccountId: "983083", crteTime: 1592299058000, accountStatus: "1", accountId: "983471", },
   organ: { organName: "开发人员", provName: "福建省", provCode: "350000", organId: "745" },
   roles: ["1", "10", "13", "221"],
   userAccount: { crteAccountId: "983471", crteTime: 1592298397000, accountStatus: "1", accountId: "983761" }
  },
  "message": "成功",
  "timestamp": "1594018370",
  "type": "success"
 }))
})


module.exports = app