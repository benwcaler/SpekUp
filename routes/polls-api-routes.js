var db = require("../models");

module.exports = function (app) {

	// GET route for getting all polls 
	app.get("/api/polls", function (req, res) {
		db.Polls.findAll({
		})
			.then(function (dbPolls) {
				res.json(dbPolls);
			})
			.catch(function (error) {
				console.log("Invalid request");
				res.json(error);
			});
	});

	// GET route for getting poll information for a given pollId 
	app.get("/api/polls/:poll_id", function (req, res) {
		db.Polls.findAll({
			where: {
				id: req.params.poll_id
			},
			include: [{ model: db.Poll_Data }]
		})
			.then(function (dbPolls) {
				res.json(dbPolls);
			})
			.catch(function (error) {
				console.log("Invalid request");
				res.json(error);
			});
	});

	app.post("/api/polls", function (req, res) {
		console.log(req.body);
		db.Polls.create({
			poll_type: "single choice"
			, poll_question: req.body.poll_question
			, EventId: req.body.EventId
		})
			.then(function (dbPolls) {
				res.json(dbPolls);
			})
			.catch(function (error) {
				console.log("Invalid data for insert");
				res.json(error);
			});
	});

	app.put("/api/polls/polls_id", function (req, res) {
		console.log(req.body);
		db.Polls.update(
			req.body, 
			{ where: {
					id: req.body.id
				}

			})
			.then(function (dbPolls) {
				res.json(dbPolls);
			})
			.catch(function (error) {
				console.log("Invalid data for update");
				res.json(error);
			});
	});

	app.delete("/api/polls", function (req, res) {
		db.Polls.destroy({
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