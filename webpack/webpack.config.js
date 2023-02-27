const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require("copy-webpack-plugin");

var config = require('../config');

var BASE_PATH = process.env.BASE_PATH || '/';

module.exports = {
    entry: {
        app: [path.join(__dirname, '../src/index.tsx')],
    },
    output: {
        path: path.join(__dirname, '../dist'),
        publicPath: BASE_PATH,
        filename: '[name].bundle.js',
        chunkFilename: '[name].chunk.js',
        clean: true,
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('development'),
            'process.env.BASE_PATH': JSON.stringify(BASE_PATH),
            'process.env.BASE_API_URL': JSON.stringify(process.env.BASE_API_URL)
        }),
        new HtmlWebpackPlugin({
            template: config.srcHtmlLayout,
            favicon: config.favicon,
            manifest: config.manifestFile,
            title: config.siteTitle,
        }),
        new MiniCssExtractPlugin({
            filename: 'css/[name].css'
        }),
        new CopyPlugin({
            patterns: [
                {
                    from: path.join(__dirname, '../src/images'),
                    to: 'img'
                }
            ]
        })
    ],
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                options: {
                    allowTsInNodeModules: true
                },
                include: [
                    path.join(__dirname, '../src'),
                ]
            },
            {
                test: /\.(css|less)$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                plugins: [
                                    ['autoprefixer'],
                                ],
                            },
                        }
                    },
                    {
                        loader: 'less-loader',
                        options: {
                            lessOptions: {
                                javascriptEnabled: true
                            }
                        }
                    }
                ],
                include: [
                    path.join(__dirname, '../src'),
                    path.join(__dirname, '../node_modules/antd')
                ]
            },
        ]
    }
};
