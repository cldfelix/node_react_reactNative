
exports.up = function(knex) {
    return knex.schema.createTable('products', function(table) {
        table.increments();
        
        table.string('name').notNullable();
        table.decimal('price').notNullable();
        table.string('unit').notNullable();
        table.integer('storage').notNullable();
        table.boolean('active').notNullable();

        table.timestamp('created_at', { useTz: true }).defaultTo(knex.fn.now());
        table.timestamp('updated_at', { useTz: true });
        
        table.string('category_id').notNullable();
        
        table.foreign('category_id').references('id').inTable('categories');
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('products');
};
