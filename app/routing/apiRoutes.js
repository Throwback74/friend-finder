var path = require("path");

var friends = require("../data/friends.js");

module.exports = function (app) {

  app.get("/api/friends", function (req, res) {
    res.json(friends);
  });

  app.post("/api/friends", function (req, res) {
    var userInput = req.body;
    var userScores = userInput.scores;
    var userName = userInput.name;

    var rickRoll = `<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?&loop=1&autoplay=1" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>`;

    var match = "";
    var matchedFriend = "";
    var matchedImage = "";
    
    var diffArray = [];

    for (var i = 0; i < friends.length; i++) {
      var diff = 0;
      var diffObj = {
        name: "",
        image: "",
        difference: 0
      };
      for (var j = 0; j < userScores.length; j++) {
        diff = Math.abs(parseInt(friends[i].scores[j]) - parseInt(userScores[j]));
        diffObj.difference += diff;
        diffObj.name = friends[i].name;
        diffObj.image = friends[i].photo;
        userScores[j] = parseInt(userScores[j]);
      }
      diffArray.push({
        name: diffObj.name,
        image: diffObj.image,
        difference: diffObj.difference
      });
      req.body.scores = userScores;
    }
    diffArray.sort(function (a, b) {
      return a.difference - b.difference
    });
    match = diffArray[0];
    matchedFriend = match.name;
    matchedImage = match.image;

    friends.push(userInput);

    console.log(diffArray);
    var travis = userName;
    var userTravis = "Travis Thompson";
    userTravis = userTravis.substring(0, 7);
    userTravis = userTravis.toLowerCase();
    console.log("User Travis " + userTravis);

    if(userName.length > 6) {
      travis = userName.substring(0, 7);
      travis = travis.toLowerCase();
      console.log("Shortening " + travis);
    }else {
      travis.toLowerCase();
    }
    
    
    if(travis == userTravis || userName === "Tanner" || userName === "Travis" || userName === "travis") {
      console.log("RickRoll " + travis);
      res.json({
        name: "Rick Astley",
        photo: "https://media.giphy.com/media/a6OnFHzHgCU1O/giphy.gif",
        song: rickRoll,
        astley: true,
        user: travis
      });
    }else {
    res.json({
      name: matchedFriend,
      photo: matchedImage,
      data: match,
      astley: false,
      user: travis
    });
  }
  });
};