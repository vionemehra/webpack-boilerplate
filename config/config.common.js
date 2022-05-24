const webpack = require('webpack');
const htmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require('./config.path');

module.exports = {  
  module: {
    rules: [
     {
       test: /\.js$/i,
       exclude: /node_modules/,
      use: {
        loader: 'babel-loader'
      },
     },
     {
        test: /\.s[ac]ss$/i,
        exclude: /node_modules/,
        use: [
          // 'style-loader', // for injecting stylesheet to the page
          {            
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: path.src,
            },
          },
          'css-loader',
          'postcss-loader',
          {
            loader: 'sass-loader',
            options: {
              implementation: require.resolve('sass'),
            },
          }
        ],
      },
      {
        test: /\.(jpe?g|png|svg|gif)$/i,
        exclude: /node_modules/,
        type: 'asset/resource',
      },
      {
        test: /\.mp4$/i,
        exclude: /node_modules/,
        type: 'asset/resource',
      },
      {
        test: /\.ejs$/i,
        use: [
          { loader: 'ejs-easy-loader' }
        ],
      },  
    ],
  },
  
  plugins: [
    new htmlWebpackPlugin({
      template: path.entry.template.web,
      title: path.entry.title,
      filename: path.output.html.web,
      minify: false,
      inject: 'body',
    }),
    new htmlWebpackPlugin({
      template: path.entry.template.mobile,
      title: path.entry.title,
      filename: path.output.html.mobile,
      minify: false,
      inject: 'body',
    }),
    new MiniCssExtractPlugin({
      filename: path.output.css,
    }),
  ],
};