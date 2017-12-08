/**
 *   @author toto
 *   @createdDate    2017-12-08 03:01 PM
 *   @email  toto6321@qq.com
 */

process.env.NODE_ENV = 'test'
const chai = require('chai')
const should = chai.should()
const chaiHttp = require('chai-http')
chai.use(chaiHttp)

const server = require('../../app')

describe('test index routes', () => {
  'use strict'
  describe('get /', done => {
    chai
      .request(server)
      .get('/')
      .end((err, res) => {
        should.not.exist(err)
        res.status.should.eql(200)
        res.type.should.eql('application/json')
        res.body.msg.should.eql('get /')
        done()
      })
  })
})
