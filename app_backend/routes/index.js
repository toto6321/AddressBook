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
router.get('/app', indexController.index)
router.get('/app/:htmlFile', indexController.app)
/* router.get('/app/index', indexController.app)
router.get('/app/login', indexController.app)
router.get('/app/signup', indexController.app) */
router.post('/app/login', indexController.login)
router.post('/app/signup', indexController.signup)
router.get('/app/logout', indexController.logout)

module.exports = router
