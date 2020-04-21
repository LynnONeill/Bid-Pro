const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ProjectSchema = new Schema({

/// Need to associate this collection with the clientProduct collection ///
    client_id:{
        type:String
    },
    name:{
       type:String
    },
    date: { type: Date, default: Date.now },
});

const ClientProject = mongoose.model("ClientProject", ProjectSchema);

module.exports = ClientProject;