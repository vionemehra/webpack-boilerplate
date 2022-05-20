const path = require('path');


const name = 'home';
const PATHS = {  
  entryName: name,
  entryPageName: `${name}.html`,
  src: path.resolve(__dirname, '../src'),
  entryPageTitle: 'Home Page  :: Welcome to Home page',
  entryPageJs: path.resolve(__dirname, `../src/js/${name}.js`),
  entryPageTemplate: `src/pages/${name}.html`,
  outputPath: path.resolve(__dirname, '../build'),
  entryPageVendorJs: `js/${name}.vendors.js`,
}

module.exports = PATHS;