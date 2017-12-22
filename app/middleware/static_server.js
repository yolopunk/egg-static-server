'use strict'

const serve = require('koa-static-server')
const assert = require('assert')

function createServe (config, logger) {
  logger.info('[egg-static-server] starting static serve option:', config)
  return serve(config)
}

module.exports = (options, app) => {
  const logger = app.getLogger('static-server') || app.logger
  const middlewares = []

  assert(!(options.client && options.clients),
    `[egg-static-server] can not set options.client and options.clients both.`)

  if (options.client) {
    let config = Object.assign({}, options.default, options.client)
    middlewares.push(createServe(config, logger))
  }

  if (options.clients) {
    for (const client in options.clients) {
      let config = Object.assign({}, options.default, options.clients[client])
      middlewares.push(createServe(config, logger))
    }
  }

  const compose = require('koa-compose')
  return compose(middlewares)
}
