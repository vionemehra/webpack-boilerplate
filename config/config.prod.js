const webpack = require('webpack');
const htmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserPlugin = require("terser-webpack-plugin");


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
    assetModuleFilename: 'images/[name][ext]',
    asyncChunks: true,
    compareBeforeEmit: false,
  },
  module: {
    rules: [
      {
        test: /\.js$/i,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // 'style-loader', // for injecting stylesheet to the page
          {            
            loader: MiniCssExtractPlugin.loader,
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
    new MiniCssExtractPlugin({
      filename: "css/[name].css",
    }),
  ],
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin(
      {
        test: /\.js(\?.*)?$/i,
      }
    )],
  },
}