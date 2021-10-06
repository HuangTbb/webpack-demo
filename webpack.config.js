const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const path = require('path')
const base = require('./webpack.config.base.js')
module.exports = {
    ...base,  //将base的所有属性放在这
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader']
            }
        ]
    }
}