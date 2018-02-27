
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('projects', function (table) {
      table.increments('id').primary();
      table.string('title');
      table.integer('goal');
      table.string('description');
      table.timestamps(true, true);
    }),

    knex.schema.createTable('contributors', function (table) {
      table.increments('id').primary();
      table.string('name');
      table.string('owner');
      table.timestamps(true, true);
    }),
    knex.schema.createTable('projects_contributors', function (table) {
      table.integer('projects_id').unsigned().references('id').inTable('projects');
      table.integer('contributors').unsigned().references('id').inTable('contributors');
    })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('projects'),
    knex.schema.dropTable('contributors'),
    knex.schema.dropTable('projects_contributors')
  ])
};
