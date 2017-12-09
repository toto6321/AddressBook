/**
 *   @author toto
 *   @createdDate    2017-12-08 04:37 PM
 *   @email  toto6321@qq.com
 */

const mongoose = require('mongoose')

const nameSchema = new mongoose.Schema({
  firstname: String,
  middlename: String,
  lastname: String,
  nickname: String
})

module.exports = mongoose.model('Name', nameSchema)
