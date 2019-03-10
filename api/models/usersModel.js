const db = require("../../dbconfig.js");

module.exports = {
  getAll,
  findBy,
  findById,
  add
};

function getAll() {
  return db("users");
}

function findBy(parameter) {
  return db("users")
    .where(parameter)
    .first();
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
