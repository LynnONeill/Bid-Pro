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
                this.findProjects(req,res)
            })
        .catch(err => {
            res.status(404).json(err);
        });
    },
    
    createProject: function(req, res) {
        console.log("add project api request is firing!")
        let clientID = req.body
        console.log(clientID)
        
        MongoDB.Project.create(clientID)
        .then (project => {
            console.log(project);
            res.json(project);
        })
        .catch(err => {
            res.status(404).json(err)
        })
    },

    addProduct: function(req, res) {
        console.log("add product api request is firing!")
        let newProduct = req.body;
        console.log(newProduct);
        let projectID = req.params.projectID;
        console.log(projectID);
        
        MongoDB.ClientProduct.create(newProduct)
            .then(({_id}) => MongoDB.Project.findOneAndUpdate({}, { $push: {products: _id} }, { new: true}))
            .then(project => {
                console.log(project);
                res.json(project);
            })
            .catch(err => {
                res.status(400).json(err)
            })
    },

}