const db = require("../../dbconfig.js");

module.exports = {
  getByUserId
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
