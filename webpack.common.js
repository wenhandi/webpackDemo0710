const path = require('path');
const HtmlWbpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        app: './src/index.js',
    },
    plugins: [
        new HtmlWbpackPlugin({
            title: 'Code spliting'
        }),
    ],
    output: {
        filename: '[name].bundle.js',
        // 非入口chunk的名称
        chunkFilename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
}