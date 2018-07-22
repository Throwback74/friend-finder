var path = require("path");

var friends = require("../data/friends.js");

// var bodyParser = require('body-parser');
// var express = require("express");
// var app = express();

// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());

module.exports = function(app) {

  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });


  app.post("/api/friends", function(req, res) {
    var userInput = req.body;
    console.log("Log of data being pushed to friendsData: " + userInput);
    var userScores = userInput.scores;
    // req.body.scores = userScores;
    // console.log(userScores);
    
    // friends.push(userInput);
    
    
    console.log(userScores);
    console.log(friends);
    var match = "";
    var matchedFriend = "";
    var matchedImage = "";
    var diffObj = {
      name: ""  ,
      image: "",
      difference: 0
    };

    var diff = 0;
    var diffArray = [];
    // var matching = function(diffArray){
    for(var i = 0; i < friends.length; i++){
      
    
      for(var j = 0; j < userScores.length; j++){
        diff = Math.abs(parseInt(friends[i].scores[j]) - parseInt(userScores[j]));
        // diff += parseInt(friends[i].scores[j]) - parseInt(userScores[j]);
        // console.log("Pre Math.abs: " + diff);
        // diff = Math.abs(diff);
        console.log("Post Math.abs: " + diff);
        console.log("Testing Math.abs: " + Math.abs(-3));
        console.log("My diff equation: " +Math.abs((parseInt(friends[i].scores[j]) - parseInt(userScores[j]))));
        diffObj.difference = diff;
        diffObj.name = friends[i].name;
        diffObj.image = friends[i].photo;
        userScores[j] = parseInt(userScores[j]);
        
      }
        // diffArray.push(diff);
        diffArray.push({
          name: diffObj.name,
          image: diffObj.image,
          difference: diffObj.difference
        });
        console.log(diffArray);
        req.body.scores = userScores;
        
    }
    console.log(diffArray);
  diffArray.sort(function(a, b){return a.difference - b.difference});
  
  match = diffArray[0];
  matchedFriend = match.name;
  matchedImage = match.image;
  
  friends.push(userInput);


  console.log(userScores);
  console.log(friends);
console.log(diffArray);
    // res.json(userInput + " User's Scores: " + userScores + " Match: " + match + " Match name: " + matchedFriend + " matched Photo: " + matchedImage);
    res.json({
      name: matchedFriend,
      photo: matchedImage, 
      data: match
    });

    
  });
};