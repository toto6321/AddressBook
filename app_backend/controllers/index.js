/**
 *   @author toto
 *   @createdDate    2017-12-07 05:38 PM
 *   @email  toto6321@qq.com
 */

module.exports.index = async ctt => {
  'use strict'
  /* ctx.body = {
		 msg: 'get / from controller'
	 }
	*/
  await ctt.redirect('/app/index')
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
  ctt.redirect('/app/home', {
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

module.exports.logout = async ctt => {
  'use strict'
  ctt.redirect('/app/index')
}
