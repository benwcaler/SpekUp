// Dependencies
// =============================================================
var path = require("path");
var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var db = require("../models");

// Routes
// =============================================================
module.exports = function (app) {

  // add html routes
  app.get("/home", function (req, res) {
    res.render("home");
  });

  // login page
  app.get("/login", function (req, res) {
    res.render("login")
  });

  // signup page
  app.get("/signup", function (req, res) {
    res.render("signup");
  });

  // results page
  app.get("/results", function (req, res) {
    res.sendFile(path.join(__dirname, "../views/results.html"));
  });

  app.get("/userhome/:sessionID", function (req, res) {
    db.User.findAll({
      where: {
        sessionID: req.params.sessionID
      },
      include: [{
        model: db.Events,
        include: [{
          model: db.Polls,
          include: [{ model: db.Poll_Data }]
        }]
      }],
    })
      .then(function (dbUser) {
        console.log("this is the right api")
        console.log(req.body)
        console.log("======================")
        console.log(dbUser)
        console.log("======================")
        res.render("userhome");
      })
      .catch(function (error) {
        console.log("Invalid request");
        res.json(error);
      });
  });

  // app.get("*", function (req, res) {
  //   res.sendFile(path.join(__dirname, "../views/home.html"));
  // });

  app.get("/", function (req, res) {
    res.render("home");
  });
};