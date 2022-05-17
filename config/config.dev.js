const webpack = require('webpack');
const htmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const path = require('./config.path');

module.exports = {
  mode: 'development',
  entry: {
    [path.entryName]: path.entryPageJs,
  },
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
        test: /\.css$/i,
        use: [
          // 'style-loader', // for injecting stylesheet to the page
          {            
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: path.src,
            },
          },
          {
            loader: 'css-loader',
            options: {
              // sourceMap: true, // for source-map
            },
          }
        ],
      },
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
    new MiniCssExtractPlugin({
      filename: "css/[name].css",
    }),
  ],
  
}