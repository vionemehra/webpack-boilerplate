const webpack = require('webpack');
const htmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");


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
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          // 'style-loader', // for injecting stylesheet to the page
          {            
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: path.src,
            },
          },
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              implementation: require.resolve('sass'),
              sassOptions: {
                fiber: false,
              },
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