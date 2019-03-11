exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("items")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("items").insert([
        {
          userId: 11,
          name: "carrots",
          qty: 20,
          units: "lbs",
          categoryId: 2,
          description: "Lorem ipsum dolor sit amet"
        },
        {
          userId: 11,
          name: "chicken breast",
          qty: 15,
          units: "lbs",
          categoryId: 3,
          description: "Lorem ipsum dolor sit amet"
        },
        {
          userId: 11,
          name: "ground beef",
          qty: 10,
          units: "lbs",
          categoryId: 3,
          description: "Lorem ipsum dolor sit amet"
        },
        {
          userId: 11,
          name: "tilapia",
          qty: 16,
          units: "lbs",
          categoryId: 3,
          description: "Lorem ipsum dolor sit amet"
        },
        {
          userId: 11,
          name: "lettuce",
          qty: 5,
          units: "lbs",
          categoryId: 2,
          description: "Lorem ipsum dolor sit amet"
        },
        {
          userId: 11,
          name: "bananas",
          qty: 50,
          categoryId: 2,
          description: "Lorem ipsum dolor sit amet"
        },
        {
          userId: 11,
          name: "flour",
          qty: 10,
          units: "lbs",
          categoryId: 4,
          description: "Lorem ipsum dolor sit amet"
        },
        {
          userId: 11,
          name: "salt",
          qty: 2,
          units: "lbs",
          categoryId: 5,
          description: "Lorem ipsum dolor sit amet"
        },
        {
          userId: 11,
          name: "refrigerator",
          qty: 2,
          categoryId: 8,
          description: "Lorem ipsum dolor sit amet"
        },
        {
          userId: 11,
          name: "forks",
          qty: 150,
          categoryId: 6,
          description: "Lorem ipsum dolor sit amet"
        },
        {
          userId: 11,
          name: "spoons",
          qty: 150,
          categoryId: 6,
          description: "Lorem ipsum dolor sit amet"
        },
        {
          userId: 11,
          name: "knives",
          qty: 100,
          categoryId: 6,
          description: "Lorem ipsum dolor sit amet"
        },
        {
          userId: 11,
          name: "bowls",
          qty: 200,
          categoryId: 7,
          description: "Lorem ipsum dolor sit amet"
        },
        {
          userId: 11,
          name: "plates",
          qty: 200,
          categoryId: 7,
          description: "Lorem ipsum dolor sit amet"
        }
      ]);
    });
};
