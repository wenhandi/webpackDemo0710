const path = require('path');
const webpack = require('webpack')
const HtmlWbpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        app: './src/index.js',
    },
    plugins: [
        new HtmlWbpackPlugin({
            title: 'caching'
        }),
        new webpack.HashedModuleIdsPlugin()
    ],
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, 'dist'),
    },
    optimization: {
        runtimeChunk: 'single',
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /[\\/node_modules[\\/]]/,
                    name: 'vendors2',
                    chunks: 'all'
                }
            }
        }
    }
}