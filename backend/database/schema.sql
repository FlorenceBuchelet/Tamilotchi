DROP DATABASE tamilotchi;
CREATE DATABASE tamilotchi;
USE tamilotchi;

CREATE TABLE user (
	user_id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
	email VARCHAR(255) NOT NULL,
	hashed_password VARCHAR(255) NOT NULL
);

CREATE TABLE tamilotchi (
	tamilotchi_id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
	user_id INT NOT NULL,
	FOREIGN KEY (user_id) REFERENCES user(user_id),
    name VARCHAR(50) NOT NULL,
    satiety INT NOT NULL DEFAULT '100',
    happiness INT NOT NULL DEFAULT '30',
    health INT NOT NULL DEFAULT '50',
    age INT NOT NULL DEFAULT '0',
    background VARCHAR(255) DEFAULT '/backgrounds/Gen1BG.png',
/* egg, babytchi, kuchitamatchi, kuchipatchi, mametchi*/
    sprite VARCHAR(255),
    isAlive BOOL DEFAULT 1
);

CREATE TABLE collection (
	collection_id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
	user_id INT NOT NULL,
	FOREIGN KEY (user_id) REFERENCES user(user_id),
/* background, portrait, souvenir */
    type VARCHAR(50) NOT NULL,
    src VARCHAR(255) NOT NULL
);
