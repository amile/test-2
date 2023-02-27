const path = require('path');
const baseConfig = require('./webpack.config');

module.exports = {
    entry: baseConfig.entry,
    output: baseConfig.output,
    plugins: baseConfig.plugins,
    resolve: baseConfig.resolve,
    module: baseConfig.module,
    mode: 'development',
    devtool: 'cheap-source-map',
    devServer: {
        static: {
            directory: path.join(__dirname, './dist')
        },
        compress: true,
        host: '0.0.0.0',
        port: process.env.PORT || 3000,
        historyApiFallback: true,
    },
};
