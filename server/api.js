/*jshint esversion: 6 */
const MySQL = require('./MysqlManage');
const express = require('express');
const router = express.Router();

router.post('/api/test',(req,res)=>{
    MySQL.find(req.body.common,function (err,data) {
        if (err) {
            res.send({'code': 1, 'msg': '查询成功!', 'data': data});
        }else{
            res.send({'code': 0, 'msg': data,});
        }
    });
});

module.exports = router;
