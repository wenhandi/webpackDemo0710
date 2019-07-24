const path = require('path');
const HtmlWebpackPlugin = require('Html-webpack-plugin')
const {CleanWebpackPlugin} = require('Clean-webpack-plugin')
const WorkboxPlugin = require('Workbox-webpack-plugin')

module.exports = {
    entry: {
        index: './src/index.ts'
    },
    // 告诉webpack提取source map 比行内镰刀最终的bundle中
    devtool: 'inline-source-map',
    module: {
        rule: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
}