
DROP DATABASE IF EXISTS bid_pro;
CREATE DATABASE bid_pro;

USE bid_pro;
SELECT * FROM users;
USE bid_pro;
CREATE TABLE users (
    id INT NOT NULL AUTO_INCREMENT,
    email VARCHAR(255),
    password VARCHAR(255),
    isadmin BOOLEAN, 
    createdAt DATE,
    updatedAt DATE,
    PRIMARY KEY (id)
);

USE bid_pro;
insert into `users` 
( email, password, isadmin, createdAt, updatedAt ) 
values ("lynnoneilaz@gmail.com", 'lynn', true, '1970-01-01 00:00:01', '1970-01-01 00:00:01' );
insert into `users` 
( email, password, isadmin, createdAt, updatedAt ) 
values ("kodypbishop@gmail.com", 'kody', true, '1970-01-01 00:00:01', '1970-01-01 00:00:01' );


insert into `users` 
( email, password, isadmin, createdAt, updatedAt ) 
values ("jennanmiles@gmail.com", 'jenna', true, 1970-01-01 00:00:01, 1970-01-01 00:00:01 );
