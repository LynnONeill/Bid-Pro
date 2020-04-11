const router = require("express").Router();
const apiRoutes = require("./api");


// Bid routes
router.use("/", apiRoutes);

module.exports = router;
