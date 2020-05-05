const knex = require('knex');
const config = require('../../knexfile');
const path = require('path');
console.log(path.join(__dirname, ''));


const connection = knex(config.development);


module.exports = connection;


