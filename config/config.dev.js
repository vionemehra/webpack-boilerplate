const webpack = require('webpack');
const htmlWebpackPlugin = require('html-webpack-plugin');

const path = require('./config.path');

module.exports = {
  mode: 'development',
  entry: {
    [path.entryName]: path.entryPageJs,
  },
  devtool: 'inline-source-map',
  devServer: {
    static: {
      directory: path.src
    },
    compress: true,
    port: 2500,
    hot: true,  
    open: {                 // open: true,
      target: [path.entryPageName],
      app: {
        name: 'Chrome',
      },
    },
  },  
  output: {
    path: path.outputPath,
    filename: 'js/[name].js',
  },
  module: {
    rules: [
     {
       test: /\.js$/i,
       exclude: /node_modules/,
      use: {
        loader: 'babel-loader'
      }
     }
    ],
  },
  plugins: [
    new htmlWebpackPlugin({
      template: 'src/pages/index.html',
      title: path.entryPageTitle,
      filename: '[name].html',
      minify: false,
      inject: 'body',
    }),
  ],
  
}