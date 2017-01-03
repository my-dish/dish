'use strict';

const path    = require('path');
const webpack = require('webpack');

module.exports = {
  entry: [
    path.join(__dirname, 'main.js')
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/dist/'
  },
  cache: true,
  target: 'web',
  devtool: 'cheap-module-eval-source-map',
  resolve: {
    extensions: ['', '.js']
  },
  resolveLoader: {
    root: path.join(__dirname, 'node_modules')
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: path.join(__dirname, 'node_modules')
      },
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    }),
    new webpack.NoErrorsPlugin(),
  ],
  devServer: {
    port: 8080,
    cache: true,
    inline: true,
    colors: true,
    contentBase: '.'
  }
};
