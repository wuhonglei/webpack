/**
 * webpack 生产环境配置
 */

const Config = require('webpack-chain'); // webpack-chain 提供一个 Config 类
const merge = require('webpack-merge');
const commonConfig = require('./webpack.common.js');

const config = new Config(); // 新建一个配置对象

config
    .mode('production');

module.exports = merge(commonConfig, config.toConfig());