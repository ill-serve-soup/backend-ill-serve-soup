exports.up = function(knex, Promise) {
  return knex.schema.createTable("categories", tbl => {
    tbl.increments("categoryId");
    tbl
      .string("category", 128)
      .notNullable()
      .unique();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("categories");
};
