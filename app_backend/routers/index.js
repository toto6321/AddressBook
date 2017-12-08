/**
 *   @author toto
 *   @createdDate    2017-12-07 05:38 PM
 *   @email  toto6321@qq.com
 */

'user strict'
const Router = require('koa-router')
const indexController = require('../controllers/index')
const router = new Router()

router.get('/', async ctx => {
  'use strict'
  ctx.body = {
    msg: 'get /'
  }
})

module.exports = router
