const webpack = require('webpack');
const htmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");
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
      title: 'vivek',
      filename: path.output.html.web,
      minify: false,
      inject: 'body',
      chunks: [`${path.entryName.web}`]
    }),
    new htmlWebpackPlugin({
      template: path.entry.template.mobile,
      title: 'asd',
      filename: path.output.html.mobile,
      minify: false,
      inject: 'body',
      chunks: [`${path.entryName.mobile}`]
    }),
    new MiniCssExtractPlugin({
      filename: path.output.css,
    }),
    new CopyPlugin({
      patterns: [
        {
          from: "assets/3d/*",
          to: "assets/3d/",
          context: "src/",
        },
      ],
    }),
  ],
};