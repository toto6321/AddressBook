/**
 *   @author toto
 *   @createdDate    2017-12-08 04:55 PM
 *   @email  toto6321@qq.com
 */
const mongoose = require('mongoose')
const ObjectId = mongoose.Schema.ObjectId
const Name = require('./name')

const personSchema = new mongoose.Schema({
  name: {type: ObjectId, ref: Name},
  gender: {type: Number, min: 0, max: 2}, // 0 is female and 1 is man, while 2 is reserved for special case
  birthday: Date
  // deathDate: Date,
})

module.exports = mongoose.model('Person', personSchema)
