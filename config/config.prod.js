const webpack = require('webpack');
const htmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserPlugin = require("terser-webpack-plugin");


const path = require('./config.path');

module.exports = {
  mode: 'production',
  entry: {
    commonTheme: path.entry.commonTheme,
    [path.entryName]: {
      dependOn: 'commonTheme',
      import: path.entry.js,
    }
  },
  output: {
    path: path.output.path,
    filename: path.output.js,
    clean: true,
    assetModuleFilename: path.output.assets,
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
    ],
  },
  plugins: [
    new htmlWebpackPlugin({
      template: path.entry.template,
      title: path.entry.title,
      filename: path.output.html,
      minify: false,
      inject: 'body',
    }),
    new MiniCssExtractPlugin({
      filename: path.output.css,
    }),
  ],
  optimization: {
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        defaultVendors: {
          filename: path.output.vendnorJs,
        },
      },
    },
    minimize: true,
    minimizer: [
      new TerserPlugin({
        test: /\.js(\?.*)?$/i,
        extractComments: false,
      })
    ],
  },
}