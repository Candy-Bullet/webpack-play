var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        app: './main.js'
    },
    output: {
        path: path.join(__dirname, 'dist/'),
        filename: '[name].js'
    },
    devServer: {
        open: true
    },
    module: {
        rules: [
            {
                test: /\.(jpg|png|gif)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8912, // 8kb
                            name: '[name].[hash].[ext]'
                        }
                    }
                ]
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            // limit: 89120, // 80kb
                            limit: 8912, // 8kb
                            name: '[name].[hash].[ext]'
                        }
                    }
                ]
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin()
    ]
}