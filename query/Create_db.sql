CREATE DATABASE expense_db;
CREATE TABLE users(
	id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL UNIQUE,
    password VARCHAR(50) NOT NULL
);

CREATE TABLE wallet (
	wallet_id INT AUTO_INCREMENT,
    user_id INT,
    amount INT,
    created_on DATETIME,
    PRIMARY KEY(wallet_id),
	FOREIGN KEY (user_id) REFERENCES users(id)
);
CREATE TABLE transactions (
	transaction_id INT AUTO_INCREMENT,
    wallet_id INT,
    user_id INT,
    category INT, 
    name VARCHAR(30) NOT NULL, 
    t_amount DECIMAL(9, 2) NOT NULL,
    PRIMARY KEY(transaction_id) ,
    FOREIGN KEY (wallet_id) REFERENCES wallet(wallet_id),
    FOREIGN KEY (user_id) REFERENCES users(id)
);

CREATE TABLE category (
	category_id INT, 
    category_name VARCHAR(30)
);
ALTER TABLE transactions
CHANGE COLUMN `category` `category` INT;

ALTER TABLE transactions
MODIFY COLUMN `category`INT NOT NULL;

ALTER TABLE wallet 
ADD COLUMN `name` VARCHAR(30);

ALTER TABLE wallet
CHANGE COLUMN `name` `name` VARCHAR(30) AFTER wallet_id;

SELECT * FROM expense_db.users;
ALTER TABLE users 
ADD COLUMN `first_name` VARCHAR(50) NOT NULL; 

ALTER TABLE users 
ADD COLUMN `last_name` VARCHAR(50) NOT NULL; 

ALTER TABLE wallet 
CHANGE COLUMN `wallet_id` `wallet_id` INT AUTO_INCREMENT;
UPDATE users 
SET user_name = 'TonyStark' ,
	password = 'TonyRDJ3'
WHERE id = 1;

ALTER TABLE transactions 
ADD COLUMN `time_stamp` DATETIME;
ALTER TABLE transactions 
RENAME COLUMN `time_stamp` TO `t_date`;


ALTER TABLE transactions 
MODIFY COLUMN `time_stamp` DATE;

ALTER TABLE transactions 
ADD COLUMN `status` VARCHAR(10);

ALTER TABLE users 
ADD COLUMN `isWalletActive` BOOLEAN;

ALTER TABLE users 
RENAME COLUMN `is_Wallet` to `isWalletActive`;

ALTER TABLE users 
MODIFY COLUMN `isWalletActive` BOOLEAN DEFAULT 0;

INSERT INTO category(category_id, category_name) 
VALUES (1, 'Expenses'),
		(2, 'Debt'),
        (101, 'Incomes');
ALTER TABLE category
MODIFY COLUMN `category_id` TINYINT PRIMARY KEY;


DROP PROCEDURE IF EXISTS add_user;
DELIMITER $
CREATE PROCEDURE add_user(
	first_name VARCHAR(50),
	last_name VARCHAR(50),
    user_name VARCHAR(50),
    password VARCHAR(50)
)
BEGIN 
	INSERT INTO users (first_name, last_name, user_name, password) values(first_name,last_name, user_name, password);
END$
DELIMITER ;

DELIMITER $
DROP TRIGGER IF EXISTS activate_wallet;
CREATE TRIGGER activate_wallet
	AFTER INSERT ON wallet
    FOR EACH ROW
BEGIN 
	UPDATE users
    SET isWalletActive = 1
    WHERE id = NEW.user_id;
END$
DELIMITER ;


DROP PROCEDURE IF EXISTS initiate_wallet;
DELIMITER $
CREATE PROCEDURE initiate_wallet(
	name VARCHAR(30),
    user_id INT,
    amount DECIMAL(9, 2),
    date DATETIME
)
BEGIN 
	INSERT INTO wallet (name, user_id, amount, created_on) 
				VALUES (name, user_id, amount, date);
END$
DELIMITER ;


DROP PROCEDURE IF EXISTS add_transactions;
DELIMITER $
CREATE PROCEDURE add_transactions(
	user_id INT, 
    wallet_id INT,
    category TINYINT,
	name VARCHAR(30),
    amount DECIMAL(9, 2),
    date DATE,
    status VARCHAR(10)
)
BEGIN 
	INSERT INTO transactions (user_id, wallet_id, category, name, t_amount, t_date, status) 
				VALUES (user_id, wallet_id, 
					(SELECT category_name 
                    FROM category 
                    WHERE category_id = category),
                    name, amount, date, status);
END$
DELIMITER ;

DROP PROCEDURE IF EXISTS get_walletAmount;
DELIMITER $
CREATE PROCEDURE get_walletAmount(
	id INT
)
BEGIN 
	SELECT SUM(t_amount) as total
    FROM transactions
    WHERE user_id = id;
END$
DELIMITER ;

DROP PROCEDURE IF EXISTS remove_wallet;
DELIMITER $
CREATE PROCEDURE remove_wallet(
	id INT
)
BEGIN 
	DELETE FROM transactions
    WHERE user_id = id;
    
    DELETE FROM wallet 
    WHERE user_id = id;
END$
DELIMITER ;



DROP TRIGGER IF EXISTS add_wallet_amount;
DELIMITER $
CREATE TRIGGER add_wallet_amount
	AFTER INSERT ON transactions
    FOR EACH ROW
BEGIN 
	UPDATE wallet
    SET amount = amount + NEW.t_amount
    WHERE user_id = NEW.user_id;
END$
DELIMITER ;


DROP TRIGGER IF EXISTS remove_wallet;
DELIMITER $
CREATE TRIGGER remove_wallet
	BEFORE DELETE ON wallet
    FOR EACH ROW
BEGIN 
	DELETE FROM transactions
    WHERE user_id = OLD.user_id;
END$
DELIMITER ;
SHOW TRIGGERS

