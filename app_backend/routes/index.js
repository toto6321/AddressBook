/**
 *   @author toto
 *   @createdDate    2017-12-11 8:38 PM
 *   @email  toto6321@qq.com
 */

'user strict'
const Router = require('koa-router')
const indexController = require('../controllers/index')
const router = new Router()

// index.html
router.get('/', indexController.getIndex)
router.get('/app', indexController.getIndex)
// router.get('/app/:htmlFile', indexController.app)
router.get('/app/index', indexController.getIndex)
router.get('/app/login', indexController.getLogin)
router.get('/app/signup', indexController.getSignup)
router.get('/app/:uid/home', indexController.getHome)
router.post('/app/login', indexController.login)
router.post('/app/signup', indexController.signup)
router.get('/app/logout', indexController.logout)

module.exports = router
