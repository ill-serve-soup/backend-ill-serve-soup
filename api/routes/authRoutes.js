const express = require("express");
const bcrypt = require("bcryptjs");
const router = express.Router();

const {
  authenticate,
  generateToken
} = require("../middleware/authentication.js");
const UserFuncs = require("../models/usersModel.js");

router.post("/register", async (req, res) => {
  const user = req.body;
  if (!user.firstName || !user.lastName || !user.email || !user.password) {
    return res.status(400).json({
      success: false,
      message:
        "New users must include a firstName, lastName, email, and password."
    });
  }
  const hashPass = bcrypt.hashSync(user.password, 8);
  user.password = hashPass;

  try {
    const newUser = await UserFuncs.add(user);

    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.post("/login", async (req, res) => {
  let { email, password } = req.body;
  try {
    const user = await UserFuncs.findBy({ email });
    if (user && bcrypt.compareSync(password, user.password)) {
      const token = generateToken(user);
      res.status(200).json({
        message: `Welcome, ${user.firstName}!`,
        userId: user.userId,
        token
      });
    } else {
      res.status(401).json({ success: false, message: "Invalid credentials." });
    }
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get("/", authenticate, async (req, res) => {
  const users = await UserFuncs.getAll();
  try {
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json(error);
  }
});
module.exports = router;
