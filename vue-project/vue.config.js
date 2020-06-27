const StyleLintPlugin = require('stylelint-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    lintOnSave: false,
    devServer: {
        before(app) {
            app.get('/list', (req, res) => {
                res.json({ data: [1, 2, 3] });
            })
        }
    },
    chainWebpack: (config) => {
        config
            .plugin('banner')
            .use(webpack.BannerPlugin, [{
                banner: new Date().toString(),
                entryOnly: false
            }])
            .end();
    }
};