/**
 *   @author toto
 *   @createdDate    2017-12-07 05:38 PM
 *   @email  toto6321@qq.com
 */

'user strict';
const router = require('koa-router');
const index = require('../controllers/index');


router.get('/', index);
