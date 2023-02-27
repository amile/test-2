var TerserPlugin = require('terser-webpack-plugin');
var CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const baseConfig = require('./webpack.config');

module.exports = {
    entry: baseConfig.entry,
    output: baseConfig.output,
    plugins: baseConfig.plugins,
    resolve: baseConfig.resolve,
    module: baseConfig.module,
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin(),
            new CssMinimizerPlugin(),
        ],
    },
    mode: 'production'
};
