const path = require('path');
const webpack = require('webpack');
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

// ！！！！！！！！！！！！！！！！！！！！！！！！！！配置文件的抽离：公共基础配置！！！！！！！！！！！！！！！！！！！！！！！！！！
// 配置了路径以后就可以直接使用 webpack 命令，而不用在其后添加入口和出口文件地址
module.exports = {
  mode: 'development',
  entry: './src/js/main.js',
  output: {
    // 输出路径必须是绝对路径，但是写死的话不利于后期对变动的处理，所以使用resolve()拼接的路径，__dirname是node里的全局变量，表示当前文件所在的目录
    path: path.resolve(__dirname, '../dist'),
    filename: 'bundle.js',
    // publicPath给所有使用文件URL地址的部分加上 "dist/"
    // publicPath: 'dist/'
  },
  module: {
    // rules中包含多个处理规则，例如css处理规则，less处理规则，loader的读取是从后往前
    rules: [
      {
        test: /\.css$/,
        // cssloader只负责将css文件进行加载
        // use: ['style-loader', 'css-loader']
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: {
              modules: true
            }
          }
        ]
        // 正常顺序是先加载再解析，但在webpack里多个loader是从右向左读取的，所以css-loader放在右边
      },
      {
        test: /\.less$/,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: {
              modules: false
            }
          },
          {
            loader: 'less-loader',
          }
        ]
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              // 限制图片大小，小于limit则便以为base64格式，大于则使用file-loader进行加载
              limit: 81920,
              // 规范打包后的文件名
              // img/意为创建img目录；/.../表示文件目录；/...表示文件名；方括号里表示变量；
              name: 'img/[name].[hash:8].[ext]'
            }
          },
        ]
      },
      {
        // 将js文件编译为指定版本的js，此处下载的是ES2015
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,//排除某些文件夹
        use: [
          {
            loader: 'babel-loader',
            options: {
              // 此处下载的是ES2015
              // presets: ['@babel/preset-env']
              presets: ['es2015']
            }
          }
        ]
      },
      {
        test: /\.vue$/,
        use: ['vue-loader']
      }
    ]
  },
  resolve: {
    // 此设置引用时省略扩展名
    extensions: ['.js', '.vue', '.css'],
    // Vue会构建 runtime-only 和 runtime-compiler 两个版本，
    // 不配置的话默认使用 runtime-only 版本，代码要求不能包含template模板代码；
    // runtime-compiler版本包含compiler代码，可以用于编译template 
    // 这个设置是使用runtime-compiler版本的Vue
    alias: {
      vue$: 'vue/dist/vue.esm.js'
    }
  },
  plugins: [
    new webpack.BannerPlugin('这是一条Banner的横幅'),
    // vue-loader V15以后的版本要求这个插件
    new VueLoaderPlugin(),
    // 将入口html.html根据模板打包到dist文件夹中
    new HtmlWebpackPlugin({
      template: 'index.html'
    }),
  ]
}
