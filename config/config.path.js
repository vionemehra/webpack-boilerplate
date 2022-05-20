const path = require('path');


const name = 'home';
const PATHS = {  
  entryName: name,
  entryPageName: `${name}.html`,
  src: path.resolve(__dirname, '../src'),
  entryPageTitle: 'Home Page  :: Welcome to Home page',
  entryPageJs: path.resolve(__dirname, '../src/js/index.js'),
  entryPageHTML: path.resolve(__dirname, '../src/pages/index.html'),
  outputPath: path.resolve(__dirname, '../build'),
  entryPageImages: '../images/',
}

module.exports = PATHS;