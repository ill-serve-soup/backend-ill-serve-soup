const db = require("../../dbconfig.js");

module.exports = {
  getByUserId,
  getItemById,
  getById,
  add,
  deleteItem,
  updateItem
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

function deleteItem(userId, itemId) {
  return (count = db("items")
    .where("userId", userId)
    .where("itemId", itemId)
    .del());
}

async function updateItem(item, userId, itemId) {
  const count = await db("items")
    .where({
      userId: userId,
      itemId: itemId
    })
    .update({
      ...item
    });
  if (count > 0) {
    return (updatedAction = await db("items")
      .where({ itemId: itemId })
      .first());
  } else {
    return false;
  }
}
