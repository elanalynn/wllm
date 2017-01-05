
exports.seed = function(knex) {
  return knex('users').insert([
    {
      first_name: 'Elana',
      last_name: 'Kopelevich',
      email: 'elana@kopelevich.com',
      avatar: '123',
      bio: 'Elana is really cool.',
    },{
      first_name: 'Shad',
      last_name: 'Self',
      email: 'shad@self.com',
      avatar: '123',
      bio: 'Shad is really cool.',
    }
  ]);
};
