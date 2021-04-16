var express = require("express");
var cors = require("cors");
var bodyParser = require("body-parser");

const advertDB = require("./model");

var app = express();
// require("./route")(app);
// var app = require("./controller/app");
var urlencodedParser = express.urlencoded( {extended: false} );
var jsonParser = express.json();
app.use(jsonParser);
app.use(urlencodedParser);

app.options("*", cors());
app.use(cors());

app.get("/basic/data",(req,res) => {
    // const companyId = 0; // req.query.companyId;
    // const audienceCount = 0; // req.query.audienceCount;

    const companyId = req.query.companyId;
    const audienceCount = req.query.audienceCount;

    advertDB.getOptions(companyId,audienceCount,(err,result)=> {
        if (err) {
            res.status(500).send(err);
        }
        else {
            res.status(200).send(err);
        }
    });
});

app.post("/basic/insert",(req,res) => {

    var data = req.body;

     advertDB.addOption(data,(err,result) => {
         if (err) {
             if (err.code == "ER_DUP_ENTRY") {
                 res.status(400).send("Message: " + err.sqlMessage);
                //  res.status(400).send("Message");
             }
             else {
                 res.status(500).send("Message: " + err.message);
                //  res.status(500).send("Message");
             }
         }
         else {
             res.status(200).send("Affected Rows:" + result.affectedRows);
         }
     })
});

module.exports = app;