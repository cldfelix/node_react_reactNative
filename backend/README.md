/*
  npx knex init
  npx knex migrate:make create_categories
  npx knex migrate:latest
*/


  development: {
    client: 'sqlite',
    connection: {
      filename: './src/database/dev.sqlite'
    },
    migrations: {
      directory: './src/database/migrations'
    },
    useNullAsDefault: true
  },