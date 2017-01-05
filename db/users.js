const knex = require('./knex')

module.exports = {
  createUser: user => knex('users').then(user => user),
  readUser: id => knex('users').where('id', id).then(user => user),
  updateUser: user => knex('users').where('id', user.id).then(user => user),
  deleteUser: id => knex('users').then(user => user),
  listUsers: () => knex('users').then(users => users)
}
