const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const DashboardPlugin = require("webpack-dashboard/plugin");

module.exports = {
    mode: 'development',
    entry: {
        main: './src/index.js',
        // page: './src/foo.js',
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    },
    devtool: 'inline-source-map',
    optimization: {
        usedExports: true, // 模块内未使用的部门不进行导出
        sideEffects: true,
        splitChunks: {
            cacheGroups: {
                vendor: { // vendor 是我们第三方类库的公共代码的名称
                    test: path.resolve(__dirname, "node_modules"), // 直接使用 test 来做路径匹配
                    chunks: "initial",
                    name: "vendor",
                    enforce: true, // 忽略阈值配置，强制生成 chunks
                },
            },
        }

    },
    devServer: {
        contentBase: './public'
    },
    plugins: [
        new DashboardPlugin({ port: 3001 }),
        new HtmlWebpackPlugin({
            template: './public/index.html',
            chunks: ['vendor', 'main'],
            filename: 'index.html'
        }),
        // new HtmlWebpackPlugin({
        //     template: './public/page.html',
        //     chunks: ['common', 'page'],
        //     filename: 'login.html'
        // })
    ]
};