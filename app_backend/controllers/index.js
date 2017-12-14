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

module.exports.getLogin = async ctt => {
  'use strict'
  try {
    await ctt.render('login')
  } catch (e) {
    ctt.throw(400, e)
  }
}

module.exports.getSignup = async ctt => {
  'use strict'
  try {
    await ctt.render('signup')
  } catch (e) {
    ctt.throw(400, e)
  }
}

/* module.exports.app = async ctt => {
	'use strict'
	let {htmlFile} = ctt.params
	let index = htmlFile.lastIndexOf('.')
	index === -1 ? index = htmlFile.length : index = index
	console.log('index: ', index)
	const htmlFileName = htmlFile.substring(0, index)
	await ctt.render(htmlFileName)
} */

module.exports.login = async ctt => {
  'use strict'
  const login = {
    emailOrMobile: ctt.request.body.emailOrMobile,
    pwd: ctt.request.body.pwd
  }
  console.log('login', login)
  try {
    const url = reqOption.url + '/user/login'
    const res = await axios.post(url, login)
    console.log(res.data)
    if (res.data.length > 0) {
      // ctt.redirect(`/app/${id}/home`)
      const user = res.data[0]
      await ctt.render('home', user)
    } else {
      ctt.redirect('/app/login')
    }
  } catch (e) {
    ctt.throw(400, e)
  }
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
