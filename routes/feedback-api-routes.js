var db = require("../models");

module.exports = function(app) {
	app.post("/api/feedback", function (req, res) {
		console.log(req.body);
		db.Feedback.create({
			feedback_type: req.body.feedback_type
			, feedback_text: req.body.feedback_text
			, EventId: req.body.EventId
		})
			.then(function (dbFeedback) {
				res.json(dbFeedback);
			})
			.catch(function (error) {
				console.log("Invalid data for insert");
				res.json(error);
			});
	});
};
