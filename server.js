// NPM packages used to give server basic functionality
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const particlesJS = require("particle.js");

// Creates "express" server
const app = express();
const PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serves index.html
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./index.html"));
});

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
