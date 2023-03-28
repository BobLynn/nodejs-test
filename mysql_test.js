// 引入Mysql
let mysql      = require('mysql');
let connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'mysrcDB'
});
 
// 执行数据库连接
connection.connect();
 
let sqlstring = "";
 
// 创建表
sqlstring = "Create Table MYTABLE (name VARCHAR(20), sex CHAR(1))"
connection.query(sqlstring, function (err, results, fields) {
    if (err) {
         console.log('[UPDATE ERROR] - ', err.message);
        return;
    }
    console.log('--------------------------CREATE----------------------------');      
    console.log('CREATE TABLE:', results);       
    console.log('------------------------------------------------------------\n\n'); 
});
 
// 插入数据
sqlstring = "Insert into MYTABLE Values('Michael', 'm')";
connection.query(sqlstring, function (err, result) {
    if(err){
        console.log('[INSERT ERROR] - ', err.message);
        return;
    }       
 
   console.log('--------------------------INSERT----------------------------');      
   console.log('INSERT ID - ', result);       
   console.log('------------------------------------------------------------\n\n'); 
});
 
// 更新数据
sqlstring = "Update MYTABLE Set name = 'Michael Jordan' Where sex = 'm'";
connection.query(sqlstring, function (err, result) {
    if(err){
        console.log('[UPDATE ERROR] - ', err.message);
        return;
    }       
    console.log('--------------------------UPDATE----------------------------');
    console.log('UPDATE affectedRows - ', result.affectedRows);
    console.log('------------------------------------------------------------\n\n'); 
});
 
// 查询数据
sqlstring = "Select * From MYTABLE";
connection.query(sqlstring, function (err, result) {
    if(err){
        console.log('[SELECT ERROR] - ', err.message);
        return;
    }
 
    console.log('--------------------------SELECT---------------------------');
    console.log('SELECT - ', result);
    console.log('------------------------------------------------------------\n\n');  
});
 
// //删除数据
// sqlstring = "Delete From MYTABLE";
// connection.query(sqlstring, function (err, result) {
//     if(err){
//         console.log('[DELETE ERROR] - ', err.message);
//         return;
//     }       
 
//     console.log('--------------------------DELETE----------------------------');
//     console.log('DELETE affectedRows - ', result.affectedRows);
//     console.log('------------------------------------------------------------\n\n'); 
// });
 
// //删除表格
// sqlstring = "Drop Table MYTABLE";
// connection.query(sqlstring, function (err, result) {
//     if(err){
//         console.log('[DROP ERROR] - ', err.message);
//         return;
//     }       
 
//     console.log('--------------------------DROP-----------------------------');
//     console.log('DROP TABLE :', result.affectedRows);
//     console.log('------------------------------------------------------------\n\n');   
// });
 
// 断开数据库连接
connection.end();