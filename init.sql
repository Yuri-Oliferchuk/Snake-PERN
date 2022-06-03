CREATE TABLE score (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) NOT NULL,
    high_score INTEGER
);

INSERT INTO score (username, high_score) 
VALUES ('admin', 10), 
       ('Yura', 10),
       ('Yura', 10),
       ('Yura', 10),
       ('Yura', 10),
       ('Yura', 10),
       ('Yura', 10),
       ('Yura', 9),
       ('Yura', 20),
       ('Yura', 16),
       ('Yura', 11);