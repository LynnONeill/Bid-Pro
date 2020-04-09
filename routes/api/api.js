const router = require("express").Router();
const mongoController = require("../../controllers/mongoController.js")

console.log("api route hit")

// Matches with "/api/books"
router.route("/").get(function(req,res){
  res.send("")
})

// Matches with "/api/books/:id"
router.route("/test").get(function(req,res){
  res.send("this is a test")
})

// Mongo Database calls /////
router
  .route("/products")
  .get(mongoController.findProducts)


 




module.exports = router;
