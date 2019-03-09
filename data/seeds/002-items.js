exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("items")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("items").insert([
        {
          userId: 2,
          name: "carrots",
          qty: 20,
          units: "lbs",
          categoryId: 2
        },
        {
          userId: 2,
          name: "chicken breast",
          qty: 15,
          units: "lbs",
          categoryId: 3
        },
        {
          userId: 2,
          name: "ground beef",
          qty: 10,
          units: "lbs",
          categoryId: 3
        },
        {
          userId: 2,
          name: "tilapia",
          qty: 16,
          units: "lbs",
          categoryId: 3
        },
        {
          userId: 2,
          name: "lettuce",
          qty: 5,
          units: "lbs",
          categoryId: 2
        },
        {
          userId: 2,
          name: "bananas",
          qty: 50,
          categoryId: 2
        },
        {
          userId: 2,
          name: "flour",
          qty: 10,
          units: "lbs",
          categoryId: 4
        },
        {
          userId: 2,
          name: "salt",
          qty: 2,
          units: "lbs",
          categoryId: 5
        },
        {
          userId: 2,
          name: "refrigerator",
          qty: 2,
          categoryId: 8
        },
        {
          userId: 2,
          name: "forks",
          qty: 150,
          categoryId: 6
        },
        {
          userId: 2,
          name: "spoons",
          qty: 150,
          categoryId: 6
        },
        {
          userId: 2,
          name: "knives",
          qty: 100,
          categoryId: 6
        },
        {
          userId: 2,
          name: "bowls",
          qty: 200,
          categoryId: 7
        },
        {
          userId: 2,
          name: "plates",
          qty: 200,
          categoryId: 7
        }
      ]);
    });
};
