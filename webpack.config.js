const base = require('./webpack.config.base.js')
module.exports = {
    ...base,  //将base的所有属性放在这
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
    },
    module: {
        rules: [
            ...base.module.rules,
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader']
            }
        ]
    }
}