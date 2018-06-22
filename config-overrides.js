
/*antd-mobile使用，实现按需打包：针对antd-mobile库的style: 'css'样式*/
const {injectBabelPlugin} = require('react-app-rewired');
module.exports = function override(config, env) {
  config = injectBabelPlugin(['import', {libraryName: 'antd-mobile', style: 'css'}], config);
  return config;
};