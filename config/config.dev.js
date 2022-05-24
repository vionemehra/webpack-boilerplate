const { merge } = require('webpack-merge');
const common = require('./config.common.js');
const path = require('./config.path');


module.exports = merge(common, {
  mode: 'development', 
  devtool: 'inline-source-map',
  entry: {
    commonTheme: path.entry.commonTheme,
    [path.entryName.web]: {
      dependOn: 'commonTheme',
      import: path.entry.js.web,
    },
    [path.entryName.mobile]: {
      dependOn: 'commonTheme',
      import: path.entry.js.mobile,
    }
  },
  devServer: {
    static: {
      directory: path.src
    },
    compress: true,
    port: 2500,
    hot: true,  
    open: {
      target: [path.entry.html.web],
      app: {
        name: 'Chrome',
      },
    },
  },  
  output: {
    path: path.output.path,
    filename: path.output.js,  
    assetModuleFilename: path.output.assets,
    asyncChunks: true,
    compareBeforeEmit: false,
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  }
});