/**
 *   @author toto
 *   @createdDate    2017-12-03 05:22 PM
 *   @email  toto6321@qq.com
 */
let requestOption = {
  url: process.env.NODE_ENV === 'production'
    ? 'http://localhost:3002/api/v1'
    :		'http://localhost:3002/api/v1'
}

module.exports = requestOption
