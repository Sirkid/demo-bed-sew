var mysql = require("mysql");

var dbConnect = {};

dbConnect.getConnection = function() {
    var conn = mysql.createConnection( 
        {
            host: "127.0.0.1",
            user:  "root",
            password: "",
            database: "jibaboom"
        }
    );
    return conn;
}


// var pool = mysql.createPool({
//     connectionLimit : 100,
//     host     : '85.10.205.173',
//     port     :  3306,
//     user     : "sirkid17",
//     password : "password",
//     database : "sgsewdemo"
// });

module.exports = dbConnect;