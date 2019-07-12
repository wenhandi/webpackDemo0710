const webpackDevServer = require('webpack-dev-server')
const webpack = require('webpack')

const config = require('./webpack.config.js');

// 提取webpackDevServer配置对象 可被webpack生成compiler和webpackDevServer使用
const options = {
    contentBase: './dist',
    hot: true,
    host: 'localhost'
}

webpackDevServer.addDevServerEntrypoints(config, options)
const compiler = webpack(config);
const server = new webpackDevServer(compiler, options)


server.listen(5000, 'localhost', () => {
    console.log("应用启动在3000端口")
})