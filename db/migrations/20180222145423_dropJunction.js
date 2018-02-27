
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('projects_contributors')
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('projects_contributors')
  ])
};
