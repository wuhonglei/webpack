const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const mock = require('./mock/index.js');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new htmlWebpackPlugin({
            template: path.resolve(__dirname, 'public/index.html')
        })
    ],
    devServer: {
        proxy: {
            '/': 'http://127.0.0.1:3000'
        },
        before(app, server, compiler) {
            mock(app);
        },
        after(app, server, compiler) { // NOT WORK
            console.info('after is running...');
            app.get('/other', (req, res) => {
                console.info('拦截到响应', res);
                res.json({ data: [1, 2, 3, 4] });
            });
        }
    },
    devtool: 'inline-source-map'
};