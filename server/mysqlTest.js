var mysql = require('mysql');
var connection = {
    host     : '192.168.1.199',         // 数据库地址
    port     : '3306',              // 数据库端口
    user     : 'root',              // 登陆用户名
    password : 'ly314926',          // 登陆密码
    database : 'role'               // 数据库名
};

var pool = mysql.createPool(connection);

pool.getConnection(function(err,conn){
    if(err){
        console.log('err:',err)
    }else{
        var  sql = 'SELECT * FROM ' + 'user';
        conn.query(sql,function (errs, result) {
            //释放连接
            conn.release();
            if(errs){
                console.log('err:',errs)
                return;
            }
            console.log('err:',result)

            pool.end()
        });
    }
});