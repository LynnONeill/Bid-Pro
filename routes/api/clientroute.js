const router = require("express").Router();
const db = require ("../../models/sql_models");

router.get ("/client",(req,res)=> {
    res.send ("testing123")
});
module.exports =  router;