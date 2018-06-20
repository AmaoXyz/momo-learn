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

/************** 创建(create) 读取(get) 更新(update) 删除(delete) **************/

// // 获取已有账号接口
// router.post('/api/user/login',(req,res) => {
//     // 通过模型去查找数据库
//     models.Login.find({account: req.body.account, password: req.body.password}, (err,data) => {
//         if (err) {
//             // res.send(err);
//             res.send({'status': 1001, 'message': 'The account is not existed!', 'data': err});
//         } else {
//             console.log(data);
//             if (data.length > 0) {
//                 res.send({'status': 1000, 'message': 'Login successfully!', 'data': data});
//             } else {
//                 res.send({'status': 1001, 'message': 'The account is not existed!', 'data': err});
//             }
//         }
//     });
// });


module.exports = router;
