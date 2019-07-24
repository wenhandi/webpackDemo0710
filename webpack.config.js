const path = require('path');
const webpack = require('webpack')

module.exports = {
    entry: {
        polyfills: './src/polyfills.js',
        index: './src/index.js'
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            // CJS上下文中 this指向是 module.exports,可通过import-loader覆盖this的指向
            // {
            //     test: require.resolve('./src/index.js'),
            //     use: 'imports-loader?this=>window',
            // },
            // exports-loader讲一个全局变量作为一个普通的模块导出
            {
                test: require.resolve('./src/globals.js'),
                use: 'exports-loader?file,parse=helpers.parse'
            },
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            // 可和tree shaking 配合将lodash library 中没用到的导出去除
            join: ['lodash', 'join']
        })
    ]
}