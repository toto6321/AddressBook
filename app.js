/**
 *   @author toto
 *   @createdDate    2017-12-07 05:34 PM
 *   @email  toto6321@qq.com
 */
'use strict'
const Koa = require('koa')
let app = new Koa()

const koaBodyParser = require('koa-bodyparser')
app.use(koaBodyParser())

const router = require('./app_backend/routes/index')
const apiRouter = require('./API/routes/routes')

app.use(router.routes())
app.use(apiRouter.routes())

// import database (mongodb for contact) configuration
require('./app_backend/config/db')

// for ejs middleware
const ejs = require('koa-ejs')
const path = require('path')
ejs(app, {
  root: path.join(__dirname, 'app_frontend', 'view'),
  layout: 'template',
  viewExt: 'html',
  cache: false,
  debug: false
})

const port = process.env.PORT || 3002
const server = app.listen(port, () => {
  console.log(`server is listening on ${port}`)
})

module.exports = server
