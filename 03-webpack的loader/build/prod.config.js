const UglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin');
const baseConfig = require('./base.config');
const webpackMerge = require('webpack-merge');

// ！！！！！！！！！！！！！！！！！！！！！！！！！！配置文件的抽离：生产环境配置！！！！！！！！！！！！！！！！！！！！！！！！！！
module.exports = webpackMerge(baseConfig, {
  plugins: [
    new UglifyjsWebpackPlugin()
  ]
})
