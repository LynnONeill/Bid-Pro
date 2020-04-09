const router = require("express").Router();
const dbCalls = require("./api");


// Bid routes
router.use("/", dbCalls);

module.exports = router;
