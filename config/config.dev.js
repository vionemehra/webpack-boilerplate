const webpack = require('webpack');
const htmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const path = require('./config.path');

module.exports = {
  mode: 'development',
  entry: {
    [path.entryName]: path.entry.js,
  },
  devtool: 'inline-source-map',
  devServer: {
    static: {
      directory: path.src
    },
    compress: true,
    port: 2500,
    hot: true,  
<<<<<<< Updated upstream
    open: {                 // open: true,
      target: [path.entryPageName],
=======
    open: {
      target: [path.entry.html],
>>>>>>> Stashed changes
      app: {
        name: 'Chrome',
      },
    },
  },  
  output: {
<<<<<<< Updated upstream
    path: path.outputPath,
    filename: 'js/[name].js',
=======
    path: path.output.path,
    filename: path.output.js,  
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
<<<<<<< Updated upstream
=======
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
>>>>>>> Stashed changes
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
  }
>>>>>>> Stashed changes
  
}