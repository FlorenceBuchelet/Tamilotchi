DROP DATABASE tamilotchi;
CREATE DATABASE tamilotchi;
USE tamilotchi;

CREATE TABLE user (
	user_id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
	email VARCHAR(255) NOT NULL,
	hashed_password VARCHAR(50) NOT NULL
);

CREATE TABLE tamilotchi (
	tamilotchi_id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
	user_id INT NOT NULL,
	FOREIGN KEY (user_id) REFERENCES user(user_id),
    name VARCHAR(50) NOT NULL,
    satiety INT NOT NULL,
    happiness INT NOT NULL,
    health INT NOT NULL,
    age INT NOT NULL,
    background VARCHAR(255) DEFAULT '/backgrounds/Gen1BG.png',
/* babytchi, kuchitamatchi, kuchipatchi, mametchi*/
    sprite VARCHAR(50) DEFAULT 'babytchi'
);

CREATE TABLE collection (
	collection_id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
	user_id INT NOT NULL,
	FOREIGN KEY (user_id) REFERENCES user(user_id),
/* background, portrait, souvenir */
    type VARCHAR(50) NOT NULL,
    src VARCHAR(255) NOT NULL
);
