const exp = require("constants")
const http = require("http")    //http原生模組
const sqlite3 = require('sqlite3').verbose()  //SQLite
const utf8 = require("utf8")
const app = require("./app")

const port_2 = 8000

const sql_server = http.createServer(function(req, res){

    console.log(req.method)     //在終端上顯示目前資料傳輸狀態

    //連接資料庫
    let db = new sqlite3.Database('./mike.db', function (err)
    {
        if (err) {
            console.error(err.message)
        }
        console.log("Connected to 'mike.db' database.")
    })



    if(req.url == '/'){
        res.writeHead(200, {'Content-Type': 'text/plain'})
        res.end("這是主頁面！ This is the MainPage!!")
    }

    //GET: 從API取得資料
    else if(req.url == '/property-content' && req.method == 'GET'){
        
            db.all('SELECT * FROM users', [], (err, rows) => {
                if (err) {
                    throw err
                }
                
                rows.forEach((row) => {
                    console.log(row)
                    //在終端機顯示資料內容
                })
            })
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