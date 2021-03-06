//  Dependencies
const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const PORT = process.env.PORT || 3001;

// Init App
const app = express();

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually Heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}


// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/googlesearch",
  {
    useNewUrlParser: true,
    useCreateIndex: true
  }
  );


//Set Port
app.listen(process.env.PORT || 3001, () =>
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`)
);