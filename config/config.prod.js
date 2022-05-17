const webpack = require('webpack');
const htmlWebpackPlugin = require('html-webpack-plugin');

const path = require('./config.path');

module.exports = {
  mode: 'production',
  entry: {
    [path.entryName]: path.entryPageJs,
  },
  output: {
    path: path.outputPath,
    filename: 'js/[name].bundle.js',
    clean: true,    
  },
  plugins: [
    new htmlWebpackPlugin({
      template: 'src/pages/index.html',
      title: path.entryPageTitle,
      filename: '[name].html',
      minify: false,
      inject: 'body',
    })
  ],
}