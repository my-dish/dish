'use strict';

const path                     = require('path');
const merge                    = require('webpack-merge');
const webpack                  = require('webpack');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');

// const ExtractTextPlugin       = require('extract-text-webpack-plugin');

const config = process.env.NODE_ENV !== 'production' ?
  require('./webpack.dev.config') :
  require('./webpack.prod.config');

const localIdentName = process.env.NODE_ENV !== 'production' ?
  '[path]__[name]__[local]__[hash:base64:5]' :
  '[hash:base64:5]';

const cssLoaders = [
  {
    loader : 'css-loader',
    options: {
      modules      : true,
      importLoaders: 1,
      localIdentName
    }
  },
  {
    loader: 'postcss-loader'
  }
];

const common = {
  bail  : true,
  target: 'web',
  output: {
    path      : path.join(__dirname, 'dist'),
    filename  : 'bundle.js',
    publicPath: '/dist/'
  },
  resolve: {
    modules         : ['node_modules'],
    extensions      : ['.js', '.css'],
    enforceExtension: false,
    moduleExtensions: ['-loader'],
    descriptionFiles: ['package.json']
  },
  module: {
    rules: [
      {
        test   : /\.js$/,
        use    : 'babel-loader',
        exclude: path.join(__dirname, 'node_modules')
      },
      {
        test: /\.css$/,
        use : [
          'style-loader',
          ...cssLoaders
        ]

        // loader: ExtractTextPlugin.extract({
        //   fallbackLoader: 'style-loader',
        //   loader: cssLoaders
        // })
      }
    ]
  },

  plugins: [

    // new ExtractTextPlugin('styles.css'),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    }),
    new webpack.NoErrorsPlugin(),
    new CaseSensitivePathsPlugin()
  ],
  performance: { hints: false }
};

module.exports = merge.smart(common, config);
