const router = require("express").Router();
const mongoController = require("../../controllers/mongoController.js")

console.log("api route hit")


router.route("/").get(function(req,res){
  res.send("")
})


router.route("/test").get(function(req,res){
  res.send("this is a test")
})

// SQL database calls

router
  .route("/users")
  .get()

// Mongo Database calls /////

//api call to pull all base products
router
  .route("/products")
  .get(mongoController.findProducts)

//api call to pull all available features///
router
  .route("/features")
  .get(mongoController.findFeatures)

 //api call to create a new project 
router
  .route("/project")
  .post(mongoController.createProject)

//api call to add new product quote to existing project
router
  .route("/addProduct/:projectID")
  .post(mongoController.addProduct)


 




module.exports = router;
