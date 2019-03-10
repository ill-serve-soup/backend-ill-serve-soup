const express = require("express");
const bcrypt = require("bcryptjs");
const router = express.Router();
const db = require("../../dbconfig.js");

const AuthFuncs = require("../middleware/authentication.js");
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
  let hashPass = bcrypt.hashSync(user.password, 8);
  user.password = hashPass;

  try {
    const newUser = await UserFuncs.add(user);

    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json(error);
  }
});

// router.get("/", async (req, res) => {
//   const users = await UserFuncs.getAll();
//   try {
//     res.status(200).json(users);
//   } catch (error) {
//     res.status(500).json(error);
//   }
// });
module.exports = router;
