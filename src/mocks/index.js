/*
 * @Author       : zhuxiaodong
 * @Date         : 2020-07-03 11:01:43
 * @LastEditTime : 2020-07-06 15:13:27
 * @LastEditors  : zhuxiaodong
 * @Description  : 
 * @FilePath     : /easy-mock-demo/src/mocks/index.js
 */
// import './modules/login'
let express = require('express')

let app = express()
app.use(function (req, res, next) { //配置跨域
 res.header("Access-Control-Allow-Origin", "*");
 res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
 res.header("Access-Control-Allow-Headers", "X-Requested-With");
 res.header('Access-Control-Allow-Headers', 'Content-Type');
 next();
});

let login = require('./modules/login')
let user = require('./modules/user')

app.use('/api',login)
app.use('/api',user)



app.listen('8090', () => {
 console.log('监听端口 8090')
})