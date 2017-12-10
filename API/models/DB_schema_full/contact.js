/**
 *   @author toto
 *   @createdDate    2017-12-07 05:58 PM
 *   @email  toto6321@qq.com
 */

const mongoose = require('mongoose')
const ObjectId = mongoose.Schema.ObjectId
const Phone = require('./phone')
const Address = require('./address')
const Person = require('./person')

const contactSchema = new mongoose.Schema({
  person: {type: ObjectId, ref: Person, required: true},
  email: String,
  phone: [Phone],
  Address: [Address]
})

module.exports = mongoose.model('Contact', contactSchema)
