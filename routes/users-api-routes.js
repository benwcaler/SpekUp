var db = require("../models");

module.exports = function (app) {

	// GET route for getting all users 
	app.get("/api/users", function (req, res) {
		db.User.findAll({
		})
			.then(function (dbUser) {
				res.json(dbUser);
			})
			.catch(function (error) {
				console.log("Invalid request");
				res.json(error);
			});
	});

	// GET route for getting all events and polls for a given user_name 
	app.get("/api/users/polls/:user_name", function (req, res) {
		db.User.findAll({
			where: {
				user_name: req.params.user_name
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
				res.json(dbUser);
			})
			.catch(function (error) {
				console.log("Invalid request");
				res.json(error);
			});

	});

	// GET route for getting all events and feedback for a given user_name 
	app.get("/api/users/feedback/:user_name", function (req, res) {
		db.User.findAll({
			where: {
				user_name: req.params.user_name
			},
			include: [{
				model: db.Events,
				include: [{
					model: db.Feedback
				}]
			}]
		})
			.then(function (dbUser) {
				res.json(dbUser);
			})
			.catch(function (error) {
				console.log("Invalid request");
				res.json(error);
			});
	});

	app.post("/api/users", function (req, res) {
		console.log(req.body);
		db.User.create({
			user_name: req.body.user_name
		})
			.then(function (dbUser) {
				res.json(dbUser);
			})
			.catch(function (error) {
				console.log("Invalid data for insert");
				res.json(error);
			});
	});

};
