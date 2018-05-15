INSERT INTO spekup_db.users (user_name,createdAt, updatedAT) VALUES ("manju",current_timestamp, current_timestamp);
INSERT INTO spekup_db.users (user_name,createdAt, updatedAT) VALUES ("ben",current_timestamp, current_timestamp);
INSERT INTO spekup_db.users (user_name,createdAt, updatedAT) VALUES ("kai",current_timestamp, current_timestamp);
INSERT INTO spekup_db.users (user_name,createdAt, updatedAT) VALUES ("jerson",current_timestamp, current_timestamp);

INSERT INTO spekup_db.events (event_code, event_desc, UserId,createdAt, updatedAT) VALUES ("A1234", "Project 2", 1,current_timestamp, current_timestamp);

INSERT INTO spekup_db.polls (poll_type, poll_question, EventId,createdAt, updatedAT) VALUES ("single choice", "What is the topic for Project 2?", 1,current_timestamp, current_timestamp);

INSERT INTO spekup_db.poll_data (poll_option, option_count, PollID,createdAt, updatedAT) VALUES ("SpekUP app",10, 1,current_timestamp, current_timestamp);
INSERT INTO spekup_db.poll_data (poll_option, option_count, PollID,createdAt, updatedAT) VALUES ("FPG Starwars",2, 1,current_timestamp, current_timestamp);
INSERT INTO spekup_db.poll_data (poll_option, option_count, PollID,createdAt, updatedAT) VALUES ("Hop Stop",4, 1,current_timestamp, current_timestamp);
INSERT INTO spekup_db.poll_data (poll_option, option_count, PollID,createdAt, updatedAT) VALUES ("Wait Up",0, 1,current_timestamp, current_timestamp);

INSERT INTO spekup_db.feedbacks (feedback_type, feedback_text, EventID,createdAt, updatedAT) VALUES ("START", "Breakfast in the morning",1,current_timestamp, current_timestamp);
INSERT INTO spekup_db.feedbacks (feedback_type, feedback_text, EventID,createdAt, updatedAT) VALUES ("STOP", "Sessions longer than 1 hour",1,current_timestamp, current_timestamp);
INSERT INTO spekup_db.feedbacks (feedback_type, feedback_text, EventID,createdAt, updatedAT) VALUES ("CONTINUE", "PI planning every 6 iterations",1,current_timestamp, current_timestamp);