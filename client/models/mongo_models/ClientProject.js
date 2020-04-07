const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ProjectSchema = new Schema({

/// Need to associate this collection with the clientProduct collection ///
    products: [
        {
            name: {
                type: String
            },
            price: {
                type: Number
            }
        }
    ]
});

const Project = mongoose.model("bidpro", ProjectSchema);

module.exports = Project;