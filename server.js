var express = require("express");
var bodyParser = require("body-parser");
var app = express();
var PORT = process.env.PORT || 3000;

var db = require("./models");

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

require("./controllers/controller.js")(app)

db.sequelize.sync({ force: true }).then(function () {
  app.listen(PORT, function () {
    console.log("Server listening on port: " + PORT);
  });
});