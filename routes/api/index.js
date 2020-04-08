const router = require("express").Router();
const dbCalls = require("./api");


// Bid routes
router.use("/bid", dbCalls);

module.exports = router;
