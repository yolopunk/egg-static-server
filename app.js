'use strict'

module.exports = app => {
  const index = app.config.coreMiddleware.indexOf('bodyParser')
  if (index === -1) {
    app.config.coreMiddleware.push('staticServer')
  } else {
    app.config.coreMiddleware.splice(index, 0, 'staticServer')
  }
}
