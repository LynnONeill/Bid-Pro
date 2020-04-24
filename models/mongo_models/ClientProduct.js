///  This is the model that will be used to compile all of the information for a given product order

const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ClientProductSchema = new Schema({

  project_id: {
    id: String
  },
  product:
  {
    name: String,
    price: Number
  },
  features: [],
  
  total: {
    price: Number
  },
});

const ClientProduct = mongoose.model("ClientProduct", ClientProductSchema);

module.exports = ClientProduct;