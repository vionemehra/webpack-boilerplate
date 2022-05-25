const { merge } = require('webpack-merge');
const common = require('./config.common.js');
const TerserPlugin = require("terser-webpack-plugin");
const path = require('./config.path');


module.exports = merge(common, {
  mode: 'production',
  entry: {
    // [path.entryName.web]: {
    //   import: path.entry.js.web,
    // },
    // [path.entryName.mobile]: {
    //   import: path.entry.js.mobile,
    // }
    [path.entryName.web]:  [`${path.entry.js.web}`],
    [path.entryName.mobile]:  [`${path.entry.js.mobile}`],
  },
  output: {    
    path: path.output.path,
    filename: path.output.js,  
    clean: true,    
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
    minimizer: [
      new TerserPlugin({
        test: /\.js(\?.*)?$/i,
        extractComments: false,
      })
    ],
  },
});