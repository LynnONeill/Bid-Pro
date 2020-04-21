const db = require("../models/sql_models");

module.exports = {
    
    // GET route for retrieving all users
    getUsers: function(req, res) {
        db.User.findAll({})
        .then(users => {
            res.json(users)
        })
        .catch(err => {
            res.status(404).json(err);
        });
    },

    // POST route for new user
    addUsers: function(req, res) {
        console.log("addUsers api request is firing!")
        console.log(req)
        db.User.create({
            email: req.body.email,
            password: req.body.password,
            isadmin: req.body.isadmin
        })
        .then(users => {
            return res.json(users)
        })
    },

    // Post route for adding client
    addClient: function(req,res) {
        console.log("add clients reques is working")
        console.log(req)
        db.Client.create({
            name: req.body.name,
            businessName: req.body.businessName,
            phoneNumber: req.body.phoneNumber,
            email: req.body.email,
            address: req.body.address,
            addressTwo: req.body.addressTwo,
            city: req.body.city,
            state: req.body.state,
            zip: req.body.zip,
            notes: req.body.notes,
            password: req.body.password

        })
        .then(client => {
            return res.json(client)
        })
    },

    // POST route for authenticating login
    valUsers: function(req,res) {
        console.log('valUsers api request is firing')
        console.log(req)
        db.User.findOne({
            email:   req.body.email, 
            password: req.body.password
        })
        .then(users => {
            res.json(users)
        })
        .catch(err => {
            res.status(404).json(err);
        });
    },

    // DELETE route for deleting a user
    deleteUsers: function(req,res) {
        db.User.destroy({
            where: {
                id: req.params.id
            }
        })
        .then(deleteUsers => {
            res.json(deleteUsers);
        })
    }


}