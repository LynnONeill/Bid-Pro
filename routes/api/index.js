const router = require("express").Router();
const dbCalls = require("./api");

// Book routes
router.use("/bid", dbCalls);

module.exports = router;
