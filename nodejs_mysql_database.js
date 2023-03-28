let mysql = require('mysql');
let con = mysql.createConnection({
	host: "localhost", user: "root", password: ""
});
 
con.connect(function(err) {
	if (err) throw err;
	console.log("Connected!");
        //建立数据库mysrcDB
	con.query("CREATE DATABASE mysrcDB", function (err, result) {
		if (err) throw err;
		console.log("Database created");
	});
        /*关闭连接mysql*/
        con.end();
});