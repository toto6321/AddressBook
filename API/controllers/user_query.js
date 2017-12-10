/**
 *   @author toto
 *   @createdDate    2017-12-07 05:46 PM
 *   @email  toto6321@qq.com
 */

const knex = require('../../app_backend/config/postgresql_configuration')

const getAll = () => {
  'use strict'
  return knex('users')
    .select('*')
}

const getOne = (uid) => {
  'use strict'
  return knex('users')
    .select('*')
    .where({id: parseInt(uid)})
}

const insertOne = (newUser) => {
  'use strict'
  return knex('users')
    .insert(newUser)
    .returning('*')
}

const updateOne = (uid, newUser) => {
  'use strict'
  return knex('users')
    .update(newUser)
    .where({id: parseInt(uid)})
    .returning('*')
}

const deleteOne = (uid) => {
  'use strict'
  return knex('users')
    .del()
    .where({id: parseInt(uid)})
    .returning('*')
}

module.exports = {
  getAll,
  getOne,
  insertOne,
  updateOne,
  deleteOne
}
