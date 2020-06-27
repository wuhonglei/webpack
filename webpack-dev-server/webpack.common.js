/**
 * webpack 通用配置（开发环境和生成环境公用）
 */

const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const Config = require('webpack-chain'); // webpack-chain 提供一个 Config 类

const config = new Config(); // 新建一个配置对象
const srcPath = path.resolve(__dirname, 'src');

config
    .entry('main')
    .add('./src/index.js') // 指定构建入口
    .add('./src/foo.js') // 指定构建入口
    .end()
    .output
    .path(path.resolve(__dirname, 'dist')) // 指定构建文件所在路径
    .filename('[name].js'); // 指定构建生成的文件名

config
    .module
    .rule('style') // 给 loader 起个名字
    .test(/\.css$/)
    .include
    .add(srcPath)
    .end()
    .use('style')
    .loader('style-loader') // 应用 style-loader
    .end()
    .use('css')
    .loader('css-loader') // 应用 css-loader
    .options({
        importLoaders: 1 // css loader 之前还有几个 loader 插件
    })
    .end()
    .use('postcss')
    .loader('postcss-loader')
    .end();

config
    .devtool('eval-cheap-source-map');

config
    .plugin('html1')
    .use(htmlWebpackPlugin, [{ template: './public/index.html' }])
    .end()
    .plugin('html2')
    .use(htmlWebpackPlugin, [{ template: './public/other.html' }]);

module.exports = config.toConfig();