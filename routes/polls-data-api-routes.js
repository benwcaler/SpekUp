var db = require("../models");

module.exports = function(app) {
	app.post("/api/polls/choices", function (req, res) {
		console.log(req.body);
		db.Poll_Data.create({
			poll_option: req.body.poll_option
			, PollId: req.body.PollId
		})
			.then(function (dbPoll_Data) {
				res.json(dbPoll_Data);
			})
			.catch(function (error) {
				console.log("Invalid data for insert");
				res.json(error);
			});
	});

	app.put("/api/polls_choices/polls_id", function (req, res) {
		console.log(req.body);
		db.Poll_Data.update(
			req.body, 
			{ where: {
					id: req.body.id
				}

			})
			.then(function (dbPoll_Data) {
				res.json(dbPoll_Data);
			})
			.catch(function (error) {
				console.log("Invalid data for update");
				res.json(error);
			});
	});

	app.put("/api/polls_choices/incrementer", function (req, res) {
		console.log(req.body);
		db.Poll_Data.build(
			{id: req.body.id}, 
			{isNewRecord: false}).increment('option_count')
			.then(function (dbPoll_Data) {
				res.json(dbPoll_Data);
			})
			.catch(function (error) {
				console.log("Invalid data for update");
				res.json(error);
			});
	});
};
