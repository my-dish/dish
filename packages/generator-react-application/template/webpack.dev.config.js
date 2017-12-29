'use strict';

const path                    = require('path');
const webpack                 = require('webpack');
const Dashboard               = require('webpack-dashboard');
const DashboardPlugin         = require('webpack-dashboard/plugin');
const FlowStatusWebpackPlugin = require('flow-status-webpack-plugin');

const dashboard = new Dashboard();

module.exports = {
  entry: [
    'react-hot-loader/patch',
    path.join(__dirname, 'src', 'index.js')
  ],
  cache  : true,
  devtool: 'cheap-module-eval-source-map',
  plugins: [
    new DashboardPlugin(dashboard.setData),
    new webpack.HotModuleReplacementPlugin(), // if you don't specify `--hot`
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
