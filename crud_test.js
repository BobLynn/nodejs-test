const exp = require("constants")
const http = require("http")    //http原生模組
const sqlite3 = require('sqlite3')  //SQLite
const utf8 = require("utf8")

const port_2 = 8000

const sql_server = http.createServer(function(req, res){
console.log(req.method)

let database = new sqlite3.Database('./mike.db', function (err)
{
    if (err) {
        console.error(err.message)
      }
      console.log("Connected to 'mike.db' database.")
})



if(req.url == '/'){
    res.writeHead(200, {'Content-Type': 'text/plain'})
    res.end('mainPage')
}
//GET: 從API取得資料
else if(req.url == '/property-content' && req.method == 'GET'){
    res.writeHead(200, {'Content-Type': 'application/json'})
    database.all('SELECT * FROM users', [], (err, rows) => {
        if (err) {
          throw err
        }
        res.render('property-content',{data: rows})
        // rows.forEach((row) => {
        //   console.log(row)
        // })
      })
    // res.end("{'property name': 'PC Monitor', \
    // 'serial number': '3101010-123456567', \
    // 'professor': 'Shih-An, Lee'}")
}
//POST: 傳送資料以建立資料庫的資料
else if(req.url == '/property-content' && req.method == 'POST'){
    res.writeHead(200, {'Content-Type': 'application/json'})
    res.end('取得資料庫資料！ GOT PROPERTY DATA!')
}
//PUT: 傳送資料以更新資料庫的資料
else if(req.url == '/property-content' && req.method == 'PUT'){
    res.writeHead(200, {'Content-Type': 'application/json'})
    res.end('財產資料已更新！ PROPERTY DATA UPDATED!')
}
//DELETE: 刪除資料
else if(req.url == '/property-content' && req.method == 'DELETE'){
    res.writeHead(200, {'Content-Type': 'application/json'})
    res.end('財產資料已刪除！ PROPERTY DATA DELETED!')
}
})

//監聽：http://localhost:8000/
    sql_server.listen(port_2)
    console.log('Server is running at http://localhost:8000/ \n')