module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/vuejs/' : '/',
  configureWebpack: {
    resolve: {
      alias: {
        'vue$': 'vue/dist/vue.esm.js'
      }
    }
  }
}