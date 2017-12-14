/**
 *   @author toto
 *   @createdDate    2017-12-07 05:45 PM
 *   @email  toto6321@qq.com
 */
const Contact1 = require('../models/contact_simplified')

module.exports.readAll = async ctt => {
  'use strict'
  console.log('readAll')
  try {
    const data = await Contact1.find({})
    // console.log(data)
    if (data) {
      ctt.status = 200
      ctt.body = data
    } else {
      ctt.status = 400
      ctt.body = {msg: 'failed to get contacts'}
    }
  } catch (e) {
    ctt.throw(400, 'error')
  }
}

module.exports.readOne = async ctt => {
  'use strict'
  let {cid} = ctt.params
  // TODO ObjectId filter
  try {
    const result = await Contact1.findById(cid)
    if (result) {
      ctt.status = 200
      ctt.body = result
    }
  } catch (e) {
    ctt.throw(400, e)
  }
}

module.exports.createOne = async ctt => {
  'use strict'
  let {name, phone, address, uid} = ctt.request.body
  // TODO some data format or filter
  const contact1 = {
    name: name,
    phone: phone,
    address: address,
    uid: uid
  }
  console.log(contact1)
  try {
    const result = await Contact1.create(contact1)
    // console.log('result', result)
    if (result) {
      ctt.status = 200
      ctt.body = result
    } else {
      ctt.status = 400
      ctt.body = result
    }
  } catch (e) {
    ctt.throw(400, e)
  }
}

module.exports.updateOne = async ctt => {
  'use strict'
  let {cid} = ctt.params
  console.log('cid:', cid)
  let {name, phone, address} = ctt.request.body
  // TODO some data format or filter
  const contact1 = {
    name: name,
    phone: phone,
    address: address
  }
  // console.log(contact1)
  try {
    const result = await Contact1.findByIdAndUpdate(cid, contact1)
    if (result) {
      ctt.status = 200
      ctt.body = result
    }
  } catch (e) {
    ctt.throw(400, e)
  }
}

module.exports.deleteOne = async ctt => {
  'use strict'
  let {cid} = ctt.params
  // TODO ObjectId filter
  try {
    const result = await Contact1.findByIdAndRemove(cid)
    if (result) {
      ctt.status = 200
      ctt.body = result
    }
  } catch (e) {
    ctt.throw(400, e)
  }
}

module.exports.getAllContactsByUserId = async (ctt) => {
  'use strict'
  const {uid} = ctt.params
  try {
    const result = await Contact1.find({uid: parseInt(uid)})
    ctt.status = 200
    ctt.body = result
  } catch
  (e) {
    ctt.throw(400, e)
  }
}
