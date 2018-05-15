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
        res.sendFile(path.join(__dirname, "../views/home.html"));
    });

    // login page
    app.get("/login", function (req, res) {
        res.sendFile(path.join(__dirname, "../views/login.html"));
    });

    // signup page
    app.get("/signup", function (req, res) {
        res.sendFile(path.join(__dirname, "../views/signup.html"));
    });

    // results page
    app.get("/results", function (req, res) {
        res.sendFile(path.join(__dirname, "../views/results.html"));
    });

    app.get("*", function (req, res) {
        res.sendFile(path.join(__dirname, "../views/home.html"));
    });

};