const path = require('path');

const PATHS = {
  entryPageHTML: ['/index'],
  entryPageJs: path.resolve(__dirname, '../src/js/index.js'),
  outputPath: path.resolve(__dirname, '../build'),
  publicPath: path.resolve(__dirname, '../src'),
  entryPageTitle: 'Home Page  :: Welcome to Home page',
  staticPath: path.resolve(__dirname, '../src'),
}

module.exports = PATHS;