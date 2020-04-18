const router = require("express").Router();
const mongoController = require("../../controllers/mongoController.js")

console.log("api route hit")


router.route("/").get(function (req, res) {
  res.send("")
})


router.route("/test").get(function (req, res) {
  res.send("this is a test")
})

// SQL database calls

router
  .route("/users")
  .get()

// Mongo Database calls /////
router
  .route("/projects/:id")
  .get(mongoController.findProjects)

router
  .route("/projects/:id")
  .post(mongoController.newProducts)

router
  .route("/products")
  .get(mongoController.findProducts)

router
  .route("/features")
  .get(mongoController.findFeatures)







module.exports = router;
