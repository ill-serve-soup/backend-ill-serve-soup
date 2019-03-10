const db = require("../../dbconfig.js");

module.exports = {
  getAll,
  findById,
  add
};

function getAll() {
  return db("users");
}
function findById(id) {
  return db("users")
    .where({ userId: id })
    .first();
}

async function add(user) {
  const [id] = await db("users").insert(user);

  return findById(id);
}
