const path = require('path')
const PrerenderSpaPlugin = require('prerender-spa-plugin')

const webpackConfigProd = {
  plugins: [
    new PrerenderSpaPlugin({
      staticDir: path.join(__dirname, 'dist'),
      // indexPath: path.join(__dirname, 'public', 'index.html'),
      routes: [ '/' ]
    })
  ]
}

module.exports = {
  configureWebpack: () => {
    if (process.env.NODE_ENV === 'production') {
      return webpackConfigProd
    } else {
      return {}
    }
  }
}
