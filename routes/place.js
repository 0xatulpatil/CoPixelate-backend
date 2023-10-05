const express = require("express");
const app = express();

app.get("/", (req, res) => {
  // TODO: Implement tile placement logic
  res.send("Tile Placed");
});

module.exports = app;
