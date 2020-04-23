const router = require("express").Router();
const mongoController = require("../../controllers/mongoController.js")
const sequelizeController = require('../../controllers/sequelizeController.js'); 

console.log("api route hit")


router.route("/").get(function (req, res) {
  res.send("")
})

router.route("/test").get(function(req,res){
  res.send("this is a test")
})



// Mongo Database calls /////

//api call to pull all base products
router
  .route("/projects/:id")
  .get(mongoController.findProjects)

router
  .route("/projects")
  .post(mongoController.newProject)

  router
    .route("/projects/:id")
    .delete(mongoController.deleteProject)

  router
    .route("/projectProducts/:id")
    .get(mongoController.projectProducts)

    
  router
  .route("/product/:id")
  .delete(mongoController.deleteProduct)

//api call to pull all available products//
router
  .route("/products")
  .get(mongoController.findProducts)

//api call to pull all available features///
router
  .route("/features")
  .get(mongoController.findFeatures)

//api call to create Quote pdf ///
router
  .route("/pdf")
  .post(mongoController.queryProducts)

  //api call to send pdf //
router
  .route("/sendPDF")
  .post(mongoController.sendPDF)
  //api call to add new product quote to existing project

router
.route("/addProduct")
.post(mongoController.addProduct)





// MySQL Database calls //
 router
  .route('/users')
  .get(sequelizeController.getUsers)


router 
  .route('/deleteusers/:id') 
  .delete(sequelizeController.deleteUsers)

router 
  .route('/addusers') 
  .post(sequelizeController.addUsers)  

  router
   .route('/addClient')
   .post(sequelizeController.addClient)

   router
   .route('/client/:id')
   .delete(sequelizeController.deleteClient)


module.exports = router;
