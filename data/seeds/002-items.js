exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("items")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("items").insert([
        {
          userId: 23,
          name: "carrots",
          qty: 20,
          units: "lbs",
          categoryId: 2,
          description: "Lorem ipsum dolor sit amet"
        },
        {
          userId: 23,
          name: "chicken breast",
          qty: 15,
          units: "lbs",
          categoryId: 3,
          description: "Lorem ipsum dolor sit amet"
        },
        {
          userId: 23,
          name: "ground beef",
          qty: 10,
          units: "lbs",
          categoryId: 3,
          description: "Lorem ipsum dolor sit amet"
        },
        {
          userId: 23,
          name: "tilapia",
          qty: 16,
          units: "lbs",
          categoryId: 3,
          description: "Lorem ipsum dolor sit amet"
        },
        {
          userId: 23,
          name: "lettuce",
          qty: 5,
          units: "lbs",
          categoryId: 2,
          description: "Lorem ipsum dolor sit amet"
        },
        {
          userId: 23,
          name: "bananas",
          qty: 50,
          categoryId: 2,
          description: "Lorem ipsum dolor sit amet"
        },
        {
          userId: 23,
          name: "flour",
          qty: 10,
          units: "lbs",
          categoryId: 4,
          description: "Lorem ipsum dolor sit amet"
        },
        {
          userId: 23,
          name: "salt",
          qty: 2,
          units: "lbs",
          categoryId: 5,
          description: "Lorem ipsum dolor sit amet"
        },
        {
          userId: 23,
          name: "refrigerator",
          qty: 2,
          categoryId: 8,
          description: "Lorem ipsum dolor sit amet"
        },
        {
          userId: 23,
          name: "forks",
          qty: 150,
          categoryId: 6,
          description: "Lorem ipsum dolor sit amet"
        },
        {
          userId: 23,
          name: "spoons",
          qty: 150,
          categoryId: 6,
          description: "Lorem ipsum dolor sit amet"
        },
        {
          userId: 23,
          name: "knives",
          qty: 100,
          categoryId: 6,
          description: "Lorem ipsum dolor sit amet"
        },
        {
          userId: 23,
          name: "bowls",
          qty: 200,
          categoryId: 7,
          description: "Lorem ipsum dolor sit amet"
        },
        {
          userId: 23,
          name: "plates",
          qty: 200,
          categoryId: 7,
          description: "Lorem ipsum dolor sit amet"
        }
      ]);
    });
};
