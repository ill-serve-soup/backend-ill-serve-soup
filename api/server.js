const express = require("express");
const config = require("./middleware/config.js");

const server = express();
config(server);

const { authenticate } = require("./middleware/authentication");

const authRouter = require("./routes/authRoutes.js");
const inventoryRouter = require("./routes/inventoryRoutes.js");
const uploadRouter = require("./routes/uploadRoutes.js");
server.get("/", (req, res) => {
  res.status(200).json({ message: "Server is working." });
});

server.use("/auth", authRouter);
server.use("/users", authenticate, inventoryRouter);
server.use("/upload", uploadRouter);
module.exports = server;
