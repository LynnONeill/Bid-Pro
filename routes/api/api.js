const router = require("express").Router();
const mongoController = require("../../controllers/mongoController.js")

console.log("api route hit")


router.route("/").get(function(req,res){
  res.send("")
})


router.route("/test").get(function(req,res){
  res.send("this is a test")
})

// Mongo Database calls /////
router
  .route("/products")
  .get(mongoController.findProducts)

router
  .route("/features")
  .get(mongoController.findFeatures)


 




module.exports = router;
