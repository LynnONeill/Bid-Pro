// Model for basic price of security door based on size.  Not for client/order data.
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const SecDoorSchema = new Schema({

    doorBuild: [
        {
            type: {
                type: String
            },
            price: {
                type: Number
            }
        }]
});

const SecDoor = mongoose.model("SecDoor", SecDoorSchema, "SecDoor");

module.exports = SecDoor;