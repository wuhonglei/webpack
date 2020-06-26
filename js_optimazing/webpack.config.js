const path = require('path');

function getBuildMode() {
    const ENV = process.env.NODE_ENV;
    return (ENV === 'development') ? 'development' : 'production';
}

module.exports = {
    mode: 'production',
    entry: {
        main: './src/index.js'
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    },
    optimization: {
        usedExports: true, // 模块内未使用的部门不进行导出
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist')
    }
};