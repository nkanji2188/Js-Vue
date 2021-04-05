const globImporter = require('node-sass-glob-importer')

module.exports = {
  publicPath: './',
  css: {
    loaderOptions: {
      sass:{
        // 変数など具体的なcssをはかないもの、他はmain.jsに記載
        prependData: `@import "@/assets/sass/prepends.scss";`,
        sassOptions: {
          importer: globImporter()
        }
      }
    }
  },
  // エラーを無効化
  chainWebpack: config => {
    config.module.rules.delete('eslint');
  }
}

