/**
 *   @author toto
 *   @createdDate    2017-12-09 09:25 PM
 *   @email  toto6321@qq.com
 */

module.exports.readAll = async ctt => {
  'use strict'
  try {
    const data = await [
      {
        id: 1,
        name: 'toto',
        email: 'toto6321@qq.com',
        pwd: 'xxxxxx'
      }
    ]
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
  try {
    const data = await {api: 'read one'}
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
  try {
    const data = await {api: 'create one'}
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
  try {
    const data = await {api: 'update one'}
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
  try {
    const data = await {api: 'delete one'}
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
