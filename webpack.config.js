const path = require('path');
const webpack = require('webpack');
const htmlWebpackPlugin = require('html-webpack-plugin');

const PATHS = {
  entryPageJs: path.resolve(__dirname, 'src/js/index.js'),
  outputPath: path.resolve(__dirname, 'dist'),
  entryPageTitle: 'Home Page  :: Welcome to Home page',
}

module.exports = {
  mode: 'development',
  entry: PATHS.entryPageJs,
  output: {
    path: PATHS.outputPath,
    filename: 'index.js'
  },
  plugins: [
    new htmlWebpackPlugin({
      title: PATHS.entryPageTitle,
    })
  ],
}