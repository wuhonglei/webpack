const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        main: './src/index.js',
        login: './src/login.js'
    },
    output: {
        filename: '[name].[hash].js',
        path: path.resolve(__dirname, './dist')
    },
    optimization: {
        splitChunks: {
            chunks: "all", // 所有的 chunks 代码公共的部分分离出来成为一个单独的文件
            name: 'common', // 给分离出来的 chunk 起个名字
        },
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: './public/index.html',
            filename: 'index.html',
            chunks: ['main', 'common']
        }),
        new HtmlWebpackPlugin({
            template: './public/login.html',
            filename: 'login.html',
            chunks: ['login', 'common']
        })
    ]
};