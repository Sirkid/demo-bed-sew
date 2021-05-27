var mysql = require("mysql");

var dbConnect = {};

dbConnect.getConnection = function() {
    var conn = mysql.createConnection( 
        // {
        //     host: "localhost",
        //     port: "3306",
        //     user:  "root",
        //     password: "",
        //     database: "jibaboom"
        // }

        // for Heroku testing
        {
            host: "us-cdbr-east-03.cleardb.com",
            port: "3306",
            user:  "bed1234c76391d",
            password: "de3544f4",
            database: "heroku_5966af0962662ce"
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