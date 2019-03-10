const bcrypt = require("bcryptjs");

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("users")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("users").insert([
        {
          firstName: "David",
          lastName: "Flack",
          email: "a@a.com",
          password: bcrypt.hashSync("password", 8)
        },
        {
          firstName: "Spencer",
          lastName: "Meredith",
          email: "spencer@soup.com",
          password: bcrypt.hashSync("password", 8)
        },
        {
          firstName: "Jane",
          lastName: "Doe",
          email: "jane@jane.com",
          password: bcrypt.hashSync("password", 8)
        }
      ]);
    });
};
