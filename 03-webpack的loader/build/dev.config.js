const baseConfig = require('./base.config');
const webpackMerge = require('webpack-merge');

// ！！！！！！！！！！！！！！！！！！！！！！！！！！配置文件的抽离：开发环境配置！！！！！！！！！！！！！！！！！！！！！！！！！！
module.exports = webpackMerge(baseConfig, {
  devServer: {
    // 为指定文件夹提供本地服务，默认根目录
    contentBase: './dist',
    // 指定本地服务的端口，默认8080端口
    port: 1234,
    // 是否实时刷新
    inline: true,
    // 采用HTML5的history模式，实现无需重新加载页面
    // historyApiFullback:
  }
})
