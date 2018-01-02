'use strict';

const path = require('path');
const webpack = require('webpack');

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry  : {
    bundle: [

      // 'react-hot-loader/patch',
      // 'webpack-hot-middleware/client',
      path.join(__dirname, 'src', 'client', 'index.js')
    ]
  },
  output: {
    filename     : '[name].js',
    chunkFilename: '[name].bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use : [
          'style-loader',
          {
            loader : 'css-loader',
            options: {
              modules       : true,
              importLoaders : 1,
              localIdentName: '[path]__[name]__[local]__[hash:base64:5]'
            }
          },
          'postcss-loader'
        ]
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
};
