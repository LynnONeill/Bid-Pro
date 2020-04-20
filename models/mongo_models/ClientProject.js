const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ProjectSchema = new Schema({

/// Need to associate this collection with the clientProduct collection ///
    client_id:{
        type:String
    },

    name:{
        type:String
    }
});

const Project = mongoose.model("bidpro", ProjectSchema);

module.exports = Project;