const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const svgToMiniDataURI = require('mini-svg-data-uri');

module.exports = {
    mode: 'development', // production

    entry: {
        main: path.resolve(__dirname, 'src/index.js'),
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[contenthash].js',
        assetModuleFilename: '[name][ext]',
        clean: true,
    },
    devtool: 'inline-source-map',
    devServer: {
        static: path.resolve(__dirname, 'dist'),
        port: 5001, //default 8080
        open: true,
        hot: true,
        historyApiFallback: true,
    },
    //loaders
    module: {
        rules: [
            //css
            {
                test: /\.sa?css$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            //images
            {
                test: /\.(ico|png|webp|jpg|gif|jpeg)$/,
                type: 'asset/resource'
            },
            //svg
            {
                test: /\.svg/,
                type: 'asset/inline',
                generator: {
                    dataUrl: content => {
                        content = content.toString();
                        return svgToMiniDataURI(content);
                    }
                }
            },
            //fonts
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
            },
            //javascript for babel
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            },
        ]
    },
    //plugins
    plugins: [
        new HtmlWebpackPlugin({
            title: 'pokeys',
            filename: 'index.html',
            template: path.resolve(__dirname, 'src/template.html')
        }),
        new Dotenv()
    ]
}