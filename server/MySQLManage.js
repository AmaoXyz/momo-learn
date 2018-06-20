/*jshint esversion: 6 */
var mysql = require('mysql');
const express = require('express');
const router = express.Router();

var connection = {
    host     : '192.168.1.199',         // 数据库地址
    port     : '3306',              // 数据库端口
    user     : 'root',              // 登陆用户名
    password : 'ly314926',          // 登陆密码
    database : 'role'               // 数据库名
};

var pool = mysql.createPool(connection);

const moudles = {};

// 响应一个JSON数据
var responseJSON = function (res, ret) {
    if(!ret) {
        res.json({code:'500',msg: '操作失败'});
    } else {
        res.json({code:'500',msg: '操作失败',data: ret});
    }
};

moudles.stop = function(){
    pool.end();
};


// 查询数据库
// common : 表名
// callback : 回调函数
moudles.find =function (common,callback) {
    var  sql = 'SELECT * FROM ' + common;

    console.log('MySQL Find : ',common)

    pool.getConnection(function(err,conn){
        if(err){
            callback(false,'无法连接,数据库异常!');
        }else{
            conn.query(sql,function (errs, result) {
                //释放连接
                conn.release();
                if(errs){
                    callback(false,'查询不到信息!');
                    return;
                }
                callback(true,result);
            });
        }
    });
};

// 新增一条数据 插入表
moudles.add = function (common,callback) {
    var sql = 'INSERT INTO ' + common;

    var  addSql = sql + '(username,email,password,create_time) VALUES(?,?,?,?)';
    var  addSqlParams = ['test1', 'amao@qq.com','123456', '2018/12/12 10:32'];

    pool.getConnection(function(err,conn){
        if(err){
            callback(false,err);
        }else{
            conn.query(addSql,addSqlParams,function (errs, result) {
                conn.release();
                if(errs){
                    callback(false,errs);
                    return;
                }
                callback(true,result);
            });
        }
    });
};

module.exports = moudles;

