/*jshint esversion: 6 */
var mysql = require('mysql');
const express = require('express');
const router = express.Router();

var connection = {
    host     : '192.168.1.66',         // 数据库地址
    port     : '3306',              // 数据库端口
    user     : 'root',              // 登陆用户名
    password : 'ly314926',          // 登陆密码
    database : 'role'               // 数据库名
};

var pool = mysql.createPool(connection);

// 查询数据库                                      var sql = 'select * from ' + common;
// 新增一条数据 插入表                              var sql = 'insert into ' + param.common + "(name,age) values(test1,123)";
// 删除                                           var sql = "delete * from " + common + "where id = " + id;
// 修改                                           var sql = "update "+ common +" set "+ "name = " + "哈哈哈"  +" where id = " + id;
// 查询                                           var sql = "select * from " + common + "where id = " + id;

const moudles = {};

moudles.PoolMySQL = function(sql,callback){
    pool.getConnection(function(err,conn){
        if(err){
            callback(true,'无法连接,数据库异常!');
        }else{
            conn.query(sql,function (errs, result) {
                //释放连接
                conn.release();
                if(errs){
                    callback(true,'查询不到信息!');
                    return;
                }

                console.log('-------->>',result)
                callback(false,'success',result);
            });
        }
    });
}

moudles.StopMySQL = function(){
    pool.end();
};

module.exports = moudles;

