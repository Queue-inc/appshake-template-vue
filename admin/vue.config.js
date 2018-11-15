const path = require('path')

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        '@P': path.join(__dirname, '/src/packages')
      }
    }
  }
}
