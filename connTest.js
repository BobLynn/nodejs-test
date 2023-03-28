/*引入mysql模块*/
let mysql = require('MySQL');
/*创建连接*/
let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    //database: ''
});
/*连接mysql*/
connection.connect(function(err) {
  if (err) {
    return console.error('error: ' + err.message);
  }
  console.log('Connected to the MySQL server.');
});
/*关闭连接mysql*/
connection.end();