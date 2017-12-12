/**
 *   @author toto
 *   @createdDate    2017-12-07 05:38 PM
 *   @email  toto6321@qq.com
 */

const reqOption = require('../config/requestOptionsConfiguration')
const axios = require('axios')

module.exports.getIndex = async ctt => {
  'use strict'
  /* ctx.body = {
		 msg: 'get / from controller'
	 }
	*/
  await ctt.render('index')
}

module.exports.app = async ctt => {
  'use strict'
  let {htmlFile} = ctt.params
  let index = htmlFile.lastIndexOf('.')
  index === -1 ? index = htmlFile.length : index = index
  console.log('index: ', index)
  const htmlFileName = htmlFile.substring(0, index)
  await ctt.render(htmlFileName)
}

module.exports.login = async ctt => {
  'use strict'
  ctt.redirect('/app', {
    name: 'toto',
    gender: 'male',
    email: 'toto@qq.com'
  }
  )
}

module.exports.signup = async ctt => {
  'use strict'
  ctt.redirect('/app/login')
}

module.exports.getHome = async ctt => {
  'use strict'
  const {uid} = ctt.params
  const url = reqOption.url + `/user/${uid}`
  // console.log(requestOption.url)
  try {
    const res = await axios.get(url)
    if (res) {
      ctt.status = parseInt(res.status)
      const user = res.data[0]
      // console.log('user:', user)
      await ctt.render('home', user)
    } else {
      ctt.status = 400
    }
  } catch (e) {
    ctt.throw(400, e)
  }

// ctt.redirect('/app/login', res)
}

module.exports.logout = async ctt => {
  'use strict'
  ctt.redirect('/app/index')
}
