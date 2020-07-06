/*
 * @Author       : zhuxiaodong
 * @Date         : 2020-07-02 16:55:35
 * @LastEditTime : 2020-07-06 15:18:50
 * @LastEditors  : zhuxiaodong
 * @Description  : login mock
 * @FilePath     : /easy-mock-demo/src/mocks/modules/login.js
 */
let app = require('express').Router();
let Mock = require('mockjs')

//获取验证码
app.post('/login/codeImage/', (req, res) => {
 res.json(Mock.mock({
  "code": 0,
  "data": {
   "imgUid": "486a35f2c2084498981d5d3b29be8934",
   "imgCode": "data:image/jpg;base64,/9j/4AAQSkZJRgABAgAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAAZAEIDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD2y3so3sbRo7a1LFUMhkjGSuOce9PtbCzk33H2Tb5uP3csYGzHHA7Z61narax3Ph+zLwXdxKqp5EdsSreaQNrbsfJjruPA565wWaBBfW+q3C6vbvNqDRAm/B3RumRhEwoCYOSV6k888Y2jSTpud/l/X9fjbCVVqooW+f8AX9fhfWTT7CS4aZI4m2jyygVSoOc9MdadLb6fBs8y2gXe4Rf3QOSeg6VBrdteSaJeRaSVhvJBlGUhSTkZ57EjIB9ccjrXORx2Ufinw2LDT57OLZOCksbR/N5X909WHGW78cnHFUqCqRcr9/wV/wAenzJq13Tko27fi7fh1+R019HZ2NnJc/2Z9o2Y/dW8Ad2yQOB365qT7BD9o/49LTyNn/PMbt2fyxisTxzb48K6jL50vJiOzd8ow4GMfjn6gVvt9s8mXb5Hm7/3ec7dvv79ahwSpKfdtfdb/M0U26rh2Sf33/yI54NPtoWllt4FRcf8sgSSeAAAMkk4AA5JOKpxHSNRuRbRR+VPFtmMT25hZlyRnDKCVzwcVYmFnp/2cCGRnj3GJIwWbB+8QO+Ac45PoCeKx9LV5PGEs+65uIxYBPPu4fJdT5hO1V2pkdydp5xyOlVTpxlCUn0/r+tSalSUZxiuv9f1oZcqukzrIAHDEMABgHv04oqW/wD+Qhc/9dW/maKwNzr7D/kH23/XJf5CpnkSJC8jqijqzHAFcFRQB3skaSxtHIivG4KsrDIYHqCKzbPRxbOtyG23hwssrSPMWjBJ2AyElQc5471ylFUpSSsnoS4xbu1qdre6ba6iqLdxtJGh3eWZGCNyD8yg4bkDgg1argKKTk2rN6DUUndLU7uB5JIVaWLynPVN27H407y08zzNi78bd2Ocema4KikMsX//ACELn/rq38zRVeigD//Z" 
  }, 
  "message": "成功", 
  "timestamp": "1594018370", 
  "type": "success"
 }))
})

module.exports = app