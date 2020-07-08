const path = require('path')
const TransformModulesPlugin = require('webpack-transform-modules-plugin')
const isDev = process.env.NODE_ENV === 'development'

function resolve(dir) {
  return path.join(__dirname, dir)
}
const externals = {}
const cdn = {
  dev: {
    css: [
      '//res.wx.qq.com/open/libs/weui/2.1.3/weui.css'
    ],
    js: [
      '//res.wx.qq.com/open/js/jweixin-1.4.0.js'
    ]
  },
  build: {
    css: [
      '//res.wx.qq.com/open/libs/weui/2.1.3/weui.min.css'
    ],
    js: [
      '//res.wx.qq.com/open/js/jweixin-1.4.0.js'
    ]
  }
}
module.exports = {
  publicPath: '/',
  outputDir: 'dist',
  devServer: {
    port: 80,
    host: 'wx.qyhever.com',
    overlay: {
      warnings: true,
      errors: true
    }
    // proxy: {
    //   // change xxx-api/login => mock/login
    //   // detail: https://cli.vuejs.org/config/#devserver-proxy
    // }
  },
  pluginOptions: {
    // import global scss variables and mixins
    'style-resources-loader': {
      preProcessor: 'scss',
      patterns: [resolve('./src/assets/styles/global.scss')]
    }
  },
  configureWebpack(config) {
    config.externals = externals
    if (process.env.NODE_ENV === 'production') {
      // config.optimization.minimizer[0].options.terserOptions.compress.drop_console = true
    }
  },
  chainWebpack(config) {
    config.plugins.delete('prefetch')
    config.plugins.delete('preload')
    config.plugin('TransformModules').use(TransformModulesPlugin)
    config.resolve.alias.set('cube-ui', 'cube-ui/lib')

    // set svg-sprite-loader
    config.module
      .rule('svg')
      .exclude.add(resolve('src/assets/icons'))
      .end()
    config.module
      .rule('icons')
      .test(/\.svg$/)
      .include.add(resolve('src/assets/icons'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: '[name]'
      })
      // .end()
      // .use('image-webpack-loader')
      // .loader('image-webpack-loader')
      // .options({
      //     disable: isDev
      // })

      config.plugin('html').tap(args => {
        args[0].cdn = isDev? cdn.dev : cdn.build
        return args
      })
  },
  css: {
    loaderOptions: {
      less: {
        modifyVars: {
          '@green': '#ffd938'
        }
      }
    }
  }
}
