const express = require("express");
const app = express();

app.get("/", (req, res) => {
  // TODO: Fetch board here
  res.send("Here's your board");
});

module.exports = app;
