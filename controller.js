var express = require("express");
var cors = require("cors");
var bodyParser = require("body-parser");

const advertDB = require("./model");

var app = express();
// require("./route")(app);
// var app = require("./controller/app");
var urlencodedParser = bodyParser.urlencoded( {extended: false} );
var jsonParser = bodyParser.json();
app.use(jsonParser);
app.use(urlencodedParser);

app.options("*", cors());
app.use(cors());

app.post("/basic/insert",(req,res) => {

    var data = req.body;

     advertDB.addOption(data,(err,result) => {
         if (err) {
             if (err.code == "ER_DUP_ENTRY") {
                 res.status(400).send("Message: " + err.sqlMessage);
             }
             else {
                 res.status(500).send("Message: " + err.sqlMessage);
             }
         }
         else {
             res.status(200).send("Affected Rows: " + result.affectedRows);
         }
     })
});

module.exports = app;