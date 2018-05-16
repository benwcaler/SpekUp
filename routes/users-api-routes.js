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
	app.get("/api/users/login", function (req, res) {
		db.User.findAll({
			where: {
				user_name: req.query.uname
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
				if (req.query.pwd === dbUser.password) {
					var sessionID = Math.floor((Math.random() * 1000000) + 1);
					db.User.update({
						sessionID: sessionID
					}, {
							where: {
								user_name: req.query.uname
							}
						}).then(function (resp) {
							res.redirect("/userhome", dbUser);
						});
				}
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
			user_name: req.body.user_name,
			password: req.body.user_password,
			email: req.body.user_email
		})
			.then(function (dbUser) {
				console.log(dbUser);
				res.redirect("/userhome", dbUser);
			})
			.catch(function (error) {
				console.log("Invalid data for insert");
				res.json(error);
			});
	});

};
