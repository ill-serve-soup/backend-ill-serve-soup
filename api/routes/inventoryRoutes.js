const express = require("express");
const router = express.Router();

const InventoryFuncs = require("../models/inventoryModel.js");

router.get("/:id/inventory", async (req, res) => {
  const inventory = await InventoryFuncs.getByUserId(req.params.id);
  try {
    res.status(200).json(inventory);
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Error retrieving inventory.", error });
  }
});

module.exports = router;
