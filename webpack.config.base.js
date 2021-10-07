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
    ],
    module: {
        rules: [
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                    {
                        loader: 'file-loader',
                    },
                ],
            },
            {
                test: /\.styl$/,
                loader: ['style-loader','css-loader','stylus-loader']
            },
            {
                test: /\.less$/i,
                loader: ['style-loader','css-loader','less-loader']
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    'style-loader',
                    'css-loader',
                    {
                        loader: "sass-loader",
                        options: {
                            implementation: require('dart-sass')
                        }
                    }
                ]
            }
        ]
    }
}