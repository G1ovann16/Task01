CREATE DATABASE IF NO EXISTS jokes;
USE jokes;

CREATE TABLE joke(
    id INT NOT NULL,
    type VARCHAR(14),
    setup VARCHAR (60),
    punchline VARCHAR(100),
    PRIMARY KEY (id)

);

DESCRIBE joke

INSERT INTO joke VALUES
(1, "general", "What did the fish say when it hit the wall?", "Dam"),
(2, "general", "What did the fish say when it hit the wall?", "Dam"),
(3, "general", "What did the fish say when it hit the wall?", "Dam"),
(4, "general", "What did the fish say when it hit the wall?", "Dam")
