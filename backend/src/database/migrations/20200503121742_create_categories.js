
exports.up = function(knex) {
  return knex.schema.createTable('categories', function(table){
    table.increments();
    table.string('name').notNullable();
    table.boolean('active').notNullable();
    table.timestamp('created_at', { useTz: true }).defaultTo(knex.fn.now());
    table.timestamp('updated_at', { useTz: true });

  })
};

exports.down = function(knex) {
    return knex.schema.dropTable('categories');
};
