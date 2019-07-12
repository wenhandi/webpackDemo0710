const express = require('express')
const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')

const app = express();
const config = require('./webpack.config.js');
const compiler = webpack(config);


// 让express使用用webpack-dev-middleware 并且将webpack.config.js 文件当做基础配置
app.use(webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath
}))

app.listen(3000, function(){
    console.log("应用启动在3000端口")
})