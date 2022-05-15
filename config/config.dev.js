const webpack = require('webpack');
const htmlWebpackPlugin = require('html-webpack-plugin');

const path = require('./config.path');

module.exports = {
  mode: 'development',
  entry: path.entryPageJs,
  devServer: {
    static: {
      directory: path.src
    },
    compress: true,
    port: 2500,
    hot: true,    
    magicHtml: true,
    open: {                 // open: true,
      target: path.entryPageURL,
      app: {
        name: 'Chrome',     // 'Google Chrome' on macOS, 'google-chrome' on Linux
      },
    },
  },  
  output: {
    path: path.outputPath,
    filename: 'index.js',
  },
  plugins: [
    new htmlWebpackPlugin({
      title: path.entryPageTitle,
      template: path.entryPageHTML,
    })
  ],
  
}