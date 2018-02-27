exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable("projects", function(table) {
      table.increments("id").primary();
      table.string("title");
      table.float("goal_amount", 9, 2);
      table.float("fund_amount", 9, 2);
      table.string("description");
      table.timestamps(true, true);
    }),

    knex.schema.createTable("contributors", function(table) {
      table.increments("id").primary();
      table.string("name");
      table.string("bio");
      table.timestamps(true, true);
    }),
    knex.schema.createTable("projects_contributors", function(table) {
      table
        .integer("projects_id")
        .unsigned()
        .references("id")
        .inTable("projects");
      table
        .integer("contributors_id")
        .unsigned()
        .references("id")
        .inTable("contributors");
      table.bool("owner");
      table.float("contribution_amount", 9, 2);
      table.timestamps(true, true);
    })
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable("projects"),
    knex.schema.dropTable("contributors"),
    knex.schema.dropTable("projects_contributors")
  ]);
};
