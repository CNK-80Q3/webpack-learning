// common.js
const { add, mul } = require('./mathUtils.js');

console.log(add(1, 2));
console.log(mul(2, 3));

// ES6
import { name, info } from './info.js';

console.log(name, info);

// 添加css依赖，添加css-loader支持
require('./../css/normal.css');

// 添加less依赖，添加less-loader支持
require('./../less/css-less.less');

// 添加Vue支持
import Vue from 'vue';
import App from '../vue/App';
// const app = new Vue({
//   el: '#app',
//   data: {
//     message: 'Vue Message!'
//   }
// })


new Vue({
  el: '#app',
  // template最终会替换index.html里的 <div id="app"></div>
  template: '<App/>',
  components: {
    App
  }
})