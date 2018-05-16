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

};
