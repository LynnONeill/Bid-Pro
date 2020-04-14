const db = require("../models/sql_models");

module.exports = {
    // GET route
    getUsers: function(req, res) {
        console.log("getUsers api request is firing!")
        db.users.findAll({})
        .then(users => {
            console.log(users)
            res.json(users)
        })
        .catch(err => {
            res.status(404).json(err);
        });
    },
    // POST route for new user
    addUsers: function(req, res) {
        console.log("addUsers api request is firing!")
        db.users.create({
            email: req.body.email,
            password: req.body.password,
            isadmin: req.body.isadmin
        })
        .then(users => {
            res.json(users)
        })
    },
    // DELETE route for deleting a user
    deleteUsers: function(req,res) {
        console.log('deleteUsers api request is firing')
        db.users.destroy({
            where: {
                id: req.params.id
            }
        })
        .then(users => {
            res.json(users);
        })
    }


}