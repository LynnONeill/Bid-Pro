DROP DATABASE IF EXISTS bid_pro;
CREATE DATABASE bid_pro;

USE bid_pro;


CREATE TABLE users (
    id INT NOT NULL AUTO_INCREMENT,
    fullname VARCHAR(255),
    username VARCHAR(255),
    password VARCHAR(255),
    isadmin BOOLEAN, 
    PRIMARY KEY (id)
);

USE bid_pro;
insert into `users` 
( email, password, isadmin, createdAt, updatedAt ) 
values ("jennanmiles@gmail.com", 'jenna', true, 1970-01-01 00:00:01, 1970-01-01 00:00:01 );


insert into `customers` ( name, businessName, phoneNumber, email, address, addressTwo, city, state, zip, notes, createdAt, updatedAt  ) values ("Joey Tribiani", null, "5555555555", "joey@test.com", NOW(), NOW() );
insert into `customers` ( name, businessName, phoneNumber, email, address, addressTwo, city, state, zip, notes, createdAt, updatedAt  ) values ("Rachel Green", null, "5555555555", "rachel@test.com", NOW(), NOW());
insert into `customers` ( name, businessName, phoneNumber, email, address, addressTwo, city, state, zip, notes, createdAt, updatedAt  ) values ("Ross Geller", null, "5555555555", "ross@test.com", NOW(), NOW());
insert into `customers` ( name, businessName, phoneNumber, email, address, addressTwo, city, state, zip, notes, createdAt, updatedAt  ) values ("Phoebe Buffay", null, "5555555555", "phoebe@test.com", NOW(), NOW());
insert into `customers` ( name, businessName, phoneNumber, email, address, addressTwo, city, state, zip, notes, createdAt, updatedAt  ) values ("Chandler Bing", null, "5555555555", "chandler@test.com", NOW(), NOW());
insert into `customers` ( name, businessName, phoneNumber, email, address, addressTwo, city, state, zip, notes, createdAt, updatedAt  ) values ("Monica Geller", null, "5555555555", "monica@test.com", NOW(), NOW());