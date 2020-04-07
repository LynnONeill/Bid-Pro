///  This is the model that will be used to compile all of the information for a given product order

const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ClientProductSchema = new Schema({

    product: 
        {
            // Id will need to link to project collection as foreign key
            // This field will be for build type: single/double/french security door
            build: 
              {
                type: String,
                price: Number
              },
            design:
              {
                type: String,
                price: Number
              },
        
            features: [
              {
                type: String,
                backing: String,
                price: Number
              },
              {
                type: String,
                finish: String,
                price: Number
              },
              {
                type: String,
                hardware: String,
                price: Number
                }
            ],
            total: {
                type: Number
            },
        }
    });

const ClientProduct = mongoose.model("bidpro", ClientProductSchema);

module.exports = ClientProduct;