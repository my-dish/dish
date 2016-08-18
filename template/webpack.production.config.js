'use strict';

const path              = require('path');
const precss            = require('precss');
const webpack           = require('webpack');
const autoprefixer      = require('autoprefixer');
// const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: path.join(__dirname, 'src', 'index.js'),
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  target: 'web',
  resolve: {
    extensions: ['', '.js', '.css']
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        include: path.join(__dirname, 'src'),
        exclude: path.join(__dirname, 'node_modules')
      },
      {
        test: /\.css$/,
        loader: 'style!css?modules!postcss'
        // loader: ExtractTextPlugin.extract(
        //   'style',
        //   [
        //     'css?modules&importLoaders=1&localIdentName=[hash:base64:5]',
        //     'postcss'
        //   ]
        // )
      }
    ]
  },
  plugins: [
    // new ExtractTextPlugin('styles.css'),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      output: {
        comments: false
      },
      compress: {
        warnings: false
      },
      sourceMap: false
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.AggressiveMergingPlugin()
  ],
  postcss: () => [precss, autoprefixer]
};
