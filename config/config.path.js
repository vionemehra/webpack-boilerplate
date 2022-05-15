const path = require('path');

const PATHS = {
  entryPageURL: ['/index'],
  entryPageJs: path.resolve(__dirname, '../src/js/index.js'),
  entryPageHTML: path.resolve(__dirname, '../src/pages/index.html'),
  outputPath: path.resolve(__dirname, '../build'),
  publicPath: path.resolve(__dirname, '../src'),
  entryPageTitle: 'Home Page  :: Welcome to Home page',
  src: path.resolve(__dirname, '../src'),
}

module.exports = PATHS;