/**
 *   @author toto
 *   @createdDate    2017-12-08 05:25 PM
 *   @email  toto6321@qq.com
 */

const mongoose = require('mongoose')
const contactSchema = new mongoose.Schema({
	name: String,
	phone: String,
	address: String,
	uid: Number
})

module.exports = mongoose.model('Contact1', contactSchema)
