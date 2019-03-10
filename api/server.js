const express = require("express");
const config = require("./middleware/config.js");

const server = express();
config(server);

const authRouter = require("./routes/authRoutes.js");

server.get("/", (req, res) => {
  res.status(200).json({ message: "Server is working." });
});

server.use("/auth", authRouter);
module.exports = server;
