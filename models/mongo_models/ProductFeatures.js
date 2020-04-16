

// Model for security door features/upgrades.  Not for client/order data.

const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const FeaturesSchema = new Schema({

    features: [
        {
            backing: {
                    name: {
                        type: String
                    },
                    size: {
                         type: String
                    },
                    price: {
                        type: Number
                    }
            },
            finish: {
                    type: {
                        type: String
                    },
                    size: {
                        type: String
                    },
                    price: {
                        type: Number
                    }
                },
            hardware: {
                    type: {
                        type: String
                    },
                    finish: {
                        type: String
                    },
                    size: {
                        type: String
                    },
                    price: {
                        type: Number
                    },
            },
            design: {
                    style: {
                        type: String
                    },
                    size: {
                        type: String
                    },
                    price: {
                        type: Number
                    }
            }
        }]
});

const Features = mongoose.model("Features", FeaturesSchema);

module.exports = Features;