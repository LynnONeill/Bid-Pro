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
    
    newProjects: function(req, res) {
        console.log("create is firing!")
            MongoDB.ClientProject.create({client_id:req.params.id})
            .then(stuff => {
                console.log(stuff)
                res.json(stuff)
                this.findProjects(req,res)
            })
        .catch(err => {
            res.status(404).json(err);
        });
    },
    
    addProduct: function(req, res) {
        console.log("add product api request is firing!")
        let newProduct = req.body;
        console.log(newProduct);
        
        MongoDB.ClientProduct.create(newProduct)
            
            .then(newProduct => {
                console.log(newProduct);
                res.json(newProduct);
            })
            .catch(err => {
                res.status(400).json(err)
            })
    },

    createPDF: function(req, res) {
        console.log("createPDF is firing!");
        let clientObj = req.body;
        console.log(clientObj);
        
        

        MongoDB.Projects.find({_id: req.params.id})
            then(project => {
                console.log("project details below")
                console.log(project)
            })
            .catch(err => {
                res.status(404).json(err);
            });
        
    
        function createHTML(fileName, data) {
            fs.writeFile(fileName, data, 'utf8', function (err) {
        
                if (err) {
                    return console.log(err);
                }
                console.log("create file Success!")
            })
        }
    
    }

}