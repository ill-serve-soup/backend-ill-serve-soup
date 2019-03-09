exports.up = function(knex, Promise) {
  return knex.schema.createTable("users", tbl => {
    tbl.increments("userId");

    tbl.string("firstName", 128).notNullable();
    tbl.string("lastName", 128).notNullable();
    tbl
      .string("email", 128)
      .unique()
      .notNullable();
    tbl.string("password", 128).notNullable();
    tbl
      .string("profilePicUrl", 500)
      .defaultTo("https://via.placeholder.com/500");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("users");
};
