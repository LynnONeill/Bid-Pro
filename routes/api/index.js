const router = require("express").Router();
const apiRoutes = require("./api");
const clientRoute = require ("../api/clientroute");
const authRoute = require('../api/auth-routes');
const htmlRoutes = require('../api/html-routes'); 

// Bid routes
router.use("/", apiRoutes);
router.use("/",clientRoute);
router.use('/', authRoute);
router.use('/', htmlRoutes);

module.exports = router; 
