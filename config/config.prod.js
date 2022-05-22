const webpack = require('webpack');
const htmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");


const path = require('./config.path');

module.exports = {
  mode: 'production',
  entry: {
    [path.entryName]: path.entry.js,
  },
  output: {
<<<<<<< Updated upstream
    path: path.outputPath,
    filename: 'js/[name].bundle.js',
    clean: true,    
=======
    path: path.output.path,
    filename: path.output.js,
    clean: true,
    assetModuleFilename: path.output.assets,
    asyncChunks: true,
    compareBeforeEmit: false,
>>>>>>> Stashed changes
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
    ],
  },
  plugins: [
    new htmlWebpackPlugin({
<<<<<<< Updated upstream
      template: 'src/pages/index.html',
      title: path.entryPageTitle,
      filename: '[name].html',
=======
      template: path.entry.template,
      title: path.entry.title,
      filename: path.output.html,
>>>>>>> Stashed changes
      minify: false,
      inject: 'body',
    }),
    new MiniCssExtractPlugin({
      filename: path.output.css,
    }),
  ],
<<<<<<< Updated upstream
=======
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
    minimizer: [new TerserPlugin(
      {
        test: /\.js(\?.*)?$/i,
      }
    )],
  },
>>>>>>> Stashed changes
}