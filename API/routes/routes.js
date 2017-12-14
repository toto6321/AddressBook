/**
 *   @author toto
 *   @createdDate    2017-12-08 05:22 PM
 *   @email  toto6321@qq.com
 */

const Router = require('koa-router')
const apiRouter = new Router()
const contactController = require('../controllers/contact')
const userController = require('../controllers/user')

apiRouter.get('/api/v1/contacts', contactController.readAll)
apiRouter.get('/api/v1/contact/:cid', contactController.readOne)
apiRouter.post('/api/v1/contact', contactController.createOne)
apiRouter.put('/api/v1/contact/:cid', contactController.updateOne)
apiRouter.delete('/api/v1/contact/:cid', contactController.deleteOne)

apiRouter.get('/api/v1/users', userController.readAll)
apiRouter.get('/api/v1/user/:uid', userController.readOne)
apiRouter.post('/api/v1/user', userController.createOne)
apiRouter.put('/api/v1/user/:uid', userController.updateOne)
apiRouter.delete('/api/v1/user/:uid', userController.deleteOne)

apiRouter.post('/api/v1/user/login', userController.login)

apiRouter.get('/api/v1/:uid/contacts', contactController.getAllContactsByUserId)
module.exports = apiRouter
