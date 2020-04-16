const router = require("express").Router();
const db = require ("../../models/sql_models");

router.get ("/client",function(req, res) {
    db.Client.findAll({})
      .then(function(dbPost) {
        res.json(dbPost);
      });

});
module.exports =  router;