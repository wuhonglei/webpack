/**
 * webpack 开发环境配置
 */

const mock = require('./mock/index.js');
const Config = require('webpack-chain'); // webpack-chain 提供一个 Config 类
const merge = require('webpack-merge');
const commonConfig = require('./webpack.common.js');

const config = new Config(); // 新建一个配置对象

config
    .mode('development')
    .devServer
    .proxy({
        proxy: {
            '/': 'http://127.0.0.1:3000'
        },
    })
    .before(mock);

config
    .devtool('eval-cheap-source-map');

console.info('process.env.NODE_ENV', process.env.NODE_ENV);
module.exports = merge(commonConfig, config.toConfig());