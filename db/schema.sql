-- initialize the Database

    DROP DATABASE IF EXISTS Spek_db;
    CREATE DATABASE Spek_db;

    USE Spek_db;

-- user creates events, which will have polls, which will receive feedback.  
-- will cascade
    /* Create a table for all your star wars characters */
    CREATE TABLE users (
        user_id INT( 11 ) AUTO_INCREMENT NOT NULL,
        user_name VARCHAR( 255) NOT NULL,
        PRIMARY KEY ( user_id ) 
-- users have multiple events
    );


    CREATE TABLE events (
        event_id INT (11) AUTO_INCREMENT NOT NULL,
        event_code VARCHAR (5) NOT NULL,
        admin_user_id INT (11) NOT NULL,
        PRIMARY KEY ( event_id ),
        user_id INT (11)  
        -- foreign key users.user_name
        -- events have multiple polls

    );

    CREATE TABLE polls (
        poll_id INT(11) AUTO_INCREMENT NOT NULL,
        poll_type VARCHAR (250),
        -- default to active = 1
        active_inactive BOOLEAN DEFAULT 1 NOT NULL,
        PRIMARY KEY (poll_id),
        event_id INT (11)
        -- foreign key events.events_id
    );

    CREATE TABLE feedback (
        feedback_type VARCHAR (255),
        feedback_text VARCHAR (255),
        event_id INT NOT NULL AUTO_INCREMENT,
        PRIMARY KEY (event_id),
        poll_id INT (11)
        -- foreign key events.event_id
        -- each event has one or zero feedback
    );

    
