const webpack = require('webpack');
const htmlWebpackPlugin = require('html-webpack-plugin');

const path = require('./config.path');

module.exports = {
  mode: 'development',
  entry: path.entryPageJs,
  output: {
    path: path.outputPath,
    filename: 'index.js'
  },
  plugins: [
    new htmlWebpackPlugin({
      title: path.entryPageTitle,
    })
  ],
}