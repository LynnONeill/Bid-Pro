const MongoDB = require("../models/mongo_models");

module.exports = {
    findProducts: function(req, res) {
        console.log("find products api request is firing!")
        MongoDB.SecDoor.find({})
        .then(products => {
            console.log("list of available products below")
            console.log(products)
            res.json(products)
        })
        .catch(err => {
            res.status(404).json(err);
        });
    },
    
    findFeatures: function(req, res) {
        console.log("find products api request is firing!")
        MongoDB.Features.find({})
        .then(features => {
            console.log("list of features below")
            console.log(features)
            res.json(features)
        })
        .catch(err => {
            res.status(404).json(err)
        });
    },

    findProjects: function(req, res) {
        MongoDB.Projects.find({client_id:req.params.id})
        .then(products => {
            console.log("list of available projects below")
            console.log(products)
            res.json(products)
        })
        .catch(err => {
            res.status(404).json(err);
        });
    },
    
    newProducts: function(req, res) {
        console.log("create is firing!")
            MongoDB.Projects.create({client_id:req.params.id})
            .then(stuff => {
                console.log(stuff)
                this.findProducts(req,res)
            })
        .catch(err => {
            res.status(404).json(err);
        });
    }


}