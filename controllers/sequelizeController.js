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

    // POST route for authenticating login
    valUsers: function(req,res) {
        console.log('valUsers api request is firing')
        console.log(req)
        db.User.findOne({
            // email:  //req.email...
            // password: //
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