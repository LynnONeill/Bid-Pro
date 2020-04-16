const express = require("express");
const mongoose = require("mongoose");

const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;
var db = require("./models/sql_models");


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

db.sequelize.sync({ force: false }).then(function () {
  app.listen(PORT, function () {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
  });
});
