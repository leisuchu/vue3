const path = require('path')
const process = require('process')
process.env.BROWSER = 'chrome'
module.exports = {
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'sass',
      patterns: []
    }
  }
}