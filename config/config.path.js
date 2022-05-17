const path = require('path');

const name = 'home';

const PATHS = {  
  entryName: name,
  entryPageName: `${name}.html`,
  entryPageJs: path.resolve(__dirname, '../src/js/index.js'),
  entryPageHTML: path.resolve(__dirname, '../src/pages/index.html'),
  outputPath: path.resolve(__dirname, '../build'),
  entryPageTitle: 'Home Page  :: Welcome to Home page',
  src: path.resolve(__dirname, '../src'),
}

module.exports = PATHS;