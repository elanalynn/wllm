const environment = process.env.NODE_ENV || 'development'
const config = require('../knexfile')
const knex = require('knex')(config[environment])
const bookshelf = require('bookshelf')(knex);

module.exports = bookshelf
