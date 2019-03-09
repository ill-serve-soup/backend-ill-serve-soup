const express = require("express");
const config = require("./middleware/config.js");

const server = express();
config(server);

server.get("/", (req, res) => {
  res.status(200).json({ message: "Server is working." });
});

module.exports = server;
