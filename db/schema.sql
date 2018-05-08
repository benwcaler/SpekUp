-- initialize the Database

    DROP DATABASE IF EXISTS Spek_db;
    CREATE DATABASE Spek_db;

    USE Spek_db;


    /* Create a table for all your star wars characters */
    CREATE TABLE users (
        user_id INT( 11 ) AUTO_INCREMENT NOT NULL,
        user_name VARCHAR( 255) NOT NULL,
        PRIMARY KEY ( user_id ) 

    );


    CREATE TABLE events (
        event_id INT (11) AUTO_INCREMENT NOT NULL,
        event_code VARCHAR (5) NOT NULL,
        admin_user_name VARCHAR (25),
        PRIMARY KEY ( event_id )  
        -- foreign id users.user_name
    );

    CREATE TABLE polls (
        poll_id INT(11) AUTO_INCREMENT NOT NULL,
        poll_type VARCHAR (250),
        active_inactive BOOLEAN DEFAULT 1,
        PRIMARY KEY (poll_id)
        -- foreign id events.events_id


    );
