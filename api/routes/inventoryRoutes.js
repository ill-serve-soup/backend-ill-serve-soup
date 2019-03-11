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

router.get("/:userId/inventory/:itemId", async (req, res) => {
  const item = await InventoryFuncs.getItemById(
    req.params.userId,
    req.params.itemId
  );
  if (item.length === 0) {
    return res.status(404).json({
      success: false,
      message: "An item with this id does not exist."
    });
  }
  try {
    res.status(200).json(item);
  } catch (error) {
    res.status(500).json({ success: false, message: "Error retrieving item." });
  }
});
router.post("/:userId/inventory", async (req, res) => {
  if (!req.body.name || !req.body.qty || !req.body.categoryId) {
    return res.status(400).json({
      success: false,
      message: "You new item must include a name, qty, and categoryId.",
      optionalParameters: "units, imageUrl, inStock, description"
    });
  }
  const newItem = await InventoryFuncs.add({
    ...req.body,
    userId: req.params.userId
  });
  try {
    res.status(201).json(newItem);
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Error adding item", error });
  }
});
module.exports = router;
