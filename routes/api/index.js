const router = require("express").Router();
const apiRoutes = require("./api");
const clientRoute = require ("../api/clientroute");


// Bid routes
router.use("/", apiRoutes);
router.use("/client",clientRoute);
module.exports = router;
