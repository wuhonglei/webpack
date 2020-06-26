const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const mock = require('./mock/index.js');
const Config = require('webpack-chain'); // webpack-chain 提供一个 Config 类

// module.exports = {
//     mode: 'development',
//     entry: './src/index.js',
//     output: {
//         filename: '[name].js',
//         path: path.resolve(__dirname, 'dist')
//     },
//     plugins: [
//         new htmlWebpackPlugin({
//             template: path.resolve(__dirname, 'public/index.html')
//         })
//     ],
//     devServer: {
//         proxy: {
//             '/': 'http://127.0.0.1:3000'
//         },
//         before(app, server, compiler) {
//             mock(app);
//         }
//     },
//     devtool: 'inline-source-map'
// };

const config = new Config(); // 新建一个配置对象

config
    .mode('development')
    .entry('main')
    .add('./src/index.js') // 指定构建入口
    .add('./src/foo.js') // 指定构建入口
    .end()
    .output
    .path(path.resolve(__dirname, 'dist')) // 指定构建文件所在路径
    .filename('[name].js'); // 指定构建生成的文件名

config
    .devServer
    .proxy({
        proxy: {
            '/': 'http://127.0.0.1:3000'
        },
    })
    .before(mock);

config
    .module
    .rule('style') // 给 loader 起个名字
    .test(/\.css$/)
    .use('style')
    .loader('style-loader') // 应用 style-loader
    .end()
    .use('css')
    .loader('css-loader') // 应用 css-loader
    .end();

config
    .devtool('inline-source-map');

config
    .plugin('html1')
    .use('html-webpack-plugin', [{ template: './public/index.html' }])
    .end()
    .plugin('html2')
    .use('html-webpack-plugin', [{ template: './public/other.html' }]);

module.exports = config.toConfig();