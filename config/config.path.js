const path = require('path');

const name = '3d';
const PATHS = {  
  entryName: {
    web: `${name}-web`,
    mobile: `${name}-mobile`,
  },
  src: path.resolve(__dirname, '../src'),
  entry: {
    html: {
      web: `${name}-web.html`,
      mobile: `${name}-mobile.html`,
    },
    template: {
      web: `src/pages/${name}-web.ejs`,
      mobile: `src/pages/${name}-mobile.ejs`,
    },
    js: {
      web: path.resolve(__dirname, `../src/js/${name}-web.js`),
      mobile: path.resolve(__dirname, `../src/js/${name}-mobile.js`),
    },
    title: `${name} :: Welcome to SquareYards`,
    commonTheme: path.resolve(__dirname, `../src/js/commonTheme.js`),
  },
  output: {
    path: path.resolve(__dirname, '../build'),
    html: {
      web: `[name].html`,
      mobile: `[name].html`
    }, 
    css: `css/[name].css`, //`css/${name}.css`
    js: `js/[name].js`, // `js/${name}.js`
    assets: `assets/${name}/[name][ext]`, 
    vendnorJs: `js/${name}.vendors.js`
  }
}

module.exports = PATHS;