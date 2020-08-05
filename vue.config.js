module.exports = {
  devServer: {
    proxy: {
      "/admin": {
        target: `http://localhost:8082`,
        changeOrigin: true,
        pathRewrite: {
          '^/admin': ''
        }
      }
    }
  },
  configureWebpack: {
    resolve: {
      alias: {
        'components': '@/components',
        'content': 'components/content',
        'common': 'components/common',
        'assets': '@/assets',
        'network': '@/network',
        'views': '@/views',
      }
    }
  }
}
