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

// Mongo Database calls //
router
  .route("/products")
  .get(mongoController.findProducts)

router
  .route("/features")
  .get(mongoController.findFeatures)

// MySQL Database calls //
 router
  .route('/users')
  .get(sequelizeController.getUsers)

router 
  .route('/deleteusers/:id') 
  .delete(sequelizeController.deleteUsers)

router 
  .route('/adduser') 
  .delete(sequelizeController.addUsers)  


module.exports = router;
