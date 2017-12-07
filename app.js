/**
 *   @author toto
 *   @createdDate    2017-12-07 05:34 PM
 *   @email  toto6321@qq.com
 */
'use strict';
const Koa = require('koa');
const router = require('./app_backend/routers/index');

let app = new Koa();

app.use(router);