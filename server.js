const express = require("express");
// var cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");

var app = require("./controller");

// const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.json({ message: "Welcome to bezkoder application." });
});
// require("./route")(app);

// set port, listen for requests

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log(`Server is running on port ${ PORT }.`);
});