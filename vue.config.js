const globImporter = require('node-sass-glob-importer')

module.exports = {
  publicPath: './',
  css: {
    loaderOptions: {
      sass:{
        prependData: `@import "@/assets/sass/common.scss";`,
        sassOptions: {
          importer: globImporter()
        }
      }
    }
  },
}

