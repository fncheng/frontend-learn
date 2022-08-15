const path = require('path')
var UglifyJsPlugin = require('uglifyjs-webpack-plugin')
// 预渲染https://github.com/chrisvfritz/prerender-spa-plugin
const PrerenderSPAPlugin = require('prerender-spa-plugin')

function resolve(dir) {
  return path.resolve(__dirname, dir)
}

// console.log(process.env.NODE_ENV)
// console.log(process.env.ENV)
// console.log(process.env.VUE_APP_BASE_API)

module.exports = {
  publicPath: '/app/',
  outputDir: 'dist/static',
  // 对象模式
  // configureWebpack: {
  //   resolve: {
  //     //路径别名设置
  //     alias: {
  //       '@': resolve('src'),
  //     },
  //   },
  //   optimization: {
  //     minimizer: [
  //       new UglifyJsPlugin({
  //         uglifyOptions: {
  //           // 其他压缩选项
  //           compress: {
  //             drop_console: false, //注释console
  //             pure_funcs: ['console.log'], //丢弃console.log
  //           },
  //           warnings: false, //显示警告
  //         },
  //       }),
  //     ],
  //   },
  // },

  // 函数模式
  configureWebpack: (config) => {
    config.resolve.alias['@'] = resolve('src')
    config.plugins.push(
      new PrerenderSPAPlugin({
        staticDir: resolve('dist'),
        routes: ['/about'],
      })
    )
    if (process.env.NODE_ENV === 'production') {
      // 为生产环境修改配置...
      //路径别名设置
      config.optimization.minimizer.push(
        new UglifyJsPlugin({
          uglifyOptions: {
            // 其他压缩选项
            compress: {
              drop_console: false, //注释console
              pure_funcs: ['console.log'], //丢弃console.log
            },
            warnings: false, //显示警告
          },
        })
      )
    }
    // console.log('config: ', config)
  },
  productionSourceMap: false,
  devServer: {
    compress: true,
    port: 8888,
    open: true,
    // proxy: 'http://localhost:3000',
  },
}
