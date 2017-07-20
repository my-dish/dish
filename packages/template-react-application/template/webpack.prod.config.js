'use strict';

const path    = require('path');
const webpack = require('webpack');

require('babel-polyfill');

module.exports = {
  entry: [
    'babel-polyfill',
    path.join(__dirname, 'src', 'index.js')
  ],
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      output   : { comments: false },
      compress : { warnings: false, 'screw_ie8': true },
      sourceMap: false
    }),
    new webpack.LoaderOptionsPlugin({
      debug   : false,
      minimize: true
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.AggressiveMergingPlugin()
  ]
};
