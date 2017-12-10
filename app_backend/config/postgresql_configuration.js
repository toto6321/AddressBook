/**
 *   @author toto
 *   @createdDate    2017-12-10 03:57 PM
 *   @email  toto6321@qq.com
 */

const environment = process.env.NODE_ENV || 'development'
const config = require('../../knexfile')[environment]

module.exports = require('knex')(config)
