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

async function insertClients(){
    const createdClients = Clients.map( Client => db.Client.create(Client))
    await Promise.all(createdClients)
};
insertClients()


// user database 
const User = [
    {
        email: 'jhamilton72.jh@gmail.com',
        password: 'james',
        isadmin: true,
        createdAt: new Date(),
        updatedAt: new Date(),       
    },
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
    const createdUsers = User.map( Users => db.User.create(Users))
    await Promise.all(createdUsers)
};
insertUsers();