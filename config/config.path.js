const path = require('path');

const name = '3d';
const PATHS = {  
  entryName: name,
  src: path.resolve(__dirname, '../src'),
  entry: {
    html: `${name}.html`,
    template: `src/pages/${name}.html`,
    js: path.resolve(__dirname, `../src/js/${name}.js`),
    title: `${name} :: Welcome to SquareYards`,
    commonTheme: path.resolve(__dirname, `../src/js/commonTheme.js`),
  },
  output: {
    path: path.resolve(__dirname, '../build'),
    html: `${name}.html`, 
    css: `css/[name].css`, //`css/${name}.css`
    js: `js/[name].js`, // `js/${name}.js`
    assets: `assets/${name}/[name][ext]`, 
    vendnorJs: `js/${name}.vendors.js`
  }
}

module.exports = PATHS;