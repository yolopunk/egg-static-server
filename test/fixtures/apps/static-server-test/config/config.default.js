'use strict'

const path = require('path')

module.exports = info => {
  const exports = {}

  exports.keys = 'foo'

  exports.staticServer = {
    client: {
      rootPath: '/hello',
      rootDir: path.join(info.baseDir, 'dist')
    }
  }

  return exports
}
