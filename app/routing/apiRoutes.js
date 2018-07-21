var friendsData = require("../data/friends");

var bodyParser = require('body-parser');
var express = require("express");
var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

module.exports = function(app) {

  app.get("/api/friends", function(req, res) {
    res.json(friendsData);
  });
};

  app.post("/api/friends", function(req, res) {
    console.log("Log of data being pushed to friendsData: " + req.body);
    friendsData.push(req.body);
    res.json(true);
    if(error){
      console.log(error);
    }
  });