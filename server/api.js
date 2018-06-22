/*jshint esversion: 6 */
const MySQL = require('./MysqlManage');
const express = require('express');
const router = express.Router();

// 用户注册
router.post('/api/register',(req,res)=>{
    // 获取数据库 id 序号
    MySQL.PoolMySQL("select * from manage where zd = 'registerId'" ,function (err,desc,data) {
        if (err){
            res.send({'code': 0, 'msg': desc,});
            return
        }
        var id = data[0].zdz                       // 用户id号

        MySQL.PoolMySQL("insert into user(id,account,password) values(" + id + ",'" + req.body.account + "','" + req.body.password + "')",function (err1,desc1,data1) {
            if (err){
                res.send({'code': 0, 'msg': desc,});
                return;
            }
            res.send({'code': 1, 'msg': '注册成功!'});

            MySQL.PoolMySQL("update manage set zdz = "+ parseInt(id+1) +" where zd = 'registerId'",function (err2,desc2,data2) {})
        })
    })
});

module.exports = router;
