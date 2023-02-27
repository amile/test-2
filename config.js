var path = require('path');

var root = path.join(__dirname);

var config = {
    rootDir: root,
    // Targets ========================================================
    distDir: path.join(root, 'dist'),
    manifestFile: path.join(root, 'public', 'webpack.json'),
    favicon: path.join(root, 'public', 'favicon.ico'),

    // Source Directory ===============================================
    srcDir: path.join(root, 'src'),

    // HTML Layout ====================================================
    srcHtmlLayout: path.join(root, 'public', 'index.html'),

    // Site Config ====================================================
    siteTitle: 'Test 2',
    siteDescription: 'Test 2'
};

module.exports = config;
