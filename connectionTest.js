/*匯入mysq模組*/
let mysql = require('mysql');

/*新增連結*/
let connection = mysql.createConnection({
    host: 'localhost', user: 'root', password: 'aa', //database: ''
});

/*連結 mysql*/
connection.connect(function(err) {
  if (err) {
    return console.error('error: ' + err.message);
  }
  console.log('Connected to the MySQL server.');
});

/*關閉連結 mysql*/
connection.end();