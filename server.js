const express = require("express");
var cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");

var app = require("./controller");
// const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

app.get("/", (req, res) => {
    res.json({ message: "Welcome to bezkoder application." });
});
// require("./route")(app);

// set port, listen for requests
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});