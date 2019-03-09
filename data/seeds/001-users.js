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
          password: "password"
        },
        {
          firstName: "John",
          lastName: "Doe",
          email: "john@john.com",
          password: "password"
        },
        {
          firstName: "Jane",
          lastName: "Doe",
          email: "jane@jane.com",
          password: "password"
        }
      ]);
    });
};
