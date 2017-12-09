/**
 *   @author toto
 *   @createdDate    2017-12-08 04:47 PM
 *   @email  toto6321@qq.com
 */

const mongoose = require('mongoose')

const addressSchema = new mongoose.Schema({
  country: String,
  province: String,
  city: String,
  street: String,
  houseNumber: String,
  other: String,
  postalCode: String
})

module.exports = mongoose.model('Address', addressSchema)
