drop database if exists bid_pro;
create database bid_pro;

USE bid_pro;

create table if not exists customers
(
    id integer PRIMARY KEY,
    firstName varchar(45) NOT NULL,
    lastName varchar(45) NOT NULL,
    company varchar(45),
    phoneNumber varchar(12),
    email varchar(45)
);

insert into `customers` (firstName, lastName, company, phoneNumber, email ) values ("Joey", "Tribiani", null, "555-555-5555", "joey@test.com" );
insert into `customers` (firstName, lastName, company, phoneNumber, email ) values ("Rachel", "Green", null, "555-555-5555", "rachel@test.com");
insert into `customers` (firstName, lastName, company, phoneNumber, email ) values ("Ross", "Geller", null, "555-555-5555", "ross@test.com");
insert into `customers` (firstName, lastName, company, phoneNumber, email ) values ("Phoebe", "Buffay", null, "555-555-5555", "phoebe@test.com");
insert into `customers` (firstName, lastName, company, phoneNumber, email ) values ("Chandler", "Bing", null, "555-555-5555", "chandler@test.com");
insert into `customers` (firstName, lastName, company, phoneNumber, email ) values ("Monica", "Geller", null, "555-555-5555", "monica@test.com");

