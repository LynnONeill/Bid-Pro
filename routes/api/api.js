const router = require("express").Router();
const mongoController = require("../../controllers/mongoController.js")
const sequelizeController = require('../../controllers/sequelizeController.js'); 

console.log("api route hit")


router.route("/").get(function(req,res){
  res.send("")
})

router.route("/test").get(function(req,res){
  res.send("this is a test")
})

// SQL database calls


// Mongo Database calls /////

//api call to pull all base products
router
  .route("/products")
  .get(mongoController.findProducts)

//api call to pull all available features///
router
  .route("/features")
  .get(mongoController.findFeatures)

// MySQL Database calls //
 router
  .route('/users')
  .get(sequelizeController.getUsers)
 //api call to create a new project 
router
  .route("/project")
  .post(mongoController.createProject)

//api call to add new product quote to existing project
router
  .route("/addProduct/:projectID")
  .post(mongoController.addProduct)


router 
  .route('/deleteusers/:id') 
  .delete(sequelizeController.deleteUsers)

router 
  .route('/addusers') 
  .post(sequelizeController.addUsers)  

  router
   .route('/addClient')
   .post(sequelizeController.addClient)


module.exports = router;
