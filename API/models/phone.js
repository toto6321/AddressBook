/**
 *   @author toto
 *   @createdDate    2017-12-08 04:44 PM
 *   @email  toto6321@qq.com
 */
const mongoose = require('mongoose')

const phoneSchema = new mongoose.Schema({
  code: Number,
  number: {type: String, required: true}
})

module.exports = mongoose.model('Phone', phoneSchema)
