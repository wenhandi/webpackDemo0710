const path = require('path');
const webpack = require('webpack')
const HtmlWbpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        app: './src/index.js',
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'webpack-numbers.js',
        // library在CJS AMD Node或全局变量
        library: 'webpackNumbers',
        libraryTarget: 'umd',
    },
    externals: {
        lodash: {
            commonJs: 'lodash',
            commonjs2: 'lodash',
            amd: 'lodash',
            root: '-'
        }
    }
}