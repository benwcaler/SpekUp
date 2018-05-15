-- initialize table
INSERT INTO spekup_db.users (user_name) VALUES ("manju");
INSERT INTO spekup_db.users (user_name) VALUES ("ben");
INSERT INTO spekup_db.users (user_name) VALUES ("jerson");
INSERT INTO spekup_db.users (user_name) VALUES ("kai");

INSERT INTO spekup_db.events (event_code, event_desc, UserId) VALUES ("A1234", "Project 2", 1);

INSERT INTO spekup_db.polls (poll_type, poll_question, EventId) VALUES ("single choice", "What is the topic for Project 2?", 1);

INSERT INTO spekup_db.poll_data (poll_option, option_count, PollID) VALUES ("SpekUP app",10, 1);
INSERT INTO spekup_db.poll_data (poll_option, option_count, PollID) VALUES ("FPG Starwars",2, 1);
INSERT INTO spekup_db.poll_data (poll_option, option_count, PollID) VALUES ("Hop Stop",4, 1);
INSERT INTO spekup_db.poll_data (poll_option, option_count, PollID) VALUES ("Wait Up",0, 1);

INSERT INTO spekup_db.feedbacks (feedback_type, feedback_text, EventID) VALUES ("START", "Breakfast in the morning",1);
INSERT INTO spekup_db.feedbacks (feedback_type, feedback_text, EventID) VALUES ("STOP", "Sessions longer than 1 hour",1);
INSERT INTO spekup_db.feedbacks (feedback_type, feedback_text, EventID) VALUES ("CONTINUE", "PI planning every 6 iterations",1);