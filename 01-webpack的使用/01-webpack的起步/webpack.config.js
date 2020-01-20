const path = require('path');
// 配置了路径以后就可以直接使用 webpack 命令，而不用在其后添加入口和出口文件地址
module.exports = {
  entry: './src/main.js',
  output: {
    // 输出路径必须是绝对路径，但是写死的话不利于后期对变动的处理，所以使用resolve()拼接的路径，__dirname是node里的全局变量，表示当前文件所在的目录
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  }
  // 在package.json的script脚本里配置的的build: webpack命令会优先在本地找webpack包，直接在终端输入的话使用用的是全局安装的webpack
  // 真实项目一般都要用本地的webpack包，防止版本冲突造成的问题
  // npm install webpack@3.6.0 --save-dev使用此命令安装本地包，-dev意为开发时依赖
}
