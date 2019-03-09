exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("categories")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("categories").insert([
        { category: "fruits" },
        { category: "vegetables" },
        { category: "meats" },
        { category: "grains" },
        { category: "spices" },
        { category: "utensils" },
        { category: "dishware" },
        { category: "appliances" }
      ]);
    });
};
