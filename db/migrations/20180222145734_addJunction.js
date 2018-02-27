
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('projects_contributors', function (table) {
      table.integer('projects_id').unsigned().references('id').inTable('projects');
      table.integer('contributors_id').unsigned().references('id').inTable('contributors');
    })
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('projects_contributors')
  ]);
};
