/**
 *   @author toto
 *   @createdDate    2017-12-07 05:45 PM
 *   @email  toto6321@qq.com
 */

const Router = require('koa-router');
const router = new Router();
router.get('/', async ctx => {
	"use strict";
	ctx.body = {
		msg: 'get /'
	}
})
