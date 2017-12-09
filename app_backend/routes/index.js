/**
 *   @author toto
 *   @createdDate    2017-12-07 05:38 PM
 *   @email  toto6321@qq.com
 */

'user strict'
const Router = require('koa-router')
const indexController = require('../controllers/index')
const router = new Router()

// index.html
router.get('/', indexController.index)

module.exports = router
