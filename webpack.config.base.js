const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {

    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[contenthash].js'
    },
    plugins: [new HtmlWebpackPlugin(
        {
            title: '测试title',
            // Load a custom template (lodash by default)
            template: './src/index.html'
        }
    ),
    ],
    module: {
        rules: [
            {
                test: /\.styl$/,
                loader:['style-loader','css-loader','stylus-loader']
            },
            {
                test: /\.less$/,
                loader: ['style-loader','css-loader','less-loader'], // compiles Less to CSS
            },
            {
                test: /\.scss$/i,
                use: [
                    "style-loader",
                    "css-loader",
                    {
                        loader: "sass-loader",
                        options: {
                            implementation: require("dart-sass")
                        }
                    }
                ],

            },
        ],
    },
};