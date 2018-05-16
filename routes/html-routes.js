// Dependencies
// =============================================================
var path = require("path");
var express = require("express");
var app = express();
var bodyParser = require("body-parser");

// Routes
// =============================================================
module.exports = function (app) {

  // add html routes
  app.get("/home", function (req, res) {
    res.render("home");
  });

  // login page
  app.get("/login", function (req, res) {
    res.render("login");
  });

  // signup page
  app.get("/signup", function (req, res) {
    res.render("signup");
  });

  // results page
  app.get("/results", function (req, res) {
    res.sendFile(path.join(__dirname, "../views/results.html"));
  });
  
  app.get("/userhome", function (req, res) {
    console.log(res);
    res.render("userhome", {user: res})
  });
  
  // app.get("*", function (req, res) {
  //   res.sendFile(path.join(__dirname, "../views/home.html"));
  // });

  app.get("/", function (req, res) {
    res.render("home");
  });
};