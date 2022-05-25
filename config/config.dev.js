const { merge } = require('webpack-merge');
const common = require('./config.common.js');
const path = require('./config.path');


module.exports = merge(common, {
  mode: 'development', 
  devtool: 'inline-source-map',
  entry: {
    // [path.entryName.web]:  [`${path.entry.js.web}`, `${path.entry.scss.web}`],
    // [path.entryName.mobile]:  [`${path.entry.js.mobile}`, `${path.entry.scss.mobile}`],
    [path.entryName.web]:  [`${path.entry.js.web}`],
    [path.entryName.mobile]:  [`${path.entry.js.mobile}`],
  },
  devServer: {
    static: {
      directory: path.src
    },
    compress: true,
    port: 2500,
    hot: true,  
    open: {
      target: [`${path.entry.html.web}`, `${path.entry.html.mobile}`],
      app: {
        name: 'Chrome',
      },
    },
  },  
  output: {
    path: path.output.path,
    filename: path.output.js,  
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
  },
});