const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    mode: 'development',  // 开发使用
    entry: './src/index.js',
    output: {
        // filename: 'main.js'
        filename: '[name].[contenthash].js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: '写代码啦',
            template: 'src/assets/index.html'
        })
    ]
}