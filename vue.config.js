const { defineConfig } = require('@vue/cli-service');
const path = require('path');
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  //设置src路径为@
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src')
      }
    }
  },
  //设置路径
  publicPath: './',
  //设置反向代理
  devServer: {
    // port: '3000', // 设置端口号
    // proxy: {
    //   '/api': {
    //     target: 'http://localhost:8010', //API服务器的地址
    //     // ws: true, //代理websockets
    //     changeOrigin: true, // 是否跨域，虚拟的站点需要更管origin
    //     pathRewrite: {
    //       // '^/api'是一个正则表达式，表示要匹配请求的url中，全部'http://localhost:8081/api' 转接为 http://localhost:8081/
    //       '^/api': '',
    //     }
    //   }
    // },

    proxy: 'http://localhost:8010'
  }
})
