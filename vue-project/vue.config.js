const StyleLintPlugin = require('stylelint-webpack-plugin');

module.exports = {
    lintOnSave: false,
    devServer: {
        before(app) {
            app.get('/list', (req, res) => {
                res.json({ data: [1, 2, 3] });
            })
        }
    },
    chainWebpack: (config) => {}
};