var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : '127.0.0.1',
  port     : '3306',
  user     : 'root',
  password : 'ly314926',
});

connection.connect();
connection.query("use role");

// var  sql = 'SELECT * FROM websites';
// //查
// connection.query(sql,function (err, result) {
//   if(err){
//     console.log('[SELECT ERROR] - ',err.message);
//     return;
//   }
//
//   console.log('--------------------------SELECT----------------------------');
//   console.log(result);
//   console.log('------------------------------------------------------------\n\n');
// });


//增
var  addSql = 'INSERT INTO user(username,email,password,create_time) VALUES(?,?,?,?)';
var  addSqlParams = ['test1', 'amao@qq.com','123456', '2018/12/12 10:32'];
connection.query(addSql,addSqlParams,function (err, result) {
  if(err){
    console.log('[INSERT ERROR] - ',err.message);
    return;
  }

  console.log('--------------------------INSERT----------------------------');
  console.log('INSERT ID:',result.insertId);
  console.log('-----------------------------------------------------------------\n\n');
});


// 查
// var strQuery = "select * from user";
// connection.query( strQuery, function(err, rows){
//   if(err)    {
//     throw err;
//   }else{
//     console.log( rows );
//   }
// });


connection.end();
