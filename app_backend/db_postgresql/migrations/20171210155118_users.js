exports.up = function (knex, Promise) {
  return knex.schema.createTable('users', (table) => {
    table.increments()
    table.string('name').notNullable().unique()
    table.integer('gender').notNullable()
    table.string('email').notNullable().unique()
    table.string('mobile').notNullable().unique()
    table.string('pwd').notNullable()
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('users')
}
