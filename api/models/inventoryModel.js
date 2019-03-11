const db = require("../../dbconfig.js");

module.exports = {
  getByUserId,
  getItemById,
  getById,
  add
};

async function getByUserId(userId) {
  const inventory = await db("items as i")
    .select(
      "i.itemId",
      "i.name",
      "i.qty",
      "i.units",
      "i.imageUrl",
      "i.categoryId",
      "i.inStock",
      "i.description"
    )
    .where("userId", userId);
  return inventory;
}

async function getItemById(userId, itemId) {
  const inventory = await db("items as i")
    .select(
      "i.itemId",
      "i.name",
      "i.qty",
      "i.units",
      "i.imageUrl",
      "i.categoryId",
      "i.inStock",
      "i.description"
    )
    .where("userId", userId)
    .where("itemId", itemId);
  return inventory;
}

async function getById(id) {
  return db("items")
    .where({ itemId: id })
    .first();
}

function add(item) {
  return db("items")
    .insert(item)
    .then(ids => {
      return getById(ids[0]);
    });
}
