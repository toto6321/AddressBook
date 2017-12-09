/**
 *   @author toto
 *   @createdDate    2017-12-08 05:22 PM
 *   @email  toto6321@qq.com
 */

const Router = require('koa-router')
const apiRouter = new Router()
const contactController = require('../controllers/contact')

apiRouter.get('/api/contact', contactController.readAll)
apiRouter.post('/api/contact', contactController.createOne)
apiRouter.put('/api/contact/:cid', contactController.updateOne)
apiRouter.delete('/api/contact/:cid', contactController.deleteOne)

module.exports = apiRouter
