'use strict';

const path    = require('path');
const merge   = require('webpack-merge');
const webpack = require('webpack');

const config = process.env.NODE_ENV !== 'production' ?
  require('./webpack.dev.config') :
  require('./webpack.prod.config');

const common = {
  bail  : true,
  output: {
    path      : path.resolve('dist'),
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test   : /\.js$/,
        use    : 'babel-loader',
        exclude: path.join(__dirname, 'node_modules')
      },
      {
        test: /\.(eot|woff|woff2|ttf|svg|png|jpg)$/,
        use : [
          {
            loader : 'file-loader',
            options: {
              name : '[name]-[hash].[ext]',
              limit: 10000
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new webpack.NamedModulesPlugin()
  ]
};

module.exports = merge.smart(common, config);
