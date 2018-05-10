// var db = require("../models");
var Chart = require("chart.js");
var charts = require("chartfile.js");

module.exports = function (app) {

  app.get("/", function (req, res) {
        res.render("index", { chart:  })
    });

  // app.post("/api/burgers", function (req, res) {
  //   db.Burger.create({
  //     burger_name: req.body.name
  //   }).then(function (resp) {
  //     res.json(resp);
  //   });
  // });

  // app.put("/api/burgers", function (req, res) {
  //   db.Customer.create({
  //     name: req.body.devourer
  //   }).then(function (resp) {
  //     db.Burger.update({
  //       devoured: req.body.devoured,
  //       CustomerId: resp.dataValues.id
  //     }, {
  //         where: {
  //           burger_name: req.body.name
  //         }
  //       }).then(function (resp2) {
  //         res.status(200).end();
  //       });
  //   });
  // });
}