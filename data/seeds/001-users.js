const bcrypt = require("bcryptjs");

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("users")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("users").insert([
        {
          userId: 1,
          firstName: "David",
          lastName: "Flack",
          email: "a@a.com",
          password: bcrypt.hashSync("password", 8)
        },
        {
          userId: 2,
          firstName: "Spencer",
          lastName: "Meredith",
          email: "spencer@soup.com",
          password: bcrypt.hashSync("password", 8)
        },
        {
          userId: 3,
          firstName: "Jane",
          lastName: "Doe",
          email: "jane@jane.com",
          password: bcrypt.hashSync("password", 8)
        }
      ]);
    });
};
