# egg-static-server

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]
[![David deps][david-image]][david-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/egg-static-server.svg?style=flat-square
[npm-url]: https://npmjs.org/package/egg-static-server
[travis-image]: https://img.shields.io/travis/yolopunk/egg-static-server.svg?style=flat-square
[travis-url]: https://travis-ci.org/yolopunk/egg-static-server
[codecov-image]: https://img.shields.io/codecov/c/github/yolopunk/egg-static-server.svg?style=flat-square
[codecov-url]: https://codecov.io/github/yolopunk/egg-static-server?branch=master
[david-image]: https://img.shields.io/david/yolopunk/egg-static-server.svg?style=flat-square
[david-url]: https://david-dm.org/yolopunk/egg-static-server
[snyk-image]: https://snyk.io/test/npm/egg-static-server/badge.svg?style=flat-square
[snyk-url]: https://snyk.io/test/npm/egg-static-server
[download-image]: https://img.shields.io/npm/dm/egg-static-server.svg?style=flat-square
[download-url]: https://npmjs.org/package/egg-static-server

Static server plugin for egg, base on [koa-static-server](https://github.com/pkoretic/koa-static-server)

## Install

```bash
$ npm i egg-static-server --save
```

## Usage

```js
// {app_root}/config/plugin.js
exports.staticServer = {
  enable: true,
  package: 'egg-static-server',
}
```

## Configuration
egg-static-server client configurations below:
* rootDir {string} directory that is to be served
* rootPath {string} optional rewrite path
* notFoundFile {string} optional default file to serve if requested static is missing
* log {boolean} request access log to console
* maxage Browser cache max-age in milliseconds. defaults to `0` in other envs, `31536000` in prod en
* hidden Allow transfer of hidden files. defaults to `false`
* gzip Try to serve the gzipped version of a file automatically when gzip is supported by a client and if the requested file with .gz extension exists. defaults to `true`.

### single client
```js
// {app_root}/config/config.default.js
exports.staticServer = {
  client: {
    rootPath: 'xxx',
    rootDir: 'xxx'
  },
  default: {
    maxage: 125800
  }
}
```
### multi client
```js
exports.staticServer = {
  clients: {
    foo: {
      rootPath: 'xxx',
      rootDir: 'xxx'
    },
    bar: {
      rootPath: 'xxx',
      rootDir: 'xxx'
    }
  },
  default: {
    maxage: 125800
  }
}
```

see [config/config.default.js](config/config.default.js) for more detail.

## Example

<!-- example here -->

## Questions & Suggestions

Please open an issue [here](https://github.com/yolopunk/egg-static-server/issues).

## License

[MIT](LICENSE)
