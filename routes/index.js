const express = require("express");
const app = express();

// TODO: Add other routes here
app.use("/place", require("./place"));
app.use("/getBoard", require("./getBoard"));


app.get("/", (req, res) => {
  res.send("Hello there");
});

module.exports = app;
