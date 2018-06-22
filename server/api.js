/*jshint esversion: 6 */
const MySQL = require('./MysqlManage');
const express = require('express');
const router = express.Router();

Role = require('./Role')

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

// 用户登陆
router.post('/api/login',(req,res)=>{
    var acc = req.body.account
    var password = req.body.password

    MySQL.PoolMySQL("select * from user where account = '" + acc + "'",function (err,desc,data) {
        if (err || !data[0]){
            res.send({'code': 0, 'msg': '请检查用户名是否正确',});
            return
        }
        var info = data[0]                       // 用户id号
        if (info.password == password) {
            res.send({'code': 1, 'msg': '登陆成功',});
            Role.initData(info);
            return
        }
        res.send({'code': 2, 'msg': '登陆失败,密码错误'});
    })
});

module.exports = router;
