
const webpackBaseConfig = require('./base-config')
const { merge } = require('webpack-merge')

module.exports = merge(webpackBaseConfig, {
  mode: 'production',
  output: {
    filename: 'my-lib.js',
  },
})