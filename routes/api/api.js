const router = require("express").Router();
const SecDoor = require("../models/mongo_models/SecDoor.js");
const Features = require("../models/mongo_models/Features.js");

// Matches with "/api/books"
router.route("/").get(function(req,res){
  res.send("")
})

// Matches with "/api/books/:id"
router.route("/test").get(function(req,res){
  res.send("this is a test")
})

router.route("/api/product"), (req, res) => {
  SecDoor.find({})
  .then(SecDoor => {
    console.log("below should be a list of products")
    console.log(SecDoor)
    res.json(SecDoor)
  })
  .catch(err => {
    res.status(404).json(err);
  });
};



module.exports = router;
