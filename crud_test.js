const exp = require("constants")
const http = require("http")    //http原生模組
const sqlite3 = require('sqlite3')  //SQLite
const port_1 = 3000
const port_2 = 8000

const sql_server = http.createServer(function(req, res){
console.log(req.method)

if(req.url == '/'){
    res.writeHead(200, {'Content-Type': 'text/plain'})
    res.end('mainPage')
}
//GET: 從API取得資料
else if(req.url == '/property-content' && req.method == 'GET'){
    res.writeHead(200, {'Content-Type': 'application/json'})
    res.end("{'property name': 'PC Monitor', 'serial number': '3101010-123456567', 'professor': 'Shih-An, Lee'}")
}
//POST: 傳送資料以建立資料庫的資料
else if(req.url == '/property-content' && req.method == 'POST'){
    res.writeHead(200, {'Content-Type': 'application/json'})
    res.end('GOT PROPERTY DATA!');
}
//PUT: 傳送資料以更新資料庫的資料
else if(req.url == '/property-content' && req.method == 'PUT'){
    res.writeHead(200, {'Content-Type': 'application/json'})
    res.end('PROPERTY DATA UPDATED!');
}
//DELETE: 刪除資料
else if(req.url == '/property-content' && req.method == 'DELETE'){
    res.writeHead(200, {'Content-Type': 'application/json'})
    res.end('PROPERTY DATA DELETED!');
}
})

    sql_server.listen(port_2)
    console.log('Server is running at http://localhost:8000/ \n')


// const HTTP_test = http.createServer(function (req, res){    //request & respond

//     // 傳送 HTTP 抬頭 
//     // HTTP 狀態值: 200 : OK
//     // 內容類型: text/plain

//     //起始界面
//     if(req.url == '/'){
//         res.writeHead(200, {"Content-Type": "text/plain"})
//         // "text/html"
//         res.end("Welcome Aboard!!")
//         console.log('Page Status: [Homepage]    \n')
//     }
//     //「關於」界面
//     else if (req.url == '/about'){
//         res.writeHead(200, {"Content-Type": "text/plain"})
//         // "text/html"
//         res.end("Welcome to 'About' page!!")
//         console.log('Page Status: [About]   \n')
//     }

//     else if (req.url == '/database'){
//         res.writeHead(200, {"Content-Type": "text/plain"})
//         // "text/html"
//         res.end("Welcome to 'Database' page!!")
//         console.log('Page Status: [Database]    \n')
//     }

//     //例外域名：錯誤回報
//     else{
//         res.writeHead(200, {"Content-Type": "text/plain"})
//         // "text/html"
//         res.end("ERROR: No such page!!")
//         // console.log('Page Status: NULL    \n')
//     }
// })
        
// //監聽：3000
// HTTP_test.listen(port_1)

// //終端機回饋如下字符
// console.log('Server is running at http://localhost:3000/ \n')