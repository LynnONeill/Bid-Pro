const router = require("express").Router();

// Matches with "/api/books"
router.route("/").get(function(req,res){
  res.send("")
})

// Matches with "/api/books/:id"
router.route("/test").get(function(req,res){
  res.send("this is a test")
})

module.exports = router;
