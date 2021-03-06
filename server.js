// Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
var app = express();
var PORT;

var portNum = parseInt(process.argv[2]);

if(Number.isInteger(portNum)) {
  PORT = process.env.PORT || portNum;
}else if(Number.isInteger(portNum) === false){
  PORT = process.env.PORT || 3000;
}

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.text());

// Router
require(path.join(__dirname, "./app/routing/apiRoutes"))(app);
require(path.join(__dirname, "./app/routing/htmlRoutes"))(app);

// Listener
app.listen(PORT, function() {
  console.log("Friend Finder App listening on PORT: " + PORT);
  console.log("App active at http://localhost:" + PORT);
});