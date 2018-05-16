var db = require("../models");

module.exports = function (app) {

	// GET route for getting all events 
	app.get("/api/events", function (req, res) {
		db.Events.findAll({
		})
			.then(function (dbEvents) {
				res.json(dbEvents);
			})
			.catch(function (error) {
				console.log("Invalid request");
				res.json(error);
			});
	});

	// GET route for getting all polls for a given event code 
	app.get("/api/events/polls/:event_code", function (req, res) {
		db.Events.findAll({
			where: {
				event_code: req.params.event_code
			},
			include: [{
				model: db.Polls,
				include: [{ model: db.Poll_Data }]
			}]
		})
			.then(function (dbEvents) {
				res.json(dbEvents);
			})
			.catch(function (error) {
				console.log("Invalid request");
				res.json(error);
			});
	});

	// GET route for getting feedback for a given event_code 
	app.get("/api/events/feedback/:event_code", function (req, res) {
		db.Events.findAll({
			where: {
				event_code: req.params.event_code
			},
			include: [{
				model: db.Feedback
			}]
		})
			.then(function (dbEvents) {
				res.json(dbEvents);
			})
			.catch(function (error) {
				console.log("Invalid request");
				res.json(error);
			});
	});

	app.post("/api/events", function (req, res) {
		console.log(req.body);
		db.Events.create({
			event_code: req.body.event_code
			, event_desc: req.body.event_desc
			, UserId: req.body.UserId
		})
			.then(function (dbEvents) {
				res.json(dbEvents);
			})
			.catch(function (error) {
				console.log("Invalid data for insert");
				res.json(error);
			});
	});

	app.put("/api/events/event_id", function (req, res) {
		console.log(req.body);
		db.Events.update(
			req.body,
			{
				where: {
					id: req.body.id
				}

			})
			.then(function (dbEvents) {
				res.json(dbEvents);
			})
			.catch(function (error) {
				console.log("Invalid data for update");
				res.json(error);
			});
	});

	app.delete("/api/events", function (req, res) {
		db.Events.destroy({
			where: {
				id: req.body.id
			}
		}).then(function (dbDelete) {
			res.json(dbDelete);
		})
			.catch(function (error) {
				console.log("Invalid data for delete");
				res.json(error);
			});
	});

};