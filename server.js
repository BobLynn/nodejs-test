//http原生模組
let http = require("http")

//request & respond
let myApp = http.createServer(function (req, res){

    // 傳送 HTTP 抬頭 
    // HTTP 狀態值: 200 : OK
    // 內容類型: text/plain

    //起始界面
    if(req.url == '/'){
        res.writeHead(200, {"Content-Type": "text/plain"})
        // "text/html"
        res.end("Welcome Aboard!!")
        console.log('Page Status: [Homepage]    \n')
    }
    //「關於」界面
    else if (req.url == '/about'){
        res.writeHead(200, {"Content-Type": "text/plain"})
        // "text/html"
        res.end("Welcome to 'About' page!!")
        console.log('Page Status: [About]   \n')
    }

    else if (req.url == '/database'){
        res.writeHead(200, {"Content-Type": "text/plain"})
        // "text/html"
        res.end("Welcome to 'Database' page!!")
        console.log('Page Status: [Database]    \n')
    }

    //例外域名：錯誤回報
    else{
        res.writeHead(200, {"Content-Type": "text/plain"})
        // "text/html"
        res.end("ERROR: No such page!!")
        // console.log('Page Status: NULL    \n')
    }
})
        
//監聽：3000
myApp.listen(3000)

//終端機回饋如下字符
console.log('Server is running at http://localhost:3000/    \n')