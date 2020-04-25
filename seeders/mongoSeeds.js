let mongoose = require("mongoose");
let db = require("../models/mongo_models");
require("dotenv").config();

mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useFindAndModify: false
});


let secDoorSeed = [
{
    products: [
    {
        name: "Security Door",
        type: "Single Security Door",
        price: 1350
    }
    ]
},
{
    products: [
    {
        name: "Security Door",
        type: "Double Security Door",
        price: 2700
    },
    ]
},
{
    products: [
    {
        name: "Security Door",
        type: "French Security Door",
        price: 3000
    },
    ]
}
]; 
    

/// Seeds for security door features //////////////////////////////
let featuresSeed = [
    {
        backing: {
            type: "Shade Cloth", 
            size: "Single",
            price: 0
            }
    },
    {
        backing: {
            type: "Shade Cloth", 
            size: "Double",
            price: 0
            }
    },
    {
        backing: {
            type: "Perforated Steel", 
            size: "Single",
            price: 95
            }
    }, 
    {
        backing: {
            type: "Perforated Steel", 
            size: "Double",
            price: 190
            }
    }, 
    {       
        backing: {
            type: "Stainless Steel",
            size: "Single",
            price: 385
        }
    },
    {       
        backing: {
            type: "Stainless Steel",
            size: "Double",
            price: 770
        }
    },
    {
        finish: {
            type: "Powder Coat - Black",
            size: "Single",
            price: 0
        }
    },
    {
        finish: {
            type: "Powder Coat - Textured Brown",
            size: "Single",
            price: 0
        }
    },
    {
        finish: {
            type: "Powder Coat - Copper Bronze Faux",
            size: "Single",
            price: 150
        }
    },
    {
        finish: {
            type: "Powder Coat - Black",
            size: "Double",
            price: 0

        }
    },
    {
        finish: {
            type: "Powder Coat - Textured Brown",
            size: "Double",
            price: 0
        }
    },
    {
        finish: {
            type: "Powder Coat - Copper Bronze Faux",
            size: "Double",
            price: 300
        }
    },
    {
        hardware: {
            type: "Lever and Dead Bolt - Venitian Bronze",
            size: "Single",
            price: 0
        }
    },
    {
        hardware: {
            type: "Lever and Dead Bolt - Antique Brass",
            size: "Double",
            price: 0,
        }
    },
    {
        hardware: {
            type: "Heavy Pull and Dead Bolt",
            size: "Single",
            price: 150
        }
    },
    {
        hardware: {
            type: "Heavy Pull and Dead Bolt",
            size: "Double",
            price: 300
        }
    },
    {
        design: {
            type: "SD100",
            size: "Single",
            price: 0
        }
    },
    {
        design: {
            type: "SD100",
            size: "Double",
            price: 0
        }
    },
    {
        design: {
            type: "SD400",
            size: "Single",
            price: 300
        }
    },
    {
        design: {
            type: "SD400",
            size: "Double",
            price: 600
        }
    },
    {
        design: {
            type: "SD700",
            size: "Single",
            price: 300
        }
    },
    {
        design: {
            type: "SD700",
            size: "Double",
            price: 600

        }
    },
    {
        design: {
            type: "SD900",
            size: "Single",
            price: 300
        }
    },
    {
        design: {
            type: "SD900",
            size: "Double",
            price: 600
        }
    }
];

db.SecDoor.deleteMany({})
    .then(() => db.SecDoor.collection.insertMany(secDoorSeed))

    .then(() => db.Features.deleteMany({})
    .then(() => db.Features.collection.insertMany(featuresSeed)))
   
    .then(data => {
        console.log(data.result.n + " records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });