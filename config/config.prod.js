const { merge } = require('webpack-merge');
const common = require('./config.common.js');
const TerserPlugin = require("terser-webpack-plugin");
const path = require('./config.path');


module.exports = merge(common, {
  mode: 'production',
  output: {
    path: path.output.path,
    filename: path.output.js,
    clean: true,
    assetModuleFilename: path.output.assets,
    asyncChunks: true,
    compareBeforeEmit: false,
  },
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
});