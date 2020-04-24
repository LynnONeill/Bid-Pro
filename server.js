const express = require("express");
let session = require('express-session');
const mongoose = require("mongoose");
const sgMail = require("@sendgrid/mail");
require("dotenv").config();
let passport = require('./config/passport');

// const genHtml = require("./createHTML.js");
// const fs = require("fs");
// const convertFactory = require("electron-html-to");

const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;
var db = require("./models/sql_models");



// set up sendgrid ////
// sgMail.setApiKey(process.env.SENDGRID_API_KEY);




// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}


app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

// Add routes, both API and view
app.use(routes);



mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/bidpro", {
  useNewUrlParser: true,
  useFindAndModify: false
})


// Start the API server

db.sequelize.sync({ force: false }).then(function () {
  app.listen(PORT, function () {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
  });
});
