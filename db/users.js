const bookshelf = require('./bookshelf');

const User = bookshelf.Model.extend({ tableName: 'users' });

module.exports = {
  // createUser: user =>
  readUser: id => new User({ 'id': id }).fetch().then(data => data.attributes),
  // updateUser: user =>
  // deleteUser: id =>
  listUsers: () => User.fetchAll().then(data => data.models)
}
