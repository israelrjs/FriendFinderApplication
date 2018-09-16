var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var friends = require("./app/data/friends.js");
// var createNewFriend = require("/Users/israelrojas/Desktop/Friend FInder/app/public/survey.html");

// console.log(newFriend);

var app = express();
var PORT = process.env.PORT || 4540;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, "./app/public")));

require(path.join(__dirname, "./app/routing/apiRoutes"));
require(path.join(__dirname, "./app/routing/htmlRoutes"));

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "app/public/home.html"));
});

app.get("/survey", function(req, res) {
  res.sendFile(path.join(__dirname, "app/public/survey.html"));
});
app.get("/api/friends", function(req, res) {
  return res.json(friends);
});
// app.post("/api/characters", function(req, res) {
//   var newFriend = createNewFriend.newFriend;
//   newFriend.routeName = newFriend.name.replace(/\s+/g, "").toLowerCase();
//   console.log(newFriend);
//   friends.push(newFriend);
//   res.json(newFriend);
// });

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
