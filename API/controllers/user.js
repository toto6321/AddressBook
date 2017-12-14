/**
 *   @author toto
 *   @createdDate    2017-12-09 09:25 PM
 *   @email  toto6321@qq.com
 */

const query = require('./user_query')

module.exports.readAll = async ctt => {
  'use strict'
  try {
    const data = await query.getAll()
    if (data) {
      ctt.status = 200
      ctt.body = data
    } else {
      ctt.status = 400
      ctt.body = {
        code: 1,
        msg: 'failed to get users'
      }
    }
  } catch (e) {
    ctt.throw(400, e)
  }
}

module.exports.readOne = async ctt => {
  'use strict'
  const {uid} = ctt.params
  try {
    const data = await query.getOne(uid)
    if (data) {
      ctt.status = 200
      ctt.body = data
    } else {
      ctt.status = 400
      ctt.body = {
        code: 2,
        msg: 'failed to get a user'
      }
    }
  } catch (e) {
    ctt.throw(400, e)
  }
}

module.exports.createOne = async ctt => {
  'use strict'
  let {name, gender, email, mobile, pwd} = ctt.request.body
  // todo data filter and format
  const newUser = {
    name: name,
    gender: gender,
    email: email,
    mobile: mobile,
    pwd: pwd
  }
  console.log('newUser:', newUser)
  try {
    const data = await query.insertOne(newUser)
    if (data) {
      ctt.status = 200
      ctt.body = data
    } else {
      ctt.status = 400
      ctt.body = {
        code: 2,
        msg: 'failed to get a user'
      }
    }
  } catch (e) {
    ctt.throw(400, e)
  }
}

module.exports.updateOne = async ctt => {
  'use strict'
  let {uid} = ctt.params
  let {name, gender, email, mobile, pwd} = ctt.request.body
  // todo data filter and format
  const newUser = {
    name: name,
    gender: gender,
    email: email,
    mobile: mobile,
    pwd: pwd
  }
  console.log('updateUser:', newUser)
  try {
    const data = await query.updateOne(uid, newUser)
    if (data) {
      ctt.status = 200
      ctt.body = data
    } else {
      ctt.status = 400
      ctt.body = {
        code: 2,
        msg: 'failed to get a user'
      }
    }
  } catch (e) {
    ctt.throw(400, e)
  }
}

module.exports.deleteOne = async ctt => {
  'use strict'
  let {uid} = ctt.params
  try {
    const data = await query.deleteOne(uid)
    if (data) {
      ctt.status = 200
      ctt.body = data
    } else {
      ctt.status = 400
      ctt.body = {
        code: 2,
        msg: 'failed to get a user'
      }
    }
  } catch (e) {
    ctt.throw(400, e)
  }
}

module.exports.login = async ctt => {
  'use strict'
  const {emailOrMobile, pwd} = ctt.request.body
  try {
    const result = await query.checkLogin(emailOrMobile, pwd)
    ctt.status = 200
    // console.log('result ', result)
    ctt.body = result
  } catch (e) {
    ctt.throw(400, e)
  }
}
