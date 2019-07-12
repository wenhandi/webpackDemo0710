const path = require('path');
const HtmlWbpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const webpack = require('webpack')

module.exports = {
    entry: {
        app: './src/index.js',
    },
    devtool: 'inline-source-map',
    // webpackDevServer配置
    // 使用WebpackDevServer 在localhost:8080下建立服务，将dist目录下的文件，作为可访问文件
    // 内部是用了 webpack-dev-middle(是一个容器)
    devServer: {
        contentBase: './dist',
        // 使用webpack内置的HMR插件
        hot: true
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWbpackPlugin({
            title: '输出管理插件'
        }),
        // 查看要修补(patch)的依赖
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        // webpackDevMiddle容器wrapper 可把webpack处理后的文件传递给一个服务器
        // webpackDevServer内部使用了它 可配合express server
        // output增加publicPath 会在服务器脚本用到 以确保文件资源能在 http://localhost:3000下正确访问
        publicPath: '/'
    },
}