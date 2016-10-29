'use strict';

const path                    = require('path');
const precss                  = require('precss');
const webpack                 = require('webpack');
const Dashboard               = require('webpack-dashboard');
const autoprefixer            = require('autoprefixer');
const DashboardPlugin         = require('webpack-dashboard/plugin');
const FlowStatusWebpackPlugin = require('flow-status-webpack-plugin');
// const ExtractTextPlugin       = require('extract-text-webpack-plugin');

const PORT      = 8080;
const dashboard = new Dashboard();

module.exports = {
  entry: [
    path.join(__dirname, 'src', 'index.js')
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
        loaders: [
          'style',
          'css?modules&importLoaders=1&localIdentName=[path]__[name]__[local]__[hash:base64:5]',
          'postcss'
        ]
        // loader: ExtractTextPlugin.extract(
        //   'style',
        //   [
        //     'css?modules&importLoaders=1&localIdentName=[path]__[name]__[local]__[hash:base64:5]',
        //     'postcss'
        //   ]
        // )
      }
    ]
  },
  plugins: [
    // new ExtractTextPlugin('styles.css'),
    new DashboardPlugin(dashboard.setData),
    new webpack.HotModuleReplacementPlugin(), // if you don't specify `--hot`
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    }),
    new webpack.NoErrorsPlugin(),
    new FlowStatusWebpackPlugin({
      failOnError: true
    })
  ],
  postcss: () => [precss, autoprefixer],
  devServer: {
    hot: true,
    port: PORT,
    quiet: true,
    cache: true,
    inline: true,
    colors: true,
    contentBase: '.'
  }
};
