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
    }


}