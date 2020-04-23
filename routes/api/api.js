const router = require("express").Router();
const mongoController = require("../../controllers/mongoController.js")
const sequelizeController = require('../../controllers/sequelizeController.js'); 


router.route("/").get(function (req, res) {
  res.send("")
})

router.route("/test").get(function(req,res){
  res.send("this is a test")
})

// SQL database calls


// Mongo Database calls /////

//api call to pull all base products
router
  .route("/projects/:id")
  .get(mongoController.findProjects)

router
  .route("/projects/:id")
  .post(mongoController.newProducts)

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


// MySQL Database calls //
// user calls
 router
  .route('/users')
  .get(sequelizeController.getUsers)

router 
  .route('/deleteusers/:id') 
  .delete(sequelizeController.deleteUsers)

router 
  .route('/addusers') 
  .post(sequelizeController.addUsers)   
 

module.exports = router;
