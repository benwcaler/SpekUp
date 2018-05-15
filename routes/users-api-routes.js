var db = require("../models");

module.exports = function (app) {

	// GET route for getting all polls for a given user_name 
	app.get("/api/users", function (req, res) {
		db.User.findAll({
		}).then(function (dbUser) {
			res.json(dbUser);
		});
	});

	app.get("/api/users/polls/:user_name", function (req, res) {
		db.User.findAll({
			where: {
				user_name: req.params.user_name
			},
			include: [{
				model: db.Events,
				include: [{
					model: db.Feedback
				}]
			}],
			include: [{
				model: db.Events,
				include: [{
					model: db.Polls,
					include: [{ model: db.Poll_Data }]
				}]
			}],
		}).then(function (dbUser) {
			res.json(dbUser);
		});
	});

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
		}).then(function (dbUser) {
			res.json(dbUser);
		});
	});

};
