const path = require('path');
const HtmlWbpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = {
    entry: {
        main: './src/index.js',
        print: './src/print.js',
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWbpackPlugin({
            title: '输出管理插件'
        })
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
}