/**
 *   @author toto
 *   @createdDate    2017-12-08 05:22 PM
 *   @email  toto6321@qq.com
 */

const Router = require('koa-router')
const apiRouter = new Router()
const contactController = require('../controllers/contact')
const userController = require('../controllers/user')

apiRouter.get('/api/contacts', contactController.readAll)
apiRouter.get('/api/contact/:cid', contactController.readOne)
apiRouter.post('/api/contact', contactController.createOne)
apiRouter.put('/api/contact/:cid', contactController.updateOne)
apiRouter.delete('/api/contact/:cid', contactController.deleteOne)

apiRouter.get('/api/users', userController.readAll)
apiRouter.get('/api/user/:uid', userController.readOne)
apiRouter.post('/api/user', userController.createOne)
apiRouter.put('/api/user/:uid', userController.updateOne)
apiRouter.delete('/api/user/:uid', userController.deleteOne)

module.exports = apiRouter
