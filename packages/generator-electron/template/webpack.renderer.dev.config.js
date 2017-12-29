'use strict';

const path                    = require('path');
const webpack                 = require('webpack');
const Dashboard               = require('webpack-dashboard');
const DashboardPlugin         = require('webpack-dashboard/plugin');
const FlowStatusWebpackPlugin = require('flow-status-webpack-plugin');

require('babel-polyfill');

const dashboard = new Dashboard();

module.exports = {
  cache: true,
  entry: [
    'babel-polyfill',
    'react-hot-loader/patch',
    path.join(__dirname, 'src', 'renderer', 'index.js')
  ],
  output: {
    publicPath: '/dist/'
  },
  devtool: 'cheap-module-eval-source-map',
  plugins: [
    new DashboardPlugin(dashboard.setData),
    new webpack.HotModuleReplacementPlugin(),
    new FlowStatusWebpackPlugin({
      failOnError: true
    }),
    new webpack.LoaderOptionsPlugin({
      debug   : true,
      minimize: false
    })
  ],
  devServer: {
    hot        : true,
    port       : 8080,
    quiet      : true,
    inline     : true,
    contentBase: '.'
  }
};
