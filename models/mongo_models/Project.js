const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ProjectSchema = new Schema({
    
        clientid: {
            type: Number,
        },
        products: [
            {
                type: Schema.Types.ObjectId,
                ref: "ClientProduct"
            }
    ]
});

const Project = mongoose.model("Project", ProjectSchema);

module.exports = Project;