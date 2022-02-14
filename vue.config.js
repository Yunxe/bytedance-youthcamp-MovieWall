module.exports = {
  outputDir: './build',
  // 解决跨域
  // devServer: {
  //   proxy: {
  //     '^/api': {
  //       target: '',
  //       pathRewrite: {
  //         '^/api': ''
  //       },
  //       changeOrigin: true
  //     }
  //   }
  // },
  configureWebpack: {
    resolve: {
      alias: {
        views: '@/views'
      }
    }
  }
}
