'use strict'

const mock = require('egg-mock')

describe('test/static-server.test.js', () => {
  let app
  before(() => {
    app = mock.app({
      baseDir: 'apps/static-server-test'
    })
    return app.ready()
  })

  after(() => app.close())
  afterEach(mock.restore)

  it('should GET world.txt', () => {
    return app.httpRequest()
      .get('/hello/world.txt')
      .expect('world')
      .expect(200)
  })
})
