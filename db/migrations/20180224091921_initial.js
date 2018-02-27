
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable("projects_contributors"),
    knex.schema.dropTable("projects"),
    knex.schema.dropTable("contributors")
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable("projects_contributors"),
    knex.schema.dropTable("projects"),
    knex.schema.dropTable("contributors")
  ]);
};
