// Requiring our models and passport as we've configured it
const router = require('express').Router();
const express = require('express');
var db = require("../../models/sql_models");
var passport = require("../../config/passport");



  // Using the passport.authenticate middleware with our local strategy.
  // If the user has valid login credentials, send them to the members page.
  // Otherwise the user will be sent an error
  router.post("/login", passport.authenticate('local'), function(req, res) {
    // Sending back a password, even a hashed password, isn't a good idea
    console.log(req.body.email)
    res.json({
      email: req.body.email,
      id: req.body.id
    });
  });

  // Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
  // how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
  // otherwise send back an error

  // not using
  // router.post("/signup", function(req, res) {
  //   db.User.create({
  //     email: req.body.email,
  //     password: req.body.password
  //   })
  //     .then(function() {
  //       res.redirect(307, "/login");
  //     })
  //     .catch(function(err) {
  //       res.status(401).json(err);
  //     });
  // });

  // Route for logging user out
  router.get("/logout", function(req, res) {
    req.logout();
    res.redirect("/");
  });

  // Route for getting some data about our user to be used client side
  router.get("/user_data", function(req, res) {
    if (!req.user) {
      // The user is not logged in, send back an empty object
      res.json({});
    } else {
      // Otherwise send back the user's email and id
      // Sending back a password, even a hashed password, isn't a good idea
      res.json({
        email: req.user.email,
        id: req.user.id
      });
    }
  });

module.exports = router;