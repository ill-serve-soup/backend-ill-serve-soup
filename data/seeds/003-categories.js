exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("categories")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("categories").insert([
        { category: "fruits" }, // 1
        { category: "vegetables" }, // 2
        { category: "meats" }, // 3
        { category: "grains" }, // 4
        { category: "spices" }, // 5
        { category: "utensils" }, // 6
        { category: "dishware" }, // 7
        { category: "appliances" } // 8
      ]);
    });
};
