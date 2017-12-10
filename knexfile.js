const path = require('path')
const BASE_PATH = path.join(__dirname, 'app_backend', 'db_postgresql')

module.exports = {
  test: {
    client: 'pg',
    connection: 'postgres://postgres:tutianhuan@localhost:5432/AddressBook',
    migrations: {
      directory: path.join(BASE_PATH, 'migrations')
    },
    seeds: {
      directory: path.join(BASE_PATH, 'seeds')
    }
  },

  development: {
    client: 'pg',
    connection: 'postgres://postgres:tutianhuan@localhost:5432/AddressBook',
    migrations: {
      directory: path.join(BASE_PATH, 'migrations')
    },
    seeds: {
      directory: path.join(BASE_PATH, 'seeds')
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'AddressBook',
      user: 'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

}
