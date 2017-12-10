exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
          id: 1,
          name: 'name1',
          gender: 1,
          email: 'name1@google.com',
          mobile: '11111111111',
          pwd: '1111111'
        },
        {
          id: 2,
          name: 'name2',
          gender: 0,
          email: 'name2@google.com',
          mobile: '22222222222',
          pwd: '22222222'
        },
        {
          id: 3,
          name: 'name3',
          gender: 1,
          email: 'name3@google.com',
          mobile: '33333333333',
          pwd: '33333333'
        }

      ])
    })
}
