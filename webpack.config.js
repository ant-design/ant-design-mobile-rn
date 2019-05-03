const getWebpackConfig = require('antd-tools/lib/getWebpackConfig');
const webpackConfig = getWebpackConfig(false);

console.log(webpackConfig);

module.exports = webpackConfig;
