const sqlite3 = require("sqlite3").verbose()
//verbose 函數用於將執行模式設置為輸出調用堆棧，
//也就是說，如果程式碼出錯， 將會定位到具體的程式碼執行函數，
//而不僅僅只是提示錯誤信息，方便我們調試程式碼

let sql

//PHASE 1: connect to the database
const db = new sqlite3.Database("./mike.db", sqlite3.OPEN_READWRITE, function (err) {     
    //Database: 初始化資料庫，對象「mike.db」；確定讀寫模式：READWRITE => 可讀可寫
    if(err) {
        return console.error(err.message)
    }

    console.log("database successfully connected!")                 //console.log 顯示內容（形如printf）
})

db.serialize(function(){
    
//PHASE 2: create the table

    db.run(
        'CREATE TABLE users(id INTEGER PRIMARY KEY, property_name, property_SN, property_professor)'
    )

//PHASE 3: drop the table

    db.run("DROP TABLE users")

//PHASE 4: insert data

    sql = "INSERT INTO users (property_name, property_SN, property_professor) VALUES(?,?,?)"
    db.run(
        sql, ['PC Monitor', '3101010-123456567', 'Shih-An, Lee'], (err) => {
        if (err) {
            return console.error(err.message)
        }

        console.log('inserted data: ', this)
    })

    sql = "INSERT INTO users (property_name, property_SN, property_professor) VALUES(?,?,?)"
    db.run(sql, ['iPhone', '3101010-9876543', 'Liu'], (err) => {
        if (err) {
            return console.error(err.message)
        }

        console.log('inserted data:', this)
    })


//PHASE 5: update data

    sql = 'UPDATE users SET property_name = ? WHERE id = ?'
    db.run(sql, ['NUC', 2], (err) =>{
        if (err) {
            return console.error(err.message)
        }

        console.log('updated data: ',this)
    })

//PHASE 6: detele data

    sql = "DELETE FROM users WHERE id = ?"
    db.run(sql, [1], (err) =>{
        if (err) {
            return console.error(err.message)
        }

        console.log("deleted data: ",this)
    })

//PHASE 7: querying from the database

    sql = "SELECT * FROM users"

    db.all(sql, [], (err, rows) => {
        if (err) {
            return console.error('find error: ', err.message)
        }

        rows.forEach((row) => {
            console.log("found: ", row)
        })
    })
})

//ENDING PHASE: close the databse

db.close(err=> {
    if (err) {
        return console.error(err.message)
    }
})