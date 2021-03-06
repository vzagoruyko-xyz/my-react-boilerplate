const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.html$/,
                use: [{
                    loader: 'html-loader'
                }]
            },
            {
                test: /\.css$/,
                use: [{
                    loader: MiniCssExtractPlugin.loader,
                }, 'css-loader',],
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({ 
            template: './src/index.html', 
            filename: './index.html' 
        }),
        new MiniCssExtractPlugin({
            filename: 'style.css',
        })
    ]
}