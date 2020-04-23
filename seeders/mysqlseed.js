const db = require("../models/sql_models");
const Clients = [
    { name:"Joey Tribiani",
    businessName: null,
     phoneNumber:222,
      email:"jjssssj@email.com",
      address:"ff", 
      addressTwo:null,
       city:"dddd",
        state:"az", 
        zip:85716, 
        notes:null, 
        createdAt:new Date(), 
        updatedAt:new Date(), },
    { name:"Rachel Green",
    businessName: null,
     phoneNumber:444,
      email:"jjddddj@email.com",
      address:"ff", 
      addressTwo:null,
       city:"ffff",
        state:"az", 
        zip:85716, 
        notes:null, 
        createdAt:new Date(), 
        updatedAt:new Date(), },
    { name:"Ross Geller",
    businessName: null,
     phoneNumber:555,
      email:"jjffffj@email.com",
      address:"ff", 
      addressTwo:null,
       city:"tucson",
        state:"az", 
        zip:85716, 
        notes:null, 
        createdAt:new Date(), 
        updatedAt:new Date(), },
    { name:"Phoebe Buffay",
    businessName: null,
     phoneNumber:666,
      email:"jjggggj@email.com",
      address:"ff", 
      addressTwo:null,
       city:"tucson",
        state:"az", 
        zip:85716, 
        notes:null, 
        createdAt:new Date(), 
        updatedAt:new Date(), },
    { name:"Chandler Bing",
    businessName: null,
     phoneNumber:777,
      email:"jjjjhjj@email.com",
      address:"ff", 
      addressTwo:null,
       city:"tucson",
        state:"az", 
        zip:85716, 
        notes:null, 
        createdAt:new Date(), 
        updatedAt:new Date(), },
]
// db.Customer.create({
//     name:"Joey Tribiani",
//      businessName: null,
//       phoneNumber:333,
//        email:"jjj@email.com",
//        address:"ff", 
//        addressTwo:null,
//         city:"tucson",
//          state:"az", 
//          zip:85716, 
//          notes:null, 
//          createdAt:new Date(), 
//          updatedAt:new Date(), 
// });
async function insertClients(){
    const createdClients = Clients.map( Client => db.Client.create(Client))
    await Promise.all(createdClients)
};
insertClients()
// insert into customers ( name, businessName, phoneNumber, email, address, addressTwo, city, state, zip, notes, createdAt, updatedAt  ) values ("Joey Tribiani", null, "5555555555", "joey@test.com", "a", "b", "c", "d", 6, "f", NOW(), NOW() );
// insert into customers ( name, businessName, phoneNumber, email, address, addressTwo, city, state, zip, notes, createdAt, updatedAt  ) values ("Rachel Green", null, "5555555555", "rachel@test.com",  "a", "b", "c", "d", 5, "f", NOW(), NOW());
// insert into customers ( name, businessName, phoneNumber, email, address, addressTwo, city, state, zip, notes, createdAt, updatedAt  ) values ("Ross Geller", null, "5555555555", "ross@test.com",  "a", "b", "c", "d", 4, "f", NOW(), NOW());
// insert into customers ( name, businessName, phoneNumber, email, address, addressTwo, city, state, zip, notes, createdAt, updatedAt  ) values ("Phoebe Buffay", null, "5555555555", "phoebe@test.com",  "a", "b", "c", "d", 3, "f", NOW(), NOW());
// insert into customers ( name, businessName, phoneNumber, email, address, addressTwo, city, state, zip, notes, createdAt, updatedAt  ) values ("Chandler Bing", null, "5555555555", "chandler@test.com",  "a", "b", "c", "d", 2, "f", NOW(), NOW());
// insert into customers ( name, businessName, phoneNumber, email, address, addressTwo, city, state, zip, notes, createdAt, updatedAt  ) values ("Monica Geller", null, "5555555555", "monica@test.com",  "a", "b", "c", "d", 1, "f", NOW(), NOW());

// user database 
const User = [
    {
        email: 'lynnoneilaz@gmail.com',
        password: 'lynn',
        isadmin: true,
        createdAt: new Date(),
        updatedAt: new Date(),       
    },
    {
        email: 'kodypbishop@gmail.com',
        password: 'kody',
        isadmin: true,
        createdAt: new Date(),
        updatedAt: new Date(),         
    },
    {
        email: 'jennanmiles@gmail.com',
        password: 'jenna',
        isadmin: true,
        createdAt: new Date(),
        updatedAt: new Date(),          
    },    
 ]

 async function insertUsers(){
    const createdUsers = Users.map( Users => db.Users.create(Users))
    await Promise.all(createdUsers)
};
insertUsers();