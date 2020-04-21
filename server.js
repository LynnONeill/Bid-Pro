const express = require("express");
const mongoose = require("mongoose");
const sgMail = require("@sendgrid/mail");
require("dotenv").config();

// const genHtml = require("./createHTML.js");
// const fs = require("fs");
// const convertFactory = require("electron-html-to");

const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;
var db = require("./models/sql_models");


// set up sendgrid ////
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const msg = {
  to: process.env.TO_EMAIL,
  from: process.env.FROM_EMAIL,
  subject: 'Testing email with SendGrid',
  text: 'Testing 123',
  html: '<strong>Is this thing working???</strong>',
}


// sgMail
//   .send(msg)
//   .then(() => {}, error => {
//     console.error(error);

//     if (error.response) {
//       console.error(error.response.body)
//     }
//    });




// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(routes);

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/bidpro", {
  useNewUrlParser: true,
  useFindAndModify: false
})


// Start the API server

db.sequelize.sync({ force: true }).then(function () {
  app.listen(PORT, function () {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
  });
});
