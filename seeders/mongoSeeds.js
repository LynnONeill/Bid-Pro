let mongoose = require("mongoose");
let db = require("../client/models/mongo_models");

mongoose.connect("mongodb://localhost/bidpro", {
    useNewUrlParser: true,
    useFindAndModify: false
});

////  Seeds for base security door pricing //////////////////////////////////
let secDoorSeed = [
    {
        doorBuild: {
            type: "Single Security Door",
            price: 1350
            }
    },
    {
        doorBuild: {
            type: "Double Security Door",
            price: 2700
            }
    },
    {
        doorBuild: {
            type: "French Security Door",
            price: 3000
            }
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
            type: "Powder Coat",
            color: "Black",
            size: "Single",
            price: 0
        }
    },
    {
        finish: {
            type: "Powder Coat",
            color: "Textured Brown",
            size: "Single",
            price: 0
        }
    },
    {
        finish: {
            type: "Powder Coat",
            color: "Copper Bronze Faux",
            size: "Single",
            price: 150
        }
    },
    {
        finish: {
            type: "Powder Coat",
            color: "Black",
            size: "Double",
            price: 0

        }
    },
    {
        finish: {
            type: "Powder Coat",
            color: "Textured Brown",
            size: "Double",
            price: 0
        }
    },
    {
        finish: {
            type: "Powder Coat",
            color: "Copper Bronze Faux",
            size: "Double",
            price: 300
        }
    },
    {
        hardware: {
            type: "Lever and Dead Bolt",
            finish: "Venitian Bronze",
            price: 0
        }
    },
    {
        hardware: {
            type: "Lever and Dead Bolt",
            finish: "Antique Brass",
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
            style: "SD100",
            price: 0
        }
    },
    {
        design: {
            style: "SD400",
            size: "Single",
            price: 300
        }
    },
    {
        design: {
            style: "SD400",
            size: "Double",
            price: 600
        }
    },
    {
        design: {
            style: "SD700",
            size: "Single",
            price: 300
        }
    },
    {
        design: {
            style: "SD700",
            size: "Double",
            price: 600

        }
    },
    {
        design: {
            style: "SD900",
            size: "Single",
            price: 300
        }
    },
    {
        design: {
            sytle: "SD900",
            size: "Double",
            price: 600
        }
    }
];

db.SecDoor.deleteMany({})
    .then(() => db.SecDoor.collection.insertMany(secDoorSeed))
    .then(() => db.Features.collection.insertMany(featuresSeed))
    .then(data => {
        console.log(data.result.n + " records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });
