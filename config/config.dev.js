const webpack = require('webpack');

const path = require('./config.path');

module.exports = {
  mode: 'development',
  entry: path.entryPageJs,
  devServer: {
    static: {
      directory: path.staticPath
    },
    compress: true,
    port: 2500,
    hot: true,
    
    magicHtml: true,
    open: {                 // open: true,
      target: path.entryPageHTML,
      app: {
        name: 'Chrome',     // 'Google Chrome' on macOS, 'google-chrome' on Linux
      },
    },
  },  
  output: {
    path: path.outputPath,
    filename: 'index.js',
  },
  
}