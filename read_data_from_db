// 引入Mysql
let mysql      = require('mysql')
let connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'mysrcDB'
})

//連線
connection.connect()

let sqlstring = ""

//新增表格
sqlstring = "Create Table PROPERTY_DATA (propertyid INTEGER PRIMARY KEY AUTOINCREMENT,propertyname TEXT,propertycontent TEXT,propertyusername TEXT)"
connection.query(sqlstring, function (err, results, fields){
    if(err){
        console.log('[ERROR!!] - ', err.message)
        return
    }
    console.log('--------------------------新增----------------------------')
    console.log('新增表格：', results);
    console.log('------------------------------------------------------------\n\n')
})