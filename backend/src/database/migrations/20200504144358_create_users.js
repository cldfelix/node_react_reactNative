
exports.up = function(knex) {
    return knex.schema.createTable('users', function(table) {
        table.string('id').primary();
        table.string('name').notNullable();
        table.string('email').notNullable();
        table.string('password').notNullable();
        table.boolean('active').notNullable();
        table.timestamp('created_at', { useTz: true }).defaultTo(knex.fn.now());
        table.timestamp('updated_at', { useTz: true });
        
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('users');
};
