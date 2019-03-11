exports.up = function(knex, Promise) {
  return knex.schema.createTable("items", tbl => {
    tbl.increments("itemId");
    tbl
      .integer("userId")
      .unsigned()
      .notNullable()
      .references("userId")
      .inTable("users")
      .onDelete("RESTRICT")
      .onUpdate("CASCADE");
    tbl.string("name", 128).notNullable();
    tbl
      .integer("qty")
      .unsigned()
      .notNullable();
    tbl.string("units", 128);
    tbl.string("imageUrl", 500).defaultTo("https://via.placeholder.com/300");
    tbl
      .integer("categoryId")
      .unsigned()
      .notNullable()
      .references("categoryId")
      .inTable("categories")
      .onDelete("RESTRICT")
      .onUpdate("CASCADE");
    tbl.boolean("inStock").defaultTo(true);
    tbl.text("description");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("items");
};
