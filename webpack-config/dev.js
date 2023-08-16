
const webpackBaseConfig = require('./base-config')
const { merge } = require('webpack-merge')

module.exports = merge(webpackBaseConfig, {
  mode: 'development',
  devServer: {
    port: 8088,
  },
  optimization: {
    runtimeChunk: 'single'
  },
  output: {
    filename: '[name].js',
  },
})