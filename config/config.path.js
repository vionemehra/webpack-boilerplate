const path = require('path');

const name = '3d';
const PATHS = {  
  entryName: name,
<<<<<<< Updated upstream
  entryPageName: `${name}.html`,
  entryPageJs: path.resolve(__dirname, '../src/js/index.js'),
  entryPageHTML: path.resolve(__dirname, '../src/pages/index.html'),
  outputPath: path.resolve(__dirname, '../build'),
  entryPageTitle: 'Home Page  :: Welcome to Home page',
  src: path.resolve(__dirname, '../src'),
=======
  src: path.resolve(__dirname, '../src'),
  entry: {
    html: `${name}.html`,
    template: `src/pages/${name}.html`,
    js: path.resolve(__dirname, `../src/js/${name}.js`),
    title: `${name} :: Welcome to SquareYards`,
  },
  output: {
    path: path.resolve(__dirname, '../build'),
    html: `${name}.html`, 
    css: `css/${name}.css`, 
    js: `js/${name}.js`, 
    assets: `assets/${name}/[name][ext]`, 
    vendnorJs: `js/${name}.vendors.js`
  }
>>>>>>> Stashed changes
}

module.exports = PATHS;