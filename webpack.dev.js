const { dirname } = require('path');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');


module.exports = {
    mode: 'development',
    devtool: 'inline-source-map',
    entry: {
        "app": './src/app.js',
    },
    output: {
        filename: '[name].weather.js',
        path: path.resolve(__dirname, 'dist'),
        assetModuleFilename: 'assets/[name].asset[ext]',
        clean: true,
    },
    plugins: [
        new MiniCssExtractPlugin(),
        new CssMinimizerPlugin(),
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ],
    devServer: {
        static: './dist',
    },
    optimization: {
        runtimeChunk: 'single',
    },
    module: {
        rules: [
            {
                test: /.css$/,
                use: [MiniCssExtractPlugin.loader, "style-loader"]
            },
            {
                test: /.img|jpe?g|gif$/,
                type: "asset/resource"
            }
        ]
    }
}